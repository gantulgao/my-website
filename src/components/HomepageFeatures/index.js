import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Клауд технологид суурилсан ",
    Svg: require("@site/static/img/hh77.svg").default,
    description: (
      <>
        Клауд веб технологид суурилсан тул та интернет холбогдсон бүх төрлийн
        төхөөрөмжөөс системд хандах боломжтой.
      </>
    ),
  },
  {
    title: "Зээлийн үйл ажиллагаа автомажсан",
    Svg: require("@site/static/img/gg5.svg").default,
    description: (
      <>
        Зээлийн үйл ажиллагааг ажлын урсгалд суурилсан байдлаар автомажуулж гар
        ажиллагааг багасгаж хялбаршуулсан.
      </>
    ),
  },
  {
    title: "Санхүүгийн найдвартай тооцоолол",
    Svg: require("@site/static/img/gg2.svg").default,
    description: (
      <>
        Байгууллагын бүхий л санхүүгийн гүйлгээг хийснээр бүх тооцоолол, тайлан
        балансыг нэгтгэн гаргах боломжтой.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
