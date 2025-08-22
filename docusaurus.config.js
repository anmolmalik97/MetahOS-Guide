// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MetahOS",
  tagline: "Healthcare Operating System",
  url: "https://guide.metahos.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/m16.png",
  organizationName: "anmolmalik97", // Usually your GitHub org/user name.
  projectName: "MetahOS-Guide", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          includeCurrentVersion: false,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // Add plugins for the second docs instance
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "custom-docs",
        path: "docs-custom",
        routeBasePath: "custom-docs",
        sidebarPath: require.resolve("./sidebars-custom.js"),
        editUrl: "https://github.com/anmolmalik97/MetahOS-Guide/tree/main/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "dark" },
      navbar: {
        title: "MetahOS",
        logo: {
          alt: "My Site Logo",
          src: "img/m16.png",
        },
        items: [
          // Add navigation to your custom docs
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "KSK Tutorial",
            docsPluginId: "custom-docs", // Reference the custom docs plugin
          },
          // {
          //   label: "API/Webhooks",
          //   href: "https://docs.metahos.com",
          //   external: true,
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Custom Docs", // Add link to custom docs in footer
                to: "/custom-docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Learn.metahos",
                href: "https://learn.metahos.com",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/healthcareOS",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UChqkS-O5YneEnvhSUBi0fVA/videos",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://metahos.com/blog/",
              },
              {
                label: "Visit Us",
                href: "https://metahos.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MetahOS`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
