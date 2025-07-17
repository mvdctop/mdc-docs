import { defaultTheme } from '@vuepress/theme-default';

export default {
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/chs/': {
                selectLanguageName: '简体中文',
            },
            '/cht/': {
                selectLanguageName: '繁體中文',
            },
        },
    }),
}