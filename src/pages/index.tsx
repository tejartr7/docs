import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { FaRocket, FaTools, FaCode, FaLightbulb } from 'react-icons/fa';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/get-started/intro"
          >
            Start Building with Indie Launch 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, icon, description }) {
  const Icon = icon;
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Icon size={48} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className={styles.featuresHeading}>
              <h2 className="text-center">Everything You Need to Launch Fast</h2>
              <p className="text-center">Build your AI SaaS with confidence using our complete toolkit</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col--4">
            <FeatureCard
              title="Quick Setup"
              icon={FaRocket}
              description="Get your project up and running in minutes with our streamlined starter templates"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Complete Toolkit"
              icon={FaTools}
              description="Authentication, payments, AI integration, and everything else you need in one place"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Best Practices"
              icon={FaCode}
              description="Follow industry standards and avoid common pitfalls with our proven architecture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function ModernCtaSection() {
  return (
    <section className={styles.modernCta}>
      <div className="container">
        <div className={styles.modernCtaContent}>
          <Heading as="h2" className={styles.modernCtaTitle}>
            IndieLaunch
          </Heading>
          <p className={styles.modernCtaDescription}>
            Validate Your Idea Today with IndieLaunch: Launch and Validate Effortlessly.
          </p>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.modernCtaButton
            )}
            to="https://getindielaunch.com"
            target="_blank"
          >
            Get it now <FaRocket className={styles.ctaIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Everything you need to launch your AI SaaS fast – docs, guides, and tools to ship like an indie hacker."
    >
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <ModernCtaSection />
      </main>
    </Layout>
  );
}