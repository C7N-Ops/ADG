// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  conceptsSidebar: [
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/index',
        'concepts/definitions-agentic-development',
        'concepts/what-is-adg',
        'concepts/adg-vs-ai-governance',
        'concepts/failure-modes-drift-taxonomy',
        'concepts/case-studies-hub',
      ],
    },
  ],

  standardsSidebar: [
    {
      type: 'category',
      label: 'Standards',
      collapsed: false,
      items: [
        'standards/index',
        'standards/standards-index',
      ],
    },
  ],

  frameworkSidebar: [
    {
      type: 'category',
      label: 'Framework',
      collapsed: false,
      items: [
        'framework/index',
        'framework/implementation-quickstart',
        'framework/governance-controls-checklist',
      ],
    },
  ],
};

export default sidebars;
