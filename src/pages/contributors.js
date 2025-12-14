import React from 'react';
import Layout from '@theme/Layout';
import styles from './contributors.module.css';

const contributors = [
  {
    name: 'C7N-Cyber',
    title: 'Lead Developer & ADG Architect',
    avatar: 'https://github.com/C7N-Cyber.png',
    github: 'https://github.com/C7N-Cyber',
    description: 'Primary developer and architect of Agentic Development Governance standards and framework.',
  },
];

function ContributorCard({ name, title, avatar, github, description }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h3>{name}</h3>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.socialLinks}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        )}
      </div>
    </div>
  );
}

export default function Contributors() {
  return (
    <Layout title="Contributors" description="Meet the people behind ADG">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contributors</h1>
          <p>Meet the people building Agentic Development Governance</p>
        </div>
        <div className={styles.contributorsGrid}>
          {contributors.map((contributor, idx) => (
            <ContributorCard key={idx} {...contributor} />
          ))}
        </div>
        <div className={styles.joinSection}>
          <h2>Want to Contribute?</h2>
          <p>
            ADG is an open initiative. We welcome contributions from developers, 
            security professionals, and governance experts who want to shape the 
            future of autonomous development.
          </p>
          <a 
            href="https://github.com/C7N-Ops/ADG" 
            className="button button--primary button--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
}
