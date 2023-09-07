/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  "nevtreh",

    {
      type: "category",
      label: "ЗЭЭЛИЙН БҮРТГЭЛ",
      items: [
        "zeel_moduli",
        "burt_zeeldegch",
        {
         type: "category",
          label: "Зээлийн хүсэлт",
          items: ["zeeliinHuselt", "zeelSudlah", "ZeelShiidwer", "zeelGeree"],
        },
        {
          type: "category",
          label: "Зээлийн гэрээтэй ажиллах",
          items: [
            "gNuhtsul",
            "zgSungah",
            "zeelAngilal",
            "zeelHaah",
            "yavtsHynalt",
            "zeelTuuh",
            "zeelTuluh"
          ],
        },
        {
          type: "category",
          label: "Зээлийн тайлан",
          link: {
            type: 'generated-index',
            title: 'Зээлийн тайлан',
            description:
              "Let's learn about the most important Docusaurus concepts!",
            keywords: ['тайлан'],
       
          },
          items: ["loanRprt","zotailan"],
        },
      "doTailan",

      ],
    },
    {
      type: "category",
      label: "НЯБО БҮРТГЭЛ",
      items: [
        "nyboModuli",
        {
          type: "category",
          label: "Харилцагч бүртгэх, данс нээх",
          items: ["hariltsagch", "dans"],
        },
        "nTailan1",
        "guilgeeJurnal",
        {
          type: "category",
          label: "Гүйлгээ",
          items: ["nehemjlel", "Tguilgee", "tBusGuilgee"],
        },

        {
          type: "category",
          label: "Гүйлгээний төлөв",
          items: ["udurUndurluh", "zeelHuu", "eRate"],
        },

        {
          type: "category",
          label: "Нябо тайлан",
          items: [
            "nTailan7",
            "nTailan2",
            "nTailan4",
            "blansShalgah",
            "nTailan5",
            "nTailan6",
            "nTailan8"
          ],
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
