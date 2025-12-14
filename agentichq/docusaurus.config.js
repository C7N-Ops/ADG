// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agentic DevOps HQ',
  tagline: 'Governance for the Age of Autonomous Development',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://agenticdevopshq.com',
  baseUrl: '/',

  organizationName: 'C7N-Ops',
  projectName: 'ADG',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/C7N-Ops/ADG/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/C7N-Ops/ADG/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/adg-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Agentic DevOps HQ',
        logo: {
          alt: 'Agentic DevOps HQ Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'conceptsSidebar',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'standardsSidebar',
            position: 'left',
            label: 'Standards',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frameworkSidebar',
            position: 'left',
            label: 'Framework',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contributors', label: 'Contributors', position: 'left'},
          {
            href: 'https://github.com/C7N-Ops/ADG',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'ADG Concepts',
                to: '/docs/concepts/introduction',
              },
              {
                label: 'ADG Standards',
                to: '/docs/standards/overview',
              },
              {
                label: 'ADG Framework',
                to: '/docs/framework/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributors',
                to: '/contributors',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/C7N-Ops/ADG/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/C7N-Ops/ADG',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agentic DevOps HQ. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
