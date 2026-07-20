import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { redirectPlugin } from '@vuepress/plugin-redirect';

const localePathRedirectAliases = [
  {
    from: '/chs',
    to: '/zh-Hans',
  },
  {
    from: '/zh-CN',
    to: '/zh-Hans',
  },
  {
    from: '/cht',
    to: '/zh-Hant',
  },
  {
    from: '/zh-TW',
    to: '/zh-Hant',
  },
  {
    from: '/zh-HK',
    to: '/zh-Hant',
  },
  {
    from: '/zh-MO',
    to: '/zh-Hant',
  },
];

const createLocalePathRedirects = (app) =>
  app.pages.reduce((redirects, { path }) => {
    localePathRedirectAliases.forEach(({ from, to }) => {
      if (path.startsWith(`${to}/`)) {
        redirects[path.replace(to, from)] = path;
      }
    });

    return redirects;
  }, {});

export default defineUserConfig({
  bundler: webpackBundler({
    // 可选的 webpack 打包配置
    // 例如：配置 source map
    devtool: 'source-map',
    chainWebpack: (config) => {
      config.module.rule('ts').use('esbuild-loader').tap((options) => ({
        ...options,
        target: 'esnext',
      }));
    },
  }),
  plugins: [
    redirectPlugin({
      config: createLocalePathRedirects,
    }),
  ],
  theme: defaultTheme({
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'English',
        contributors: false,
        navbar: [
          {
            text: 'Official Website',
            link: 'https://www.mvdc.top',
          },
          {
            text: 'User Panel',
            link: 'https://user.mvdc.top',
          },
          {
            text: 'Download',
            link: 'https://dl.mvdc.top',
          },
        ],
        sidebar: [
          {
            text: '🏠 Home',
            link: '/README.md',
          },
          {
            text: '🧾 File naming rules',
            link: '/naming.md',
          },
          {
            text: '💻 How to use each client',
            link: '/clients.md',
          },
          {
            text: '⚙️ Client configuration',
            link: '/client_configuration.md',
          },
          {
            text: '☁️ Cloud configuration',
            link: '/configuration.md',
          },
          {
            text: '🔔 Processing Result Push Configuration',
            link: '/bot_configuration.md',
          },
          {
            text: '🗂️ Instructions related to cloud disk mounting and NAS',
            link: '/cloud_mount.md',
          },
          {
            text: '🐞 BUG report and feature suggestions',
            link: '/bug_report.md',
          },
          {
            text: '🚨 Error handling',
            link: '/error.md',
          },
          {
            text: '🧹 Clear configuration',
            link: '/clean_config.md',
          },
          {
            text: '📜 Legal document',
            link: '/laws/README.md',
          },
          {
            text: '✉️ Contact us',
            link: '/contact.md',
          },
        ],
      },
      '/zh-Hans/': {
        selectLanguageName: '简体中文',
        contributors: false,
        navbar: [
          {
            text: '官网',
            link: 'https://www.mvdc.top',
          },
          {
            text: '用户面板',
            link: 'https://user.mvdc.top',
          },
          {
            text: '下载',
            link: 'https://dl.mvdc.top',
          },
        ],
        sidebar: [
          {
            text: '🏠 首页',
            link: '/zh-Hans/README.md',
          },
          {
            text: '🧾 文件命名规则',
            link: '/zh-Hans/naming.md',
          },
          {
            text: '💻 各客户端使用方式',
            link: '/zh-Hans/clients.md',
          },
          {
            text: '⚙️ 客户端设置',
            link: '/zh-Hans/client_configuration.md',
          },
          {
            text: '☁️ 云配置',
            link: '/zh-Hans/configuration.md',
          },
          {
            text: '🔔 处理结果推送配置',
            link: '/zh-Hans/bot_configuration.md',
          },
          {
            text: '🗂️ 云盘挂载与NAS相关说明',
            link: '/zh-Hans/cloud_mount.md',
          },
          {
            text: '🐞 BUG报告与功能建议',
            link: '/zh-Hans/bug_report.md',
          },
          {
            text: '🚨 错误处理',
            link: '/zh-Hans/error.md',
          },
          {
            text: '🧹 清空配置',
            link: '/zh-Hans/clean_config.md',
          },
          {
            text: '📜 法律文件',
            link: '/zh-Hans/laws/README.md',
          },
          {
            text: '✉️ 联系我们',
            link: '/zh-Hans/contact.md',
          },
        ],
      },
      '/zh-Hant/': {
        selectLanguageName: '繁體中文',
        contributors: false,
        navbar: [
          {
            text: '官網',
            link: 'https://www.mvdc.top',
          },
          {
            text: '用戶面板',
            link: 'https://user.mvdc.top',
          },
          {
            text: '下載',
            link: 'https://dl.mvdc.top',
          },
        ],
        sidebar: [
          {
            text: '🏠 首頁',
            link: '/zh-Hant/README.md',
          },
          {
            text: '🧾 檔案命名規則',
            link: '/zh-Hant/naming.md',
          },
          {
            text: '💻 各客戶端使用方式',
            link: '/zh-Hant/clients.md',
          },
          {
            text: '⚙️ 客戶端設定',
            link: '/zh-Hant/client_configuration.md',
          },
          {
            text: '☁️ 雲端配置',
            link: '/zh-Hant/configuration.md',
          },
          {
            text: '🔔 處理結果推播設定',
            link: '/zh-Hant/bot_configuration.md',
          },
          {
            text: '🗂️ 雲端碟掛載與NAS相關說明',
            link: '/zh-Hant/cloud_mount.md',
          },
          {
            text: '🐞 BUG報告與功能建議',
            link: '/zh-Hant/bug_report.md',
          },
          {
            text: '🚨 錯誤處理',
            link: '/zh-Hant/error.md',
          },
          {
            text: '🧹 清空配置',
            link: '/zh-Hant/clean_config.md',
          },
          {
            text: '📜 法律文件',
            link: '/zh-Hant/laws/README.md',
          },
          {
            text: '✉️ 聯繫我們',
            link: '/zh-Hant/contact.md',
          },
        ],
      },
    },
  }),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MDC Documents',
      description: 'MDC Documents',
    },
    '/zh-Hans/': {
      lang: 'zh-CN',
      title: 'MDC文档',
      description: 'MDC文档',
    },
    '/zh-Hant/': {
      lang: 'zh-TW',
      title: 'MDC文档',
      description: 'MDC文档',
    },
  },
});
