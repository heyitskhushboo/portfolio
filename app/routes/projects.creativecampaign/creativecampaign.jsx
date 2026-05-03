import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import image1 from '~/assets/creativecampaign1.jpg';
import image2 from '~/assets/creativecampaign2.jpg';
import image3 from '~/assets/creativecampaign3.jpeg';
import image4 from '~/assets/creativecampaign6.gif';
import image5 from '~/assets/creativecampaign5.jpg';
import mobileimage from `~/assets/creativecampaignmobile.jpg`;
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectNav,
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
import styles from './creativecampaign.module.css';

const title = 'High-Scale Creative Campaigns';
const description =
  'Five film releases. One pandemic. Release dates that never move.';
const roles = [
  'End-to-end campaign PM across five concurrent film accounts',
  'Client stakeholder management across production houses and brand teams',
  'Cross-functional team coordination',
  'Risk and issue management',
  'Social listening and brand safety monitoring',
  'OTT-first delivery coordination',
  'Post-campaign reporting',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const CreativeCampaign = () => {
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
          url="https://www.hotstar.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image1} 800w, ${image1} 1920w`}
              width={800}
              height={500}
              placeholder={image1}
              alt="Film campaign creative assets for Bollywood releases 2019–2020."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Project Intro</ProjectSectionHeading>
              <ProjectSectionText>
                I was Project Manager for digital campaign delivery at Dentsu Creative (WATConsult)
                in Mumbai across five major Bollywood film releases between 2019 and 2020 —
                Chhichhore, Panga, Lootcase, Sadak 2, and Laxmii — plus wider brand campaign work
                for GO Cheese, Croma Retail, Tata CLiQ, Piramal Pharma, Godrej Appliances, and
                Home Centre India.
              </ProjectSectionText>
              <ProjectSectionText>
                I managed delivery: timelines, stakeholder coordination, cross-functional
                execution, risk management. Creative strategy and direction belonged to the agency
                and client teams. What follows is about the delivery layer.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage} 350w, ${mobileimage} 700w`}
                width={350}
                height={750}
                placeholder={mobileimage}
                alt="Film campaign creative on mobile."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage} 350w, ${mobileimage} 700w`}
                width={350}
                height={750}
                placeholder={mobileimage}
                alt="Film campaign assets on mobile."
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
                A film has a release date. That date does not move.
              </ProjectSectionText>
              <ProjectSectionText>
                Between 2019 and 2020, everything else changed. Chhichhore and Panga were standard
                theatrical campaigns with physical events and coordinated nationwide launches. Then
                COVID arrived, cinemas closed, and three films became direct-to-OTT releases on
                Disney+ Hotstar with weeks of notice. The entire delivery model had to change. The
                release dates didn't.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={image2}
              alt="Bollywood campaign delivery model shift from theatrical to OTT."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Constraints</ProjectSectionHeading>
              <ProjectSectionText>
                Release dates fixed. Every other variable was in motion.
              </ProjectSectionText>
              <ProjectSectionText>
                Physical promotion became impossible mid-2020. Every activation had to be rebuilt
                for digital without additional budget or timeline.
              </ProjectSectionText>
              <ProjectSectionText>
                OTT releases meant no opening weekend data to build momentum from — discovery had
                to be entirely digital.
              </ProjectSectionText>
              <ProjectSectionText>
                Sadak 2 launched during intense public backlash. The trailer became the
                second-most-disliked video on YouTube globally within days. The campaign still had
                to run.
              </ProjectSectionText>
              <ProjectSectionText>
                Lootcase and Sadak 2 ran simultaneously — two campaigns with opposite audience
                environments at the same time.
              </ProjectSectionText>
            </div>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={image4}
              alt="Campaign execution across OTT and digital platforms."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I did</ProjectSectionHeading>
              <ProjectSectionText>
                Across all five campaigns: primary point of contact between production houses and
                the agency team, translating briefs into execution plans and maintaining expectation
                alignment throughout.
              </ProjectSectionText>
              <ProjectSectionText>
                Led cross-functional teams across design, copy, social, and media planning. Built
                delivery schedules and kept dependencies visible.
              </ProjectSectionText>
              <ProjectSectionText>
                Maintained risk and issue logs, escalated fast without waiting for situations to
                compound.
              </ProjectSectionText>
              <ProjectSectionText>
                Monitored KPIs in real time, delivered regular client updates and post-campaign
                reports.
              </ProjectSectionText>
              <ProjectSectionText>
                For OTT campaigns: coordinated virtual press interactions, influencer tie-ups, and
                digital-first launch events as direct replacements for physical promotion. Managed
                budget reallocations when physical event spend became unavailable.
              </ProjectSectionText>
              <ProjectSectionText>
                For Sadak 2 specifically: high-volume social listening and active brand safety
                monitoring throughout. Kept client communication focused on what was within our
                control. Campaign delivered on schedule.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image5}
              width={940}
              height={500}
              placeholder={image5}
              alt="Campaign risk and stakeholder management in action."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Before vs After</ProjectSectionHeading>
              <ProjectSectionText>
                This one doesn't have clean before and after states. What changed across two years
                was the delivery model itself.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.beforeAfter}>
              <div className={styles.beforeColumn}>
                <span className={styles.beforeLabel}>2019 — Theatrical</span>
                <ul className={styles.compareList}>
                  <li>Physical events and coordinated nationwide launches</li>
                  <li>Long lead times and standard press junkets</li>
                  <li>Opening weekend box office to build momentum</li>
                  <li>In-person influencer and media interactions</li>
                </ul>
              </div>
              <div className={styles.afterColumn}>
                <span className={styles.afterLabel}>2020 — OTT</span>
                <ul className={styles.compareList}>
                  <li>Virtual press and influencer activations replacing physical events</li>
                  <li>OTT-first discovery strategy with no opening weekend data</li>
                  <li>Real-time sentiment management and faster pivots</li>
                  <li>What transferred: stakeholder communication, risk management, dependency tracking</li>
                </ul>
              </div>
            </div>
            <Image
              src={image3}
              width={940}
              height={500}
              placeholder={image3}
              alt="Campaign shift from theatrical to OTT delivery model."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
            </ProjectTextRow>
            <table className={styles.filmsTable}>
              <tbody>
                <tr>
                  <td className={styles.filmName}>Chhichhore · Sept 2019</td>
                  <td className={styles.filmResult}>₹215 crore global box office · National Film Award for Best Feature Film in Hindi</td>
                </tr>
                <tr>
                  <td className={styles.filmName}>Panga · Jan 2020</td>
                  <td className={styles.filmResult}>₹41.7 crore global gross · strong digital engagement</td>
                </tr>
                <tr>
                  <td className={styles.filmName}>Lootcase · Jul 2020</td>
                  <td className={styles.filmResult}>High completion rates and sustained positive sentiment through COVID OTT window</td>
                </tr>
                <tr>
                  <td className={styles.filmName}>Sadak 2 · Aug 2020</td>
                  <td className={styles.filmResult}>Campaign delivered on schedule despite second-most-disliked trailer on YouTube globally</td>
                </tr>
                <tr>
                  <td className={styles.filmName}>Laxmii · Nov 2020</td>
                  <td className={styles.filmResult}>Record Bollywood OTT opening on Disney+ Hotstar · Burj Khalifa song 200M+ YouTube views</td>
                </tr>
              </tbody>
            </table>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                Crisis management is project management under pressure. The tools are the same.
                What changes is how fast you use them and how clearly you communicate.
              </ProjectSectionText>
              <ProjectSectionText>
                The pandemic also removed any physical fallback, which forced real clarity about
                what mattered in each campaign and what had just been habit. Some things we stopped
                doing were things we probably should have stopped earlier.
              </ProjectSectionText>
              <ProjectSectionText>
                The one constant across all five: keeping a client focused on what is in their
                control is sometimes the most valuable thing a PM can do.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                Build your risk log before you need it. On a high-visibility campaign, the question
                isn't whether something will go wrong. It's whether your team has already decided
                what to do when it does.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <ProjectNav
        previous={{ title: 'GO Cheese Lovers Day Campaign', href: '/projects/gocheeseloversday' }}
      />
      <Footer />
    </Fragment>
  );
};
