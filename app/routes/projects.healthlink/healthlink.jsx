import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import image1 from `~/assets/bchealthlink1.png`;
import image2 from `~/assets/bchealthlink2.png`;
import image3 from `~/assets/bchealthlink3.png`;
import image4 from `~/assets/bchealthlink4.png`;
import mobileimage1 from `~/assets/bchealthlinkmobile1.png`;
import mobileimage2 from `~/assets/bchealthlinkmobile2.png`;

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './healthlink.module.css';

const title = 'HealthLink BC';
const description =
  '16 million people used this platform. Most couldn\'t find what they needed.';
const roles = [
  'UX-informed content audit and restructuring',
  'Plain language editing and content governance',
  'WCAG 2.1 compliance ownership',
  'Drupal CMS migration coordination',
  'Cross-ministry stakeholder alignment',
  'Release management and UAT coordination',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const HealthLink = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.healthlinkbc.ca/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image1} 800w, ${image1} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="HealthLink BC website homepage showing health topic search and navigation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Project Intro</ProjectSectionHeading>
              <ProjectSectionText>
                I worked as Digital Project Manager on the HealthLink BC website redesign, part of
                BC's broader digital health transformation. The role covered UX-informed content
                structuring, delivery coordination, accessibility compliance, and stakeholder
                management across clinical, policy, UX, and technical teams.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage1} 350w, ${mobileimage1} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="HealthLink BC mobile interface showing health topics."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage2} 350w, ${mobileimage2} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="HealthLink BC mobile interface showing Find Care section."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The problem</ProjectSectionHeading>
              <ProjectSectionText>
                The information was accurate. The structure wasn't built for the people reading it.
              </ProjectSectionText>
              <ProjectSectionText>
                HealthLink BC's navigation reflected how the Ministry organised itself, not how a
                person thinks about their health at 11pm. Pages mixed clinical detail with plain
                language and no distinction between audiences. The Find Care section was buried.
                ImmunizeBC lived on a separate site. Public Health Alerts were hard to surface.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform needed to serve a nurse checking a reference quickly and a parent
                searching their child's symptoms at midnight. It wasn't doing either well.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="HealthLink BC internal navigation structure before redesign."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Constraints</ProjectSectionHeading>
              <ProjectSectionText>
                These made it harder than it sounds.
              </ProjectSectionText>
              <ProjectSectionText>
                Regulated environment: every content change required clinical sign-off before
                publishing. Plain language edits that felt obvious to a writer felt like risk to a
                clinician.
              </ProjectSectionText>
              <ProjectSectionText>
                WCAG 2.1 AA compliance required across the full platform, not just new pages.
              </ProjectSectionText>
              <ProjectSectionText>
                Live migration: the site served millions of active users throughout. There was no
                pause button.
              </ProjectSectionText>
              <ProjectSectionText>
                Four organisations with a say in every decision: Ministry of Health, PHSA, clinical
                teams, and the digital delivery team.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I did</ProjectSectionHeading>
              <ProjectSectionText>
                Led UX-informed content audit and restructuring, defining the review framework used
                across all workstreams — audience intent, plain language standards, WCAG 2.1, in
                that order.
              </ProjectSectionText>
              <ProjectSectionText>
                Managed end-to-end delivery of content migration in Drupal CMS — intake, QA,
                approvals, accessibility review, and publishing workflows.
              </ProjectSectionText>
              <ProjectSectionText>
                Aligned 15–20 cross-functional stakeholders per initiative across Ministry of
                Health, PHSA, clinical advisors, UX designers, and developers.
              </ProjectSectionText>
              <ProjectSectionText>
                Translated between clinical accuracy requirements and user experience needs — two
                valid things that don't always look the same on a page.
              </ProjectSectionText>
              <ProjectSectionText>
                Owned WCAG 2.1 compliance reviews as a UX checkpoint, not a final audit — catching
                structural issues before they reached design or development.
              </ProjectSectionText>
              <ProjectSectionText>
                Built release coordination and UAT validation processes, reducing rework on content
                that had already cleared clinical approval.
              </ProjectSectionText>
              <ProjectSectionText>
                Flagged recurring UX patterns as systemic issues for the product roadmap, not
                one-off content fixes.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image3}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="HealthLink BC content migration workflow in Drupal CMS."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Before vs After</ProjectSectionHeading>
            </ProjectTextRow>
            <div className={styles.beforeAfter}>
              <div className={styles.beforeColumn}>
                <span className={styles.beforeLabel}>Before</span>
                <ul className={styles.compareList}>
                  <li>Navigation followed Ministry org structure, not user mental models</li>
                  <li>Find Care and Health Connect Registry were hard to locate</li>
                  <li>ImmunizeBC content sat on a separate site</li>
                  <li>Public Health Alerts buried, not surfaced on entry points</li>
                  <li>Pages mixed clinical and public audiences without distinction</li>
                </ul>
              </div>
              <div className={styles.afterColumn}>
                <span className={styles.afterLabel}>After</span>
                <ul className={styles.compareList}>
                  <li>Structure built around how people actually search for health information</li>
                  <li>Find Care and Health Connect Registry visible and accessible from key entry points</li>
                  <li>ImmunizeBC consolidated into the main platform</li>
                  <li>Public Health Alerts surfaced on the homepage</li>
                  <li>Cleaner reading levels across the platform. WCAG 2.1 AA achieved.</li>
                </ul>
              </div>
            </div>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="HealthLink BC redesigned homepage with improved navigation and Find Care section."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>Real numbers only.</ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.outcomeStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>16M+</span>
                <span className={styles.statLabel}>Annual website visits</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25.5M</span>
                <span className={styles.statLabel}>Combined encounters 2024/25</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>248K+</span>
                <span className={styles.statLabel}>Connected to primary care</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>WCAG 2.1</span>
                <span className={styles.statLabel}>Compliance achieved</span>
              </div>
            </div>
            <div className={styles.outcomeNotes}>
              <p className={styles.outcomeNote}>~50% reduction in content turnaround time through standardised CMS workflows</p>
              <p className={styles.outcomeNote}>25–40% reduction in rework through pre-development UX audit process</p>
            </div>
            <p className={styles.sourceLink}>
              Source:{' '}
              <a
                href="https://digital.gov.bc.ca/2025/03/21/hlbc-website"
                target="_blank"
                rel="noreferrer"
              >
                BC Digital Government — 'Improving HealthLink BC's website for everyone's needs'
              </a>
            </p>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                Content structure is a design decision.
              </ProjectSectionText>
              <ProjectSectionText>
                The pages that caused the most confusion weren't poorly written. They were organised
                for the wrong audience. Rewriting them wasn't the fix. Reorganising them was.
              </ProjectSectionText>
              <ProjectSectionText>
                Working in a regulated environment also changed how I think about trust. You can't
                push clinical experts to move faster than they're ready to. But you can build enough
                credibility that they stop reading every plain language edit as a threat to
                accuracy. That trust was as structural to the delivery as any process I put in
                place.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                Before any large content migration, audit for audience first. Who is each page
                actually for? What do they need to do with this information?
              </ProjectSectionText>
              <ProjectSectionText>
                That question alone will reorganise more content than any style guide will.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
