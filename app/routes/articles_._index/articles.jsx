import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { cssProps } from '~/utils/style';
import styles from './articles.module.css';

const experiences = [
  {
    number: '01',
    dates: '2023 – 2025',
    title: 'Digital Project Manager, Content and Experience Delivery',
    company: 'HealthLink BC',
    companyDetail: 'BC Government',
    location: 'Vancouver',
    description:
      "Delivery coordination, UX content design, and digital project management on BC's primary public health platform, serving 16 million people annually. WCAG 2.1 compliance, Drupal CMS migration at scale, cross-ministry stakeholder alignment.",
  },
  {
    number: '02',
    dates: '2018 – 2021',
    title: 'Senior Project Manager, Digital Experience',
    company: 'Dentsu Creative',
    companyDetail: 'WATConsult',
    location: 'Mumbai, India',
    description:
      'Integrated digital campaign delivery for GO Cheese, Croma Retail, Tata CLiQ, Piramal Pharma, Godrej Appliances, Home Centre India, and FOX Star Studios. Film releases: Chhichhore, Laxmii, Panga, Lootcase, Sadak 2.',
  },
];

const education = [
  {
    abbr: 'MBA',
    institution: 'University Canada West',
    degree: 'Master of Business Administration',
    dates: 'Oct 2021 – Jul 2023',
  },
  {
    abbr: 'PG',
    institution: 'Mumbai University',
    degree: 'Post Graduation in Advertising and Media',
    dates: '2016 – 2017',
    grade: 'A',
  },
];

function WorkCard({ number, dates, title, company, companyDetail, location, description, index }) {
  return (
    <div
      className={styles.workCard}
      data-number={number}
      style={cssProps({ delay: index * 100 + 100 })}
    >
      <div className={styles.workCardInner}>
        <span className={styles.workDates}>{dates}</span>
        <Heading as="h2" level={4} className={styles.workTitle}>
          {title}
        </Heading>
        <div className={styles.workCompany}>
          <span className={styles.companyName}>{company}</span>
          {companyDetail && (
            <>
              <span className={styles.companyDot}>·</span>
              <span className={styles.companyDetail}>{companyDetail}</span>
            </>
          )}
        </div>
        <Text as="p" size="s" className={styles.workDescription}>
          {description}
        </Text>
        <span className={styles.workLocation}>
          <PinIcon />
          {location}
        </span>
      </div>
    </div>
  );
}

function EduCard({ abbr, institution, degree, dates, grade, index }) {
  return (
    <div
      className={styles.eduCard}
      style={cssProps({ delay: index * 80 + 300 })}
    >
      <div className={styles.eduAbbr}>{abbr}</div>
      <Text size="s" className={styles.eduInstitution}>{institution}</Text>
      <Text size="s" className={styles.eduDegree}>{degree}</Text>
      <div className={styles.eduMeta}>
        <Text size="s" className={styles.eduDates}>{dates}</Text>
        {grade && <span className={styles.eduGrade}>Grade: {grade}</span>}
      </div>
    </div>
  );
}

function CertCard() {
  return (
    <div className={styles.certCard}>
      <div className={styles.certBg} />
      <div className={styles.certContent}>
        <div className={styles.certHeader}>
          <Divider notchWidth="40px" notchHeight="6px" />
          <Text size="s" className={styles.certLabel}>PMP Certified</Text>
        </div>
        <Heading as="h2" level={2} className={styles.certTitle}>
          Project Management Professional
        </Heading>
        <Text as="p" size="s" className={styles.certBody}>
          Formalising eight years of delivery experience across agency, public sector, and
          platform work.
        </Text>
        <span className={styles.certIssuer}>PMI</span>
      </div>
    </div>
  );
}

export function Articles() {
  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <header className={styles.pageHeader}>
          <Heading className={styles.pageHeading} level={5} as="h1">
            <DecoderText text="Experience" />
          </Heading>
        </header>

        <div className={styles.bento}>
          {/* Work experience — top two cells */}
          {experiences.map((exp, i) => (
            <WorkCard key={i} index={i} {...exp} />
          ))}

          {/* Cert — right column spanning all rows */}
          <div className={styles.certArea}>
            <CertCard />
          </div>

          {/* Education — bottom two cells */}
          {education.map((edu, i) => (
            <EduCard key={i} index={i} {...edu} />
          ))}
        </div>
      </Section>
      <Footer />
    </article>
  );
}

function PinIcon() {
  return (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="currentColor" aria-hidden>
      <path d="M4.5 0C2.015 0 0 2.015 0 4.5 0 7.875 4.5 12 4.5 12S9 7.875 9 4.5C9 2.015 6.985 0 4.5 0zm0 6.188A1.688 1.688 0 1 1 4.5 2.81a1.688 1.688 0 0 1 0 3.375z" />
    </svg>
  );
}
