/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  "nevtreh",

    {
      type: "category",
      label: "ЗЭЭЛИЙН БҮРТГЭЛ",
       link: { type: 'doc', id:'loanM/zeel_moduli'},
      items: [ 
        "loanM/burt_zeeldegch",
        {
         type: "category",
          label: "Зээлийн хүсэлт",
          items: ["loanM/zeeliinHuselt", "loanM/zeelSudlah",
           "loanM/ZeelShiidwer", "loanM/zeelGeree"],
        },
        {
          type: "category",
          label: "Зээлийн гэрээтэй ажиллах",
          items: [
            "loanM/gNuhtsul",
            "loanM/zgSungah",
            "loanM/zeelAngilal",
            "loanM/zeelHaah",
            "loanM/yavtsHynalt",
            "loanM/zeelTuuh",
            "loanM/zeelTuluh"
          ],
        },
        {
          type: "category",
          label: "Зээлийн тайлан",
          link: {
            type: 'generated-index',
            title: 'Зээлийн тайлан',
            description:
              "Let's learn about the most important Docusaurus concepts!"
       
          },
          items: ["loanM/loanRprt","loanM/zotailan"],
        },

         "loanM/doTailan",
      ],
    },

    {
      type: "category",
      label: "НЯБО БҮРТГЭЛ",
      link: { type: 'doc', id: 'nyboM/nyboModuli'},
      items:[
        "nyboM/guilgeeJurnal",
         {
          type: "category",
          label: "Харилцагч бүртгэх, данс нээх",
          link: {
            type: 'generated-index',
            title: 'Харилцагч бүртгэх, данс нээх',
            description:
              "Зээлийн бус харилцагч үүсгэх бол энэ модулийг ашиглана.",
          },
          items: ["nyboM/hariltsagch", "nyboM/dans"],
        },
     
        {
          type: "category",
          label: "Гүйлгээ",
          items: ["nyboM/nehemjlel", "nyboM/Tguilgee", "nyboM/tBusGuilgee"],
        },

        {
          type: "category",
          label: "Гүйлгээний төлөв",
          items: ["nyboM/udurUndurluh", "nyboM/zeelHuu", "nyboM/eRate"],
        },

        {
          type: "category",
          label: "Ня-бо тайлан",
          link: {
            type: 'generated-index',
            title: 'Ня-бо тайлан',
            description:
              "Let's learn about the most important Docusaurus concepts!",
          },
          items: ["nyboM/huulga", "nyboM/tbalance", "nyboM/nTailan6"],
        },
        "nyboM/guilUndurluh"
      ],
    },
    // nybo tohirgoo
    {
      type: "category",
      label: "НЯБО ТОХИРГОО",
      items: ["nyboM/dansTuluvlu"],
    },
    "nyboM/nemelt",
  ],
};

module.exports = sidebars;
