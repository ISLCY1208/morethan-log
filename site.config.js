const CONFIG = {
  // profile setting (required)
  profile: {
    name: "0xlcy",
    image: "/3304802.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Visual designer",
    bio: "🪐Exploring Life, Sharing Insights.",
    email: "1@0xlcy.com",
    linkedin: "",
    github: "ISLCY1208",
    instagram: "",
  },
  projects: [
    {
      name: `0xlcyの灵感空间`,
      href: "https://github.com/ISLCY1208/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "0xlcyの灵感空间",
    description: "🪐Exploring Life, Sharing Insights",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://slcy.xyz",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Web3.0"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }