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
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/examples/showcase"
            style={{ marginLeft: '12px' }}
          >
            View Showcase
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
              <h2>Everything You Need to Launch Fast</h2>
              <p>Build your AI SaaS with confidence using our complete toolkit</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <FeatureCard
              title="Quick Setup"
              icon={FaRocket}
              description="Get your project up and running in minutes with our streamlined starter templates"
            />
          </div>
          <div className="col col--3">
            <FeatureCard
              title="Complete Toolkit"
              icon={FaTools}
              description="Authentication, payments, AI integration, and everything else you need in one place"
            />
          </div>
          <div className="col col--3">
            <FeatureCard
              title="Best Practices"
              icon={FaCode}
              description="Follow industry standards and avoid common pitfalls with our proven architecture"
            />
          </div>
          <div className="col col--3">
            <FeatureCard
              title="Launch Strategy"
              icon={FaLightbulb}
              description="Marketing tips, launch checklists, and growth tactics to help you find your first users"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsHeading}>
          <h2>Built by Indie Hackers, for Indie Hackers</h2>
        </div>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"Indie Launch saved me weeks of development time. I launched my AI writing assistant in just 10 days and got my first paying customer within a week!"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img src="/img/testimonials/user1.jpg" alt="User testimonial" className={styles.testimonialAvatar} />
              <div className={styles.testimonialMeta}>
                <strong>Alex Chen</strong>
                <span>Founder, WriteMind AI</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"The documentation is incredible. Every time I had a question, I found the answer immediately. This is how developer tools should be built."</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img src="/img/testimonials/user2.jpg" alt="User testimonial" className={styles.testimonialAvatar} />
              <div className={styles.testimonialMeta}>
                <strong>Sarah Johnson</strong>
                <span>Solo Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Ready to Launch Your AI Product?</h2>
          <p>Stop reinventing the wheel. Start building what matters.</p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/get-started/intro"
            >
              Get Started Now
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="https://github.com/your-repo/indie-launch"
              style={{ marginLeft: '12px' }}
            >
              Star on GitHub
            </Link>
          </div>
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
        <TestimonialSection />
        <CtaSection />
      </main>
    </Layout>
  );
}