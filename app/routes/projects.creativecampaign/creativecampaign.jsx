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
const roles = ['End-to-end campaign PM', 'Client stakeholder management', 'Cross-functional team coordination', 'Risk and issue management', 'Social listening and brand safety monitoring', 'OTT-first delivery coordination', 'Post-campaign reporting'];

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
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
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
              <ProjectSectionHeading>Project Intro</ProjectSectionHeading>
              <ProjectSectionText>
              I was Project Manager for digital campaign delivery at Dentsu Creative (WATConsult) in Mumbai across a series of major film and brand campaigns. This case study covers five film releases between 2019 and 2020 including Chhichhore, Panga, Lootcase, Sadak 2, and Laxmii, plus wider brand campaign work for GO Cheese, Croma Retail, Tata CLiQ, Piramal Pharma, Godrej Appliances, and Home Centre India.
               I managed delivery on these campaigns. Timelines, stakeholder coordination, cross-functional execution, risk management. Creative strategy and direction belonged to the agency and client teams. What follows is about the delivery layer.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage} 350w, ${mobileimage} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage} 350w, ${mobileimage} 700w`}
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
                A film has a release date. That date does not move.
              </ProjectSectionText>
              <ProjectSectionText>
                If an asset is late, a client approval gets stuck, or an influencer drops out, the campaign still has to go live across every platform on time. That constraint doesn't change regardless of what else is happening.

              </ProjectSectionText>
              <ProjectSectionText>
                Between 2019 and 2020, what else was happening changed significantly. Chhichhore and Panga were standard theatrical campaigns with physical events and coordinated nationwide launches. Then COVID arrived, cinemas closed, and three films became direct-to-OTT releases on Disney+ Hotstar with weeks of notice. The entire delivery model had to change without the release dates shifting.

            </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={image2}
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
                Release dates are fixed. Everything else is a variable.


              </ProjectSectionText>
              <ProjectSectionText>
                Physical promotion became impossible mid-2020. Every activation had to be rebuilt for digital from scratch, without additional budget or timeline.
  
              </ProjectSectionText>
              <ProjectSectionText>
                OTT releases meant no opening weekend data to build momentum from. Discovery and awareness had to be entirely digital.

              </ProjectSectionText>
              <ProjectSectionText>
                Sadak 2 launched during a period of intense public backlash toward Bollywood. The trailer became the second-most-disliked video on YouTube globally within days of going live. The campaign still had to run.

              </ProjectSectionText>

              <ProjectSectionText>
                Managing Lootcase and Sadak 2 simultaneously meant running two campaigns with opposite emotional environments at the same time.
              </ProjectSectionText>
            </div>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={image5}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> What I did across all five campaigns:</ProjectSectionHeading>
              <ProjectSectionText>
                Primary point of contact between production houses and the agency team. Translated briefs into execution plans. Managed expectation alignment with clients throughout.

              </ProjectSectionText>
              <ProjectSectionText>
               Led cross-functional teams across design, copy, social media, and media planning. Built delivery schedules and kept dependencies visible.
              </ProjectSectionText>
              <ProjectSectionText>
                Maintained risk and issue logs. Made fast escalation calls without waiting for situations to compound.

              </ProjectSectionText>
              <ProjectSectionText>
                Monitored KPIs in real time. Delivered regular client updates and post-campaign reports with platform-level breakdowns.
              </ProjectSectionText>
              <ProjectSectionText>
                For OTT campaigns specifically:
                  Coordinated virtual press interactions, influencer tie-ups, and digital-first launch events as replacements for physical promotion.
                  Managed budget reallocations when physical event spend became unavailable.

              </ProjectSectionText>

              <ProjectSectionText>
                For Sadak 2 specifically:
              High-volume social listening throughout the campaign. Active brand safety monitoring across all platforms. Maintained client communication focused on what was within our control. Campaign delivered on schedule.

              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image5}
              width={940}
              height={500}
              placeholder={image5}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Before vs after</ProjectSectionHeading>
              <ProjectSectionText>
                This one doesn't have clean before and after states because each film is different. What changed across the two-year period was the delivery model itself.

              </ProjectSectionText>
              <ProjectSectionText>
               2019 (theatrical): Physical events, coordinated nationwide launches, long lead times, standard press junkets.

              </ProjectSectionText>
              <ProjectSectionText>
                2020 (OTT): Virtual press interactions, influencer activations replacing physical events, OTT-first discovery strategy, real-time sentiment management, faster pivots.

              </ProjectSectionText>
              <ProjectSectionText>
                The skills that transferred: stakeholder communication, risk management, dependency tracking, keeping teams aligned under pressure. None of those changed. Everything around them did.

              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image3}
              width={940}
              height={500}
              placeholder={image3}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Outcome</ProjectSectionHeading>
              <ProjectSectionText>
               Chhichhore (Sept 2019): Rs 215 crore global box office. National Film Award for Best Feature Film in Hindi.
               </ProjectSectionText>
              <ProjectSectionText>
                  Panga (Jan 2020): Rs 41.7 crore global gross. Strong digital engagement around women's empowerment narrative.
              </ProjectSectionText>
              <ProjectSectionText>
                  Lootcase (Jul 2020): High completion rates and sustained positive sentiment during COVID OTT window.
              </ProjectSectionText>
              <ProjectSectionText>
                Sadak 2 (Aug 2020): Campaign delivered on schedule despite second-most-disliked trailer on YouTube globally.
              </ProjectSectionText>
              <ProjectSectionText>
                  Laxmii (Nov 2020): Record-breaking Bollywood OTT premiere on Disney+ Hotstar at time of release. Burj Khalifa song: 200M+ YouTube views.
               </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
                 <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                Crisis management is project management under pressure.

              </ProjectSectionText>
              <ProjectSectionText>
              The tools are the same. What changes is how fast you have to use them and how clearly you have to communicate.
              </ProjectSectionText>

              <ProjectSectionText>
              The pandemic also removed any option of physical fallback. That forced real clarity about what mattered in each campaign and what had just been habit. Some things we stopped doing were things we probably should have stopped earlier.

              </ProjectSectionText>
              <ProjectSectionText>
                The thing that stayed constant across all five: keeping a client focused on what is in their control is sometimes the most valuable thing a PM can do.

              </ProjectSectionText>
            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>


                   <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
               Build your risk log before you need it. On a high-visibility campaign, the question is not whether something will go wrong. It is whether your team has already decided what to do when it does.

              </ProjectSectionText>

            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>


      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
