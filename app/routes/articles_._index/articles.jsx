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
    dates: '2023 – 2025',
    title: 'Digital Project Manager, Content and Experience Delivery',
    company: 'HealthLink BC',
    companyDetail: 'BC Government',
    location: 'Vancouver',
    description:
      "Delivery coordination, UX content design, and digital project management on BC's primary public health platform, serving 16 million people annually. WCAG 2.1 compliance, Drupal CMS migration at scale, cross-ministry stakeholder alignment.",
  },
  {
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

function ExperienceEntry({ dates, title, company, companyDetail, location, description, index }) {
  return (
    <div className={styles.entry} style={cssProps({ delay: index * 120 + 100 })}>
      <div className={styles.entryTimeline}>
        <span className={styles.timelineDot} />
      </div>
      <div className={styles.entryBody}>
        <span className={styles.entryDates}>{dates}</span>
        <Heading as="h2" level={4} className={styles.entryTitle}>
          {title}
        </Heading>
        <div className={styles.entryCompany}>
          <span className={styles.companyName}>{company}</span>
          {companyDetail && (
            <>
              <span className={styles.companyDot}>·</span>
              <span className={styles.companyDetail}>{companyDetail}</span>
            </>
          )}
        </div>
        <Text as="p" size="s" className={styles.entryDescription}>
          {description}
        </Text>
        <span className={styles.entryLocation}>
          <PinIcon />
          {location}
        </span>
      </div>
    </div>
  );
}

function EducationCard({ abbr, institution, degree, dates, grade, index }) {
  return (
    <div className={styles.eduCard} style={cssProps({ delay: index * 100 + 150 })}>
      <div className={styles.eduAbbr}>{abbr}</div>
      <div className={styles.eduBody}>
        <Text size="s" className={styles.eduInstitution}>{institution}</Text>
        <Text size="s" className={styles.eduDegree}>{degree}</Text>
        <div className={styles.eduMeta}>
          <Text size="s" className={styles.eduDates}>{dates}</Text>
          {grade && <span className={styles.eduGrade}>Grade: {grade}</span>}
        </div>
      </div>
    </div>
  );
}

function CertCard() {
  return (
    <div className={styles.certCard}>
      <div className={styles.certBg} />
      <div className={styles.certInner}>
        <div className={styles.certLabel}>
          <Divider notchWidth="40px" notchHeight="6px" />
          <Text size="s">PMP Certified</Text>
        </div>
        <Heading as="h2" level={2} className={styles.certTitle}>
          Project Management Professional
        </Heading>
        <Text as="p" size="s" className={styles.certDescription}>
          Formalising eight years of delivery experience across agency, public sector, and
          platform work.
        </Text>
        <Text size="s" className={styles.certIssuer}>PMI</Text>
      </div>
      <Text aria-hidden className={styles.certTag} size="s">PMI</Text>
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
          <Barcode className={styles.barcode} />
        </header>

        <div className={styles.layout}>
          {/* Left – Work Experience */}
          <div className={styles.workCol}>
            <Text size="s" className={styles.colLabel}>Work Experience</Text>
            <div className={styles.timeline}>
              {experiences.map((exp, i) => (
                <ExperienceEntry key={i} index={i} {...exp} />
              ))}
            </div>
          </div>

          {/* Right – Education + Certification */}
          <div className={styles.sideCol}>
            <div className={styles.eduSection}>
              <Text size="s" className={styles.colLabel}>Education</Text>
              <div className={styles.eduList}>
                {education.map((edu, i) => (
                  <EducationCard key={i} index={i} {...edu} />
                ))}
              </div>
            </div>
            <div className={styles.certSection}>
              <CertCard />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </article>
  );
}

function PinIcon() {
  return (
    <svg width="10" height="13" viewBox="0 0 10 13" fill="currentColor" aria-hidden>
      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 5 3.25a1.75 1.75 0 0 1 0 3.5z" />
    </svg>
  );
}

function Barcode({ className }) {
  return (
    <svg className={className} width="153" height="20" fill="currentColor" viewBox="0 0 153 20">
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}
