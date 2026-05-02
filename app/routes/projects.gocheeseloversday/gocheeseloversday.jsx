import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import image1 from `~/assets/gocheesecampaign1.png`;
import image2 from `~/assets/gocheesecampaign2.png`;
import image3 from `~/assets/gocheesecampaign3.png`;
import image4 from `~/assets/gocheesecampaign4.png`;
import mobileimage1 from `~/assets/gocheesecampaign1mobile1.png`;
import mobileimage2 from `~/assets/gocheesecampaignmobile2.png`;

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
import styles from './gocheeseloversday.module.css';

const title = 'GO Cheese Lovers Day Campaign';
const description =
  'One day. Five platforms. It trended on Twitter for four hours.';
const roles = [
  'End-to-end campaign PM',
  'Timeline and dependency planning',
  'Client stakeholder management across four contacts',
  'Influencer programme coordination',
  'Microsite delivery oversight',
  'Live campaign monitoring on launch day',
  'Post-campaign reporting',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const gocheeseloversday = () => {
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
          url="https://gocheese.co.in/cheeseloversday"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image1} 800w, ${image1} 1920w`}
              width={800}
              height={500}
              placeholder={image1}
              alt="#GoCheeseLoversDay2019 campaign across social platforms."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Project Intro</ProjectSectionHeading>
              <ProjectSectionText>
                I was Project Manager on the #GoCheeseLoversDay2019 campaign for GO Cheese (Parag
                Milk Foods), run through Dentsu Creative (WATConsult) in Mumbai. The campaign ran
                across Facebook, Instagram, Twitter, YouTube, and a campaign microsite, with five
                contest posts going live at two-hour intervals through a single day.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage1} 350w, ${mobileimage1} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="GO Cheese Lovers Day campaign on mobile."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage2} 350w, ${mobileimage2} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="GO Cheese Lovers Day campaign contest post on mobile."
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
                GO Cheese Lovers Day is January 20th. Before this campaign, almost nobody outside
                the brand knew that.
              </ProjectSectionText>
              <ProjectSectionText>
                The brief was to own the day digitally. Drive brand awareness. Get people to
                participate, not just scroll past.
              </ProjectSectionText>
              <ProjectSectionText>
                The challenge wasn't the creative concept — the creative team handled that. The
                challenge was execution at pace across five platforms with no margin for timing
                errors. Each contest had a two-hour window. Miss one and it knocks the next off
                schedule, and the momentum the whole campaign depends on breaks.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="GO Cheese Lovers Day campaign execution timeline."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Constraints</ProjectSectionHeading>
              <ProjectSectionText>
                Single-day execution window with no ability to pause or reschedule.
              </ProjectSectionText>
              <ProjectSectionText>
                Four client stakeholders with different priorities and approval speeds.
              </ProjectSectionText>
              <ProjectSectionText>
                Microsite development running in parallel with campaign asset production — two
                teams, one deadline.
              </ProjectSectionText>
              <ProjectSectionText>
                Influencer programme targeting 100+ participants across India, all needing briefing
                and content checks before launch.
              </ProjectSectionText>
              <ProjectSectionText>
                Paid media running simultaneously across four platforms — budget reallocation
                decisions needed to be fast.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I did</ProjectSectionHeading>
              <ProjectSectionText>
                Built the campaign timeline across all workstreams before production started — RACI
                in place so every team knew their role without being asked.
              </ProjectSectionText>
              <ProjectSectionText>
                Coordinated microsite delivery alongside campaign asset production, keeping both
                tracks moving without one blocking the other.
              </ProjectSectionText>
              <ProjectSectionText>
                Managed the approval cycle with four client stakeholders — kept it tight without
                letting it become a bottleneck.
              </ProjectSectionText>
              <ProjectSectionText>
                Ran influencer programme coordination with Frapp — ended up with 130 participants
                against a target of 100.
              </ProjectSectionText>
              <ProjectSectionText>
                On launch day: monitored all five contest posts at two-hour intervals, managed
                Twitter influencer activity in real time to sustain trending momentum.
              </ProjectSectionText>
              <ProjectSectionText>
                Delivered the full post-campaign report with platform-level breakdowns.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image3}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="GO Cheese Lovers Day live campaign monitoring."
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
                  <li>GO Cheese Lovers Day was a date on a calendar most people didn't know existed</li>
                  <li>Engagement benchmarked against a planned target</li>
                </ul>
              </div>
              <div className={styles.afterColumn}>
                <span className={styles.afterLabel}>After</span>
                <ul className={styles.compareList}>
                  <li>#GoCheeseLoversDay2019 trended on Twitter in India for four hours</li>
                  <li>Facebook engagement exceeded planned target by 716,407 interactions</li>
                  <li>Instagram impressions exceeded planned target by 524,046</li>
                  <li>Influencer programme: 130 participants delivered against a target of 100</li>
                </ul>
              </div>
            </div>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={image4}
              alt="GO Cheese Lovers Day campaign results dashboard."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>Numbers from the actual campaign report.</ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.outcomeStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>19.3M</span>
                <span className={styles.statLabel}>Facebook reach</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10.28M</span>
                <span className={styles.statLabel}>YouTube views</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4 hrs</span>
                <span className={styles.statLabel}>Twitter trending</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99/100</span>
                <span className={styles.statLabel}>Sentiment score</span>
              </div>
            </div>
            <div className={styles.outcomeNotes}>
              <p className={styles.outcomeNote}>23.7M Facebook impressions · 5.5M Facebook engagements</p>
              <p className={styles.outcomeNote}>Beat planned engagement target by 716,407</p>
              <p className={styles.outcomeNote}>2.8M influencer impressions on Twitter · 655K unique accounts reached</p>
              <p className={styles.outcomeNote}>Instagram exceeded planned target by 524,046 impressions</p>
              <p className={styles.outcomeNote}>150+ influencer participants · 150 content pieces · 120+ Facebook post shares</p>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                Timing is a deliverable, not a background condition.
              </ProjectSectionText>
              <ProjectSectionText>
                A standard project plan wasn't enough for a campaign like this. You need a
                minute-by-minute execution schedule. Each contest post had a window. Miss it, and
                the next one is already running.
              </ProjectSectionText>
              <ProjectSectionText>
                This was also where I understood the difference between managing a project and
                managing something live. In a project, you plan ahead. In a live campaign, you're
                making decisions while results are already coming in and the next task is already
                starting.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                For high-volume single-day campaigns: build a minute-by-minute execution plan, not
                just a project schedule. Assign one person per platform on the day. Agree your
                escalation path before launch, not during it.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
