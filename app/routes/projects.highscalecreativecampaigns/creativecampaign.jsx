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
import styles from './creativecampaign.css';

const title = 'HealthLink BC';
const description =
  '16 million people used this platform. Most couldn’t find what they needed.';
const roles = ['Content quality assurance', 'Plain language editing', 'WCAG 2.1 compliance', 'Drupal CMS migration coordination', 'Stakeholder facilitation', 'Usability testing support'];

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
          opacity={0.8}
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
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
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
                I was Project Manager on the GO Cheese interactive website, built for Parag Milk Foods
through Dentsu Creative (WATConsult) in Mumbai. The project centred on an AI-enabled
recipe generator that let users build customised recipes using GO Cheese products directly
on the brand website.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
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
                The brand had a website. People visited, looked at products, and left. There was nothing to do there.
              </ProjectSectionText>
              <ProjectSectionText>
                The brief was to change that. Give users a reason to stay, something to interact with, something that connected the product to actual food they might make. Passive browsing
                wasn't working. The brand wanted engagement, and the only way to get it was to build
                something worth engaging with.

              </ProjectSectionText>
              <ProjectSectionText>
                The product range was the starting point. GO Cheese makes processed squares, slices,
                spreads, pizza cheese. All of it usable in real recipes. The insight was simple: let people
                build something with it.
            </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
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
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Constraints</ProjectSectionHeading>
              <ProjectSectionText>
                AI-powered functionality in 2018 on a consumer brand website was not a simple build. The
                recipe generator needed to work intuitively for a general audience, not a tech-savvy one.

              </ProjectSectionText>
              <ProjectSectionText>
                Four client stakeholders with different priorities and approval speeds. Brand, marketing, product, and technical teams all had a say.
              </ProjectSectionText>
              <ProjectSectionText>
                The website had to showcase the full GO Cheese product range, both existing and new, without feeling like a product catalogue. That tension ran through every UX decision.
              </ProjectSectionText>
              <ProjectSectionText>
                Budget and timeline were fixed. Any scope change needed a formal change control process to avoid delivery delays.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> What I did</ProjectSectionHeading>
              <ProjectSectionText>
                Ran the full project lifecycle from initiation through to post-delivery reporting.
              </ProjectSectionText>
              <ProjectSectionText>
                At the start: defined the project scope with client stakeholders, built the project management
                plan including schedule, cost, and resource baselines, created the RACI matrix across UX,
                front-end, back-end, SEO, and content teams, and set up the dependency tracking across all
                workstreams.
              </ProjectSectionText>
              <ProjectSectionText>
                During delivery: coordinated daily across UX designers, front-end and back-end developers,
                SEO specialists, and content teams. Acted as the primary client liaison for all four
                stakeholders. Ran structured approval workflows to keep reviews moving without creating
                bottlenecks. Managed a formal change control process so scope additions were assessed
                for time and cost impact before being agreed.
              </ProjectSectionText>
              <ProjectSectionText>
                Coordinated with third-party vendors and external technology partners for the AI recipe
                generator integration.
              </ProjectSectionText>
              <ProjectSectionText>
                At close: delivered the final performance report with engagement metrics and usage data.
                Documented lessons learned and built the case study materials that were later used for the
                industry award entries.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
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
                Before Navigation followed Ministry org structure, not user mental models. Find Care and
                Health Connect Registry hard to locate. ImmunizeBC content on a separate site entirely.
                Public Health Alerts buried. Pages mixed clinical and public audiences without distinction.

              </ProjectSectionText>
              <ProjectSectionText>
               After Structure built around how people search for health information. Find Care and Health
                Connect Registry visible and accessible. ImmunizeBC consolidated into the main portal.
                Public Health Alerts surfaced on the homepage. Cleaner reading levels across the platform.
                WCAG 2.1 AA achieved.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

                <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Before vs after</ProjectSectionHeading>
              <ProjectSectionText>
                Before Navigation followed Ministry org structure, not user mental models. Find Care and
                Health Connect Registry hard to locate. ImmunizeBC content on a separate site entirely.
                Public Health Alerts buried. Pages mixed clinical and public audiences without distinction.

              </ProjectSectionText>
              <ProjectSectionText>
               After Structure built around how people search for health information. Find Care and Health
                Connect Registry visible and accessible. ImmunizeBC consolidated into the main portal.
                Public Health Alerts surfaced on the homepage. Cleaner reading levels across the platform.
                WCAG 2.1 AA achieved.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
