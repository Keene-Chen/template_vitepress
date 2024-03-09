/**
 * @file sidebar.ts
 * @desc sidebar
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.03.09-21:52:22
 */

import type { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.SidebarMulti = {
  '/article/': defaultSidebar(),
};

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'test',
      items: [
        { text: 'test1', link: '/article/api-examples.md' },
        { text: 'test2', link: '/guide/markdown-examples.md' },
      ],
    },
    {
      text: '示例',
      items: [{ text: '示例', link: '/article/markdown-examples.md' }],
    },
  ];
}

export default sidebar;
