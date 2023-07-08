/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  mySidebar: [
    {
      type: "category",
      label: "АГУУЛГА",
      items: ["nevtreh"],
    },

    {
      type: "category",
      label: "ЗЭЭЛИЙН БҮРТГЭЛ",
      items: [
        "zeel_moduli",
        "burt_zeeldegch",

        {
          type: "category",
          label: "Зээлийн хүсэлт",
          items: ["zeeliinHuselt", "zeelSudlah", "shiidwer", "zeelGeree"],
        },

        {
          type: "category",
          label: "Зээлийн гэрээтэй ажиллах",
          items: [
            "zgAjil",
            "zgAjil2",
            "zgAjil3",
            "zgAjil4",
            "zgAjil5",
            "zgAjil6",
          ],
        },

        {
          type: "category",
          label: "Зээлийн тайлан",
          items: ["zeeliinTailan", "Zotailan", "doTailan"],
        },
      ],
    },

    // ny bo burtgel
    {
      type: "category",
      label: "НЯБО БҮРТГЭЛ",
      items: [
        "nTaniltsuulga",
        {
          type: "category",
          label: "Харилцагч бүртгэх, данс нээх",
          items: ["burtgel", "hariltsagch", "dans"],
        },

        "nTailan1",

        {
          type: "category",
          label: "Гүйлгээ",
          items: ["nehemjlel", "guilgee", "guilgee2"],
        },

        {
          type: "category",
          label: "Гүйлгээний төлөв",
          items: ["guilgTuluv4", "guilgTuluv3", "blansShalgah", "gulgTuluv5"],
        },

        {
          type: "category",
          label: "Нябо тайлан",
          items: [
            "nTailan7",
            "nTailan2",
            "nTailan4",
            "nTailan5",
            "nTailan6",
            "nTailan8",
          ],
        },
      ],
    },

    // nybo tohirgoo
    {
      type: "category",
      label: "НЯБО ТОХИРГОО",
      items: ["nTohirgoo1"],
    },
    "nemelt",
  ],
};

module.exports = sidebars;
