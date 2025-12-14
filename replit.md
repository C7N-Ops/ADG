# AgenticDevOpsHQ.com - Docusaurus Documentation Site

## Overview
This is the documentation site for **Agentic Development Governance (ADG)** - hosted at AgenticDevOpsHQ.com. The site is built with Docusaurus and configured for GitHub Pages deployment.

## Project Structure
```
/
├── blog/                    # Blog posts
│   ├── authors.yml          # Blog author definitions
│   ├── tags.yml             # Blog tag definitions
│   └── 2024-12-14-*.md      # Blog post files
├── docs/                    # Documentation
│   ├── concepts/            # ADG Concepts documentation
│   │   ├── introduction.md
│   │   ├── what-is-adg.md
│   │   ├── core-principles.md
│   │   └── benefits.md
│   ├── standards/           # ADG Standards documentation
│   │   ├── overview.md
│   │   ├── agent-behavior.md
│   │   ├── human-oversight.md
│   │   └── audit-compliance.md
│   └── framework/           # ADG Framework documentation
│       ├── getting-started.md
│       ├── implementation.md
│       ├── best-practices.md
│       └── tooling.md
├── src/
│   ├── components/          # React components
│   ├── css/                 # Custom CSS styles
│   └── pages/               # Custom pages (homepage, contributors)
├── static/                  # Static assets (images, favicon)
├── .github/workflows/       # GitHub Actions for deployment
├── docusaurus.config.js     # Main Docusaurus configuration
├── sidebars.js              # Sidebar navigation configuration
└── package.json             # Node.js dependencies and scripts
```

## Key Configuration

### Site Settings (docusaurus.config.js)
- **URL**: https://agenticdevopshq.com
- **Organization**: C7N-Ops
- **Project**: ADG
- **Repository**: https://github.com/C7N-Ops/ADG

### Navigation Structure
- **Concepts**: Introduction to ADG principles and philosophy
- **Standards**: Formal specifications for governance implementation
- **Framework**: Practical implementation guidance
- **Blog**: Articles and updates about ADG
- **Contributors**: Team members and contribution info

## Development

### Running locally
```bash
npm start
```
The dev server runs on port 5000.

### Building for production
```bash
npm run build
```

### Deploying to GitHub Pages
The site is configured for automatic deployment via GitHub Actions when pushed to the `main` branch. See `.github/workflows/deploy.yml`.

## GitHub Pages Setup Instructions
1. Push repo to https://github.com/C7N-Ops/ADG
2. Go to Settings > Pages and enable GitHub Pages from GitHub Actions
3. Configure custom domain `agenticdevopshq.com` in Pages settings
4. The site will automatically deploy on push to main

## Branding
- Primary color: #e07b4f (coral/orange)
- Dark theme hero: Blue gradient (#1a1a2e to #0f3460)
- Logo: Custom SVG in static/img/logo.svg
