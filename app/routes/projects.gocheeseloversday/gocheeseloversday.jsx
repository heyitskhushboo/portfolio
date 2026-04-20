import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
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

const title = 'GO Cheese Campaign';
const description =
  'One day. Five platforms. It trended on Twitter for four hours.';
const roles = ['End-to-end campaign PM', 'Timeline and dependency planning', 'Client stakeholder management (4 stakeholders)', 'Influencer programme coordination', 'Microsite delivery oversight', 'Live campaign monitoring', 'Post-campaign reporting'];

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
          url="https://www.healthlinkbc.ca/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image1} 800w, ${image1} 1920w`}
              width={800}
              height={500}
              placeholder={image1}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Intro</ProjectSectionHeading>
              <ProjectSectionText>
                I was Project Manager on the #GoCheeseLoversDay2019 campaign for GO Cheese (Parag Milk Foods), run through Dentsu Creative (WATConsult) in Mumbai. The campaign ran across Facebook, Instagram, Twitter, YouTube, and a campaign microsite, with five separate contest posts going live at two-hour intervals through a single day.

              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage1} 350w, ${mobileimage1} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage2} 350w, ${mobileimage2} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> The problem</ProjectSectionHeading>
              <ProjectSectionText>
                Go Cheese Lovers Day is January 20th. Before this campaign, very few people outside the brand knew that.

              </ProjectSectionText>
              <ProjectSectionText>
                The brief was to own the day digitally. Drive brand awareness. Get people to actually participate, not just scroll past.

              </ProjectSectionText>
              <ProjectSectionText>
                The challenge wasn't the creative concept. The creative team handled that. The challenge was execution at pace, across five platforms, with no margin for timing errors. Each contest had a two-hour window. If one slipped, it knocked the next one off schedule and broke the momentum the whole campaign depended on.

            </ProjectSectionText>
            <ProjectSectionText>
                Four client stakeholders needed to sign off throughout. A microsite was launching the same day. A paid media budget was split across multiple platforms. An influencer programme with 100+ participants was running simultaneously.
          </ProjectSectionText>

          <ProjectSectionText>
                Sequencing was everything.
         </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
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
               Microsite development running in parallel with campaign asset production. Two separate teams. One deadline.


              </ProjectSectionText>
              <ProjectSectionText>
                Influencer programme targeted 100 participants across India. All needed briefing, coordination, and content quality checks before launch.

              </ProjectSectionText>
              <ProjectSectionText>
                Paid media planned across Facebook, Instagram, YouTube, and Twitter simultaneously. Any budget reallocation needed fast decisions.


              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
             
              <ProjectSectionHeading> What I did</ProjectSectionHeading>
              <ProjectSectionText>
               Built the campaign timeline across all workstreams before production started. RACI matrix in place so every team knew their role without needing to ask.
               Coordinated microsite delivery alongside campaign asset production. Kept both tracks moving without one blocking the other.
              </ProjectSectionText>
               <ProjectSectionText>
               Managed the approval cycle with four client stakeholders. Kept it tight without letting it become a bottleneck.
            </ProjectSectionText>
            <ProjectSectionText>
               Ran the influencer programme coordination with Frapp. Ended up with 130 participants against a target of 100.
          </ProjectSectionText>
            <ProjectSectionText>
              On launch day: monitored all five contest posts as they went live at two-hour intervals. Managed the Twitter influencer activity in real time to maintain trending momentum through the four-hour window.
                </ProjectSectionText>

            <ProjectSectionText>
              Delivered the full post-campaign performance report with platform-level breakdowns.

            </ProjectSectionText>
            </ProjectTextRow>
             <Image
              src={image3}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Before vs after</ProjectSectionHeading>
              <ProjectSectionText>
                Before : Go Cheese Lovers Day was a date on a calendar most people didn't know existed. Campaign engagement benchmarked against a planned target.

              </ProjectSectionText>
              <ProjectSectionText>
               After : #GoCheeseLoversDay2019 trended on Twitter in India for four hours. Facebook engagement exceeded the planned target by 716,407 interactions. Instagram impressions exceeded planned target by 524,046. Influencer programme delivered 130 participants against a target of 100.

              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={image4}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                Numbers from the actual campaign report.

              </ProjectSectionText>
              <ProjectSectionText>
              Facebook: 19.3M reach. 23.7M impressions. 5.5M engagements. Beat the planned engagement target by 716,407.
              </ProjectSectionText>
              <ProjectSectionText>
              YouTube: 10.28M video views across 6 posts. 7.58% view-through rate.
                            </ProjectSectionText>
              <ProjectSectionText>
              Twitter: Trended for 4 hours. 2.8M influencer impressions. 655K unique accounts reached. Sentiment score: 99 out of 100.
                            </ProjectSectionText>
              <ProjectSectionText>
              Instagram: Impressions exceeded planned target by 524,046.
                            </ProjectSectionText>
              <ProjectSectionText>
              Influencer programme: 150+ participants recruited (target: 100). 150 content pieces created. 120+ post shares on Facebook.
            </ProjectSectionText>
            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>

       <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                Timing is a deliverable, not a background condition.

              </ProjectSectionText>
              <ProjectSectionText>
             For a single-day campaign like this, a standard project plan isn't enough. You need a minute-by-minute execution schedule. Each contest post had a window. Miss it and the next one is already running.

              </ProjectSectionText>

              <ProjectSectionText>
              This was also the project where I understood the difference between managing a project and managing something live. In a project you plan ahead. In a live campaign you're making decisions while results are already coming in and the next task is already starting.

              </ProjectSectionText>
            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>


           <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                For high-volume single-day campaigns: build a minute-by-minute execution plan, not just a project schedule. Assign one person per platform on the day itself. Agree your escalation path before launch, not during it.

              </ProjectSectionText>

            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>


      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
