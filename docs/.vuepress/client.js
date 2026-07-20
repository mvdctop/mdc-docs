import { defineClientConfig } from 'vuepress/client';
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const storageKey = 'mdc-docs-language';

const languagePaths = {
  en: '/',
  zhHans: '/zh-Hans/',
  zhHant: '/zh-Hant/',
};

const languagePathAliases = [
  {
    pattern: /^\/chs(?=\/|$)/i,
    target: '/zh-Hans',
  },
  {
    pattern: /^\/zh-CN(?=\/|$)/i,
    target: '/zh-Hans',
  },
  {
    pattern: /^\/cht(?=\/|$)/i,
    target: '/zh-Hant',
  },
  {
    pattern: /^\/zh-TW(?=\/|$)/i,
    target: '/zh-Hant',
  },
  {
    pattern: /^\/zh-HK(?=\/|$)/i,
    target: '/zh-Hant',
  },
  {
    pattern: /^\/zh-MO(?=\/|$)/i,
    target: '/zh-Hant',
  },
];

const resolveLanguagePathAlias = (path) => {
  for (const { pattern, target } of languagePathAliases) {
    const match = path.match(pattern);

    if (!match) continue;

    const suffix = path.slice(match[0].length);
    return suffix ? `${target}${suffix}` : `${target}/`;
  }

  return null;
};

const normalizePath = (path) => {
  if (path.startsWith('/zh-Hans/')) return languagePaths.zhHans;
  if (path.startsWith('/zh-Hant/')) return languagePaths.zhHant;
  return languagePaths.en;
};

const detectLanguagePath = () => {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const normalized = languages
    .filter(Boolean)
    .map((language) => language.toLowerCase());

  if (normalized.some((language) => language === 'zh-cn' || language.startsWith('zh-hans'))) {
    return languagePaths.zhHans;
  }

  if (
    normalized.some((language) =>
      language === 'zh-tw' ||
      language === 'zh-hk' ||
      language === 'zh-mo' ||
      language.startsWith('zh-hant')
    )
  ) {
    return languagePaths.zhHant;
  }

  return languagePaths.en;
};

const getStoredLanguagePath = () => {
  const stored = localStorage.getItem(storageKey);
  return Object.values(languagePaths).includes(stored) ? stored : null;
};

const rememberLanguagePath = (path) => {
  localStorage.setItem(storageKey, normalizePath(path));
};

export default defineClientConfig({
  setup() {
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      const canonicalPath = resolveLanguagePathAlias(route.path);

      if (canonicalPath) {
        rememberLanguagePath(canonicalPath);
        router.replace({
          path: canonicalPath,
          query: route.query,
          hash: route.hash,
        });
        return;
      }

      if (route.path === '/') {
        const targetPath = getStoredLanguagePath() || detectLanguagePath();

        rememberLanguagePath(targetPath);

        if (targetPath !== '/') {
          router.replace(targetPath);
        }

        return;
      }

      rememberLanguagePath(route.path);
    });

    watch(
      () => route.path,
      (path) => {
        const canonicalPath = resolveLanguagePathAlias(path);

        if (canonicalPath) {
          rememberLanguagePath(canonicalPath);
          router.replace({
            path: canonicalPath,
            query: route.query,
            hash: route.hash,
          });
          return;
        }

        rememberLanguagePath(path);
      }
    );
  },
});
