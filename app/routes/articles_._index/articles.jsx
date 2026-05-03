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

export function Articles() {
  return (
    <article className={styles.page}>
      <Section className={styles.section}>

        {/* Page title */}
        <header className={styles.header}>
          <Heading level={5} as="h1" className={styles.heading}>
            <DecoderText text="Experience & Education" />
          </Heading>
        </header>

        {/* ── Certification — full-width featured card ── */}
        <div className={styles.certCard}>
          <div className={styles.certBg} />
          <div className={styles.certBody}>
            <div className={styles.certMeta}>
              <Divider notchWidth="36px" notchHeight="5px" />
              <Text size="s" className={styles.certLabel}>PMP Certified · PMI</Text>
            </div>
            <Heading as="h2" level={2} className={styles.certTitle}>
              Project Management Professional
            </Heading>
            <Text as="p" size="s" className={styles.certDesc}>
              Formalising eight years of delivery experience across agency, public sector,
              and platform work.
            </Text>
          </div>
        </div>

        {/* ── Main two-column area ── */}
        <div className={styles.columns}>

          {/* Work experience */}
          <div className={styles.col}>
            <Text size="s" className={styles.colLabel}>Work Experience</Text>
            <div className={styles.workList}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={styles.workEntry}
                  style={cssProps({ delay: i * 100 + 100 })}
                >
                  <Text className={styles.entryDates}>{exp.dates}</Text>
                  <Heading as="h3" level={4} className={styles.entryTitle}>
                    {exp.title}
                  </Heading>
                  <div className={styles.entryCompany}>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.companyDot}>·</span>
                    <span className={styles.companyDetail}>{exp.companyDetail}</span>
                  </div>
                  <Text as="p" size="s" className={styles.entryDesc}>
                    {exp.description}
                  </Text>
                  <span className={styles.entryLocation}>
                    <LocationIcon />
                    {exp.location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={styles.col}>
            <Text size="s" className={styles.colLabel}>Education</Text>
            <div className={styles.eduList}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={styles.eduCard}
                  style={cssProps({ delay: i * 100 + 200 })}
                >
                  <div className={styles.eduAbbr}>{edu.abbr}</div>
                  <div className={styles.eduInfo}>
                    <Text size="s" className={styles.eduInstitution}>{edu.institution}</Text>
                    <Text size="s" className={styles.eduDegree}>{edu.degree}</Text>
                    <div className={styles.eduMeta}>
                      <Text size="s" className={styles.eduDates}>{edu.dates}</Text>
                      {edu.grade && (
                        <span className={styles.eduGrade}>Grade: {edu.grade}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>
      <Footer />
    </article>
  );
}

function LocationIcon() {
  return (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="currentColor" aria-hidden>
      <path d="M4.5 0C2.015 0 0 2.015 0 4.5 0 7.875 4.5 12 4.5 12S9 7.875 9 4.5C9 2.015 6.985 0 4.5 0zm0 6.188A1.688 1.688 0 1 1 4.5 2.81a1.688 1.688 0 0 1 0 3.375z" />
    </svg>
  );
}
