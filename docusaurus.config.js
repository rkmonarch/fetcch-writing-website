require("dotenv").config()
const math = require("remark-math")
const katex = require("rehype-katex")
const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "Fetcch",
  tagline: "Research respository of Fetcch",
  baseUrl: process.env.REACT_APP_BASE_URL,
  url: process.env.REACT_APP_TARGET_URL,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "fetcchx", // Usually your GitHub org/user name.
  projectName: "writings-website", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous"
    }
  ],
  themes: ['docusaurus-theme-frontmatter'],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus2-dotenv',
      {
          path: "./.env", // The path to your environment variables.
          safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
          systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
          silent: false, //  If true, all warnings will be suppressed
          expand: false, // Allows your variables to be "expanded" for reusability within your .env file
          defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
    // [
    //   '@docusaurus/plugin-google-gtag',
    //   {
    //     trackingID: 'G-VH1WPT8X9P',
    //     anonymizeIP: true,
    //   },
    // ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: "Writings",
          path: "./content",
          routeBasePath: "/",
          postsPerPage: "ALL",
          feedOptions: {
            type: "all"
            // copyright: `Copyright © ${new Date().getFullYear()} Flashbots, .`,
          },
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/scss/custom.scss")
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          // filename: 'sitemap.xml',
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'Writings'},
        {name: 'twitter:description', content: 'A collection of articles and papers from Fetcch.'},
        {name: 'twitter:image', content: 'img/tw-card.png'}
      ],
      navbar: {
        // title: "Fetcch",
        logo: {
          alt: "Fetcch",
          src: "img/fetcch-logo.svg",
          target: "_self"
        },
        items: [
          {href: "/about", label: 'About', position: 'left'},
          {href: "https://docs.fetcch.xyz/", label: 'Docs', position: 'left'},
          {href: "https://discord.gg/qUkDjerAwq", label: 'Discord', position: 'left'},
          {href: "https://twitter.com/FetcchX", label: 'Twitter', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //  href: "https://github.com/flashbots/writings-website",
          //  label: "GitHub",
          //  position: "right"
          // }
        ]
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'x',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/fetcchx',
              },
              {
                label: 'Documentation',
                href: 'https://docs.fetcch.xyz/',
              },
              {
                label: 'Status',
                href: 'https://status.fetcch.xyz/',
              },
            ],
          },
          {
            title: 'x',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/qUkDjerAwq',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Fetcch, Ltd`,
      },
      gtag: {
        trackingID: 'G-VH1WPT8X9P',
        anonymizeIP: true,
      },
      // algolia: {
      //   apiKey: '',
      //   indexName: 'flashbots',
      //   // Optional: see doc section below
      //   appId: '',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"]
      }
    })
})
