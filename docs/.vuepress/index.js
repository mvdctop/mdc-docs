import { defaultTheme } from '@vuepress/theme-default';

export default {
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh-Hans/': {
                selectLanguageName: '简体中文',
            },
            '/zh-Hant/': {
                selectLanguageName: '繁體中文',
            },
        },
    }),
}
