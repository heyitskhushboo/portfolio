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
import styles from './gocheeseloversday.module.css';

const title = 'HealthLink BC';
const description =
  '16 million people used this platform. Most couldn’t find what they needed.';
const roles = ['Content quality assurance', 'Plain language editing', 'WCAG 2.1 compliance', 'Drupal CMS migration coordination', 'Stakeholder facilitation', 'Usability testing support'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const gocheeseloversday = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${image1} 1280w, ${image1} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.gocheese.co.in/cheeseloversday/"
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
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                I worked as Coordinator, Content Design on the HealthLink BC website redesign, part of
                BC's broader digital health transformation. The role covered content quality assurance,
                migration coordination, accessibility compliance, and stakeholder communication across
                clinical, policy, UX, and technical teams.
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
                The information was accurate. The structure wasn't built for the people reading it.
              </ProjectSectionText>
              <ProjectSectionText>
                HealthLink BC's navigation reflected how the Ministry organised itself internally, not how a
                person thinks about their health at 11pm. Pages mixed clinical detail and plain language with
                no distinction. The Find Care section was buried. ImmunizeBC lived on a separate site.
                Public Health Alerts were hard to surface.
              </ProjectSectionText>
              <ProjectSectionText>
                On top of that: clinical approval required on every content change, four organisations with a
                say in each decision, thousands of pages to migrate, and a live site that couldn't go down
                while the work happened.
            </ProjectSectionText>
            <ProjectSectionText>
                The same platform needed to serve a nurse checking a reference quickly and a parent searching for their child's symptoms. It wasn't doing either well.
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
                These made it harder than it sounds.
                Regulated environment. Every piece of content needed clinical sign-off before it could
                publish. Plain language edits that felt obvious to a writer felt like risk to a clinician. Building
                trust that accuracy wasn't being traded for readability took time and wasn't optional.
                WCAG 2.1 AA compliance required across the full platform, not just new pages.
                Live migration. The site served millions of active users throughout. There was no pause button.
                Stakeholders across Ministry of Health, PHSA, and clinical teams. All with different priorities and different timelines.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> What I did</ProjectSectionHeading>
              <ProjectSectionText>
                Tracked content migration dependencies in Drupal so pages moved through the right stages without getting stuck or going live before approval.
                Quality-checked pages against plain language and WCAG standards. Not as a checklist. As
                someone reading them the way a real user would.
                Supported usability testing sessions with Ministry of Health staff. Helped turn what came
                back into something the design team could actually use.
                Coordinated across clinical, policy, UX, and technical stakeholders. Sometimes that meant
                translating between what a clinician needed to say and what a user needed to understand.
                Managed production schedules across multiple concurrent content workstreams.
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
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
