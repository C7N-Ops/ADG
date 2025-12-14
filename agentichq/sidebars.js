// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  conceptsSidebar: [
    {
      type: 'category',
      label: 'ADG Concepts',
      items: [
        'concepts/introduction',
        'concepts/what-is-adg',
        'concepts/core-principles',
        'concepts/benefits',
      ],
    },
  ],
  standardsSidebar: [
    {
      type: 'category',
      label: 'ADG Standards',
      items: [
        'standards/overview',
        'standards/agent-behavior',
        'standards/human-oversight',
        'standards/audit-compliance',
      ],
    },
  ],
  frameworkSidebar: [
    {
      type: 'category',
      label: 'ADG Framework',
      items: [
        'framework/getting-started',
        'framework/implementation',
        'framework/best-practices',
        'framework/tooling',
      ],
    },
  ],
};

export default sidebars;
