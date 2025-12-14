import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ADG Concepts',
    description: (
      <>
        Understand the principles and philosophy behind Agentic Development
        Governance. Learn why governance matters in the age of autonomous AI agents.
      </>
    ),
    link: '/docs/concepts/introduction',
  },
  {
    title: 'ADG Standards',
    description: (
      <>
        Formal specifications for implementing governance. Define agent behaviors,
        oversight requirements, and compliance frameworks.
      </>
    ),
    link: '/docs/standards/overview',
  },
  {
    title: 'ADG Framework',
    description: (
      <>
        Practical guidance for implementation. Get started quickly with best
        practices, tooling recommendations, and step-by-step guides.
      </>
    ),
    link: '/docs/framework/getting-started',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={link} className="button button--primary button--sm">
          Learn More
        </a>
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
