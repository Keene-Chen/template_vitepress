/**
 * @file config.ts
 * @desc config
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.03.09-18:22:23
 */

import { defineConfig } from 'vitepress';
import themeConfig from './config/themeConfig';

const config = defineConfig({
  cleanUrls: true,
  description: 'Docs',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  outDir: '../dist',
  themeConfig,
  title: "KeeneChen's Docs",
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  },
});

export default config;

