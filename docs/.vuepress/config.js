import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  bundler: webpackBundler({
    // 可选的 webpack 打包配置
    // 例如：配置 source map
    devtool: 'source-map',
  }),
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
            text: 'Home',
            link: '/README.md',
          },
          {
            text: 'File naming rules',
            link: '/naming.md',
          },
          {
            text: 'How to use each client',
            link: '/clients.md',
          },
          {
            text: 'Command line parameters and configuration file editing',
            link: '/cli.md',
          },
          {
            text: 'Client configuration',
            link: '/client_configuration.md',
          },
          {
            text: 'Cloud configuration',
            link: '/configuration.md',
          },
          {
            text: 'Processing Result Push Configuration',
            link: '/bot_configuration.md',
          },
          {
            text: 'Instructions related to cloud disk mounting and NAS',
            link: '/cloud_mount.md',
          },
          {
            text: 'BUG report and feature suggestions',
            link: '/bug_report.md',
          },
          {
            text: 'Error handling',
            link: '/error.md',
          },
          {
            text: 'Clear configuration',
            link: '/clean_config.md',
          },
          {
            text: 'Legal document',
            link: '/laws/README.md',
          },
          {
            text: 'Contact us',
            link: '/contact.md',
          },
        ],
      },
      '/chs/': {
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
            text: '首页',
            link: '/chs/README.md',
          },
          {
            text: '文件命名规则',
            link: '/chs/naming.md',
          },
          {
            text: '各客户端使用方式',
            link: '/chs/clients.md',
          },
          {
            text: '命令行参数与配置文件编辑',
            link: '/chs/cli.md',
          },
          {
            text: '客户端设置',
            link: '/chs/client_configuration.md',
          },
          {
            text: '云配置',
            link: '/chs/configuration.md',
          },
          {
            text: '处理结果推送配置',
            link: '/chs/bot_configuration.md',
          },
          {
            text: '云盘挂载与NAS相关说明',
            link: '/chs/cloud_mount.md',
          },
          {
            text: 'BUG报告与功能建议',
            link: '/chs/bug_report.md',
          },
          {
            text: '错误处理',
            link: '/chs/error.md',
          },
          {
            text: '清空配置',
            link: '/chs/clean_config.md',
          },
          {
            text: '法律文件',
            link: '/chs/laws/README.md',
          },
          {
            text: '联系我们',
            link: '/chs/contact.md',
          },
        ],
      },
      '/cht/': {
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
            text: '首頁',
            link: '/cht/README.md',
          },
          {
            text: '檔案命名規則',
            link: '/cht/naming.md',
          },
          {
            text: '各客戶端使用方式',
            link: '/cht/clients.md',
          },
          {
            text: '命令列參數與設定檔編輯',
            link: '/cht/cli.md',
          },
          {
            text: '客戶端設定',
            link: '/cht/client_configuration.md',
          },
          {
            text: '雲端配置',
            link: '/cht/configuration.md',
          },
          {
            text: '處理結果推播設定',
            link: '/cht/bot_configuration.md',
          },
          {
            text: '雲端碟掛載與NAS相關說明',
            link: '/cht/cloud_mount.md',
          },
          {
            text: 'BUG報告與功能建議',
            link: '/cht/bug_report.md',
          },
          {
            text: '錯誤處理',
            link: '/cht/error.md',
          },
          {
            text: '清空配置',
            link: '/cht/clean_config.md',
          },
          {
            text: '法律文件',
            link: '/cht/laws/README.md',
          },
          {
            text: '联系我们',
            link: '/cht/contact.md',
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
    '/chs/': {
      lang: 'zh-CN',
      title: 'MDC文档',
      description: 'MDC文档',
    },
    '/cht/': {
      lang: 'zh-TW',
      title: 'MDC文档',
      description: 'MDC文档',
    },
  },
});