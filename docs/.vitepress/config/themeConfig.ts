/**
 * @file themeConfig.ts
 * @desc themeConfig
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.03.09-22:18:02
 */

import { DefaultTheme } from 'vitepress';
import nav from './navbar';
import sidebar from './sidebar';

const themeConfig: DefaultTheme.Config = {
  docFooter: {
    next: '下一节',
    prev: '上一节',
  },
  footer: {
    copyright: 'MIT Licensed | Copyright © 2024-present keenechen.cn',
    message: 'Released under the MIT License.',
  },
  logo: '/vitepress-logo-large.webp',
  nav,
  sidebar,
  search: {
    provider: 'local',
  },
  socialLinks: [{ icon: 'github', link: 'https://github.com/Keene-Chen' }],
};

export default themeConfig;
