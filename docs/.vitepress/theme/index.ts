/**
 * @file index.ts
 * @desc index
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.03.09-18:21:38
 */

import DefaultTheme from 'vitepress/theme-without-fonts';
import Layout from './Layout.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout,
};
