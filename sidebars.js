/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "nevtreh",
    {
      type: "category",
      label: "ЗЭЭЛИЙН БҮРТГЭЛ",
      link: { type: "doc", id: "zeel_moduli" },
      items: [
        "burt_zeeldegch",
        {
          type: "category",
          label: "Зээлийн хүсэлт",
          link: { type: "doc", id: "zeeliinHuselt" },
          items: ["zeelSudlah", "ZeelShiidwer"],
        },
        "zeelGeree",

        {
          type: "category",
          label: "Зээлийн гэрээтэй ажиллах",
          link: {
            type: "generated-index",
            title: "Зээлийн гэрээтэй ажиллах",
            description:
              "Зээлдэгч зээл авснаас хойш төлж барагдуулах хүртэлх хугацаанд хэрэглэгчийн эрхийн хязгаартайгаар дараах үйлдлүүдийг хийх боломжтой ба холбогдох бүх гүйлгээ, данс, ханш г.м мэдээллийг автоматаар онлайн нэгдсэн сүлжээнээс татаж авна.",
          },

          items: [
            "gNuhtsul",
            "zgSungah",
            "zeelAngilal",
            "zeelHaah",
            "yavtsHynalt",
            "zeelTuuh",
            "zeelTuluh",
          ],
        },
        {
          type: "category",
          label: "Зээлийн тайлан",
          link: {
            type: "generated-index",
            title: "Зээлийн тайлан",
          },
          items: ["loanRprt", "zotailan"],
        },

        "doTailan",
      ],
    },
    {
      type: "category",
      label: "НЯБО БҮРТГЭЛ",
      link: { type: "doc", id: "nyboModuli" },
      items: [
        {
          type: "category",
          label: "Харилцагч бүртгэх, данс нээх",
          link: {
            type: "generated-index",
            title: "Харилцагч бүртгэх, данс нээх",
            description:
              "Зээлийн бус харилцагч үүсгэх бол энэ модулийг ашиглана.",
          },
          items: ["hariltsagch", "dans"],
        },

        "guilgeeJurnal",
        {
          type: "category",
          label: "Гүйлгээ",
          items: ["nehemjlel", "Tguilgee", "tBusGuilgee"],
        },

        {
          type: "category",
          label: "Гүйлгээний төлөв",
          items: [
            "guilUndurluh",
            "udurUndurluh",
            "zeelHuu",
            "eRate",
            "guilHuraangui",
          ],
        },

        {
          type: "category",
          label: "Ня-бо тайлан",
          link: {
            type: "generated-index",
            title: "Ня-бо тайлан",
            description:
              "Let's learn about the most important Docusaurus concepts!",
            keywords: ["тайлан"],
          },
          items: ["huulga", "tbalance", "nTailan6"],
        },
      ],
    },
    // nybo tohirgoo
    {
      type: "category",
      label: "НЯБО ТОХИРГОО",
      items: ["dansTuluvlu"],
    },
    "nemelt",
  ],
};

module.exports = sidebars;
