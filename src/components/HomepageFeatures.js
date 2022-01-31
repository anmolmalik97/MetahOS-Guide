import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        MetahOS Healthcare Operating System was designed from the ground up to
        be easily configured, managed and used to get your healthcare
        institution up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        MetahOS lets you focus on your patients, and the platform takes care of
        all the chores. Go ahead and move your Healthcare institution to the
        MetahOS Healthcare Operating System.
      </>
    ),
  },
  {
    title: "Powered by Clinicians",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        MetahOS lets you configure and run your Healthcare institution based on
        your practice and experience, you can build your own EMR, rules engines,
        reports and everything that you need to run and manage your Healthcare
        institution.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
