import { themes as prismThemes } from "prism-react-renderer";
const config = {
  title: "@kousta-ui",
  tagline: "a ui library focuses on performance and convenience",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  organizationName: "Kousta",
  projectName: "@kousta-ui",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  themes: ["@docusaurus/theme-search-algolia"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Oustaa/kousta-ui/blob/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    algolia: {
      appId: "ZUU3NMKS1V",
      apiKey: "d11d3ce32769b6ff9f0417c9d113ca08",
      indexName: "825af3b9ab935f0abee0b53ba7e4ffd9",
      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",
      replaceSearchResultPathname: {
        from: "/docs/",
        to: "/",
      },
      searchParameters: {},
      searchPagePath: "search",
      insights: false,
    },
    navbar: {
      title: "@kousta-ui",
      logo: {
        alt: "@kousta-ui logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/oustaa/@kousta-ui",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Table",
              to: "/docs/table",
            },
            {
              label: "Components",
              to: "/docs/components",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Oustaa/kousta-ui",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @kousta-ui, Kousta.`,
    },
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.dracula,
    },
  },
};
export default config;
//# sourceMappingURL=docusaurus.config.js.map
