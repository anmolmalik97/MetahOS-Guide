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
  organizationName: "anmolmalik97",
  projectName: "MetahOS-Guide",

  // Lumen — Clinical Calm UI: behaviour layer (reading progress, scroll reveal,
  // and the `lumen-docs` body scope) for internal documentation pages only.
  clientModules: [require.resolve("./src/clientModules/lumen.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          includeCurrentVersion: false,
          editUrl: "https://github.com/anmolmalik97/MetahOS-Guide/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/anmolmalik97/MetahOS-Guide/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "dark" },
      navbar: {
        title: "MetahOS",
        logo: {
          alt: "MetahOS",
          src: "img/m16.png",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
          },

          {
            label: "API/Webhooks",
            href: "https://docs.metahos.com",
            external: true,
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
                label: "Tutorial",
                to: "/docs/intro",
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
