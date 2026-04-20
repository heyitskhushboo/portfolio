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
import image2 from `~/assets/Image for case study 2a.jpg`;
import image3 from `~/assets/Image for case study 2b.jpg`;
import image4 from `~/assets/Image for case study 3.png`;
import image5 from `~/assets/Go Cheese case study 4.jpeg`;
import mobileimage1 from `~/assets/bchealthlinkmobile1.png`;
import mobileimage2 from `~/assets/bchealthlinkmobile2.png`;
import image6 from `~/assets/go-cheese-ai-1.png`;
import image7 from `~/assets/go-cheese-ai-2.png`;
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
import styles from './gocheese.module.css';


const title = 'GO Cheese AI-based Interactive Website';
const description =
  'The brief was to make people spend more time on a cheese brand website. So we gave them something to actually do.';
const roles = ['End-to-end project delivery', 'Stakeholder management across four client contacts', 'Cross-functional team coordination', 'Approval workflows and change control' ,'Vendor and third-party coordination' ,'Post-delivery reporting and case study documentation'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const GoCheese = () => {
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
          url="https://www.healthlinkbc.ca/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image5} 800w, ${image5} 1920w`}
              width={800}
              height={500}
              placeholder={image5}
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
                I was Project Manager on the GO Cheese interactive website, built for Parag Milk Foods through Dentsu Creative (WATConsult) in Mumbai. The project centred on an AI-enabled recipe generator that let users build customised recipes using GO Cheese products directly on the brand website.
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
                The brand had a website. People visited, looked at products, and left. There was nothing to do there.

              </ProjectSectionText>
              <ProjectSectionText>
               The brief was to change that. Give users a reason to stay, something to interact with, something that connected the product to actual food they might make. Passive browsing wasn't working. The brand wanted engagement, and the only way to get it was to build something worth engaging with.

              </ProjectSectionText>
              <ProjectSectionText>
                The product range was the starting point. GO Cheese makes processed squares, slices, spreads, pizza cheese. All of it usable in real recipes. The insight was simple: let people build something with it.

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
                AI-powered functionality in 2018 on a consumer brand website was not a simple build. The recipe generator needed to work intuitively for a general audience, not a tech-savvy one.
                Four client stakeholders with different priorities and approval speeds. Brand, marketing, product, and technical teams all had a say.

              </ProjectSectionText>
                            <ProjectSectionText>
                The website had to showcase the full GO Cheese product range, both existing and new, without feeling like a product catalogue. That tension ran through every UX decision.
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
                    At the start: defined the project scope with client stakeholders, built the project management plan including schedule, cost, and resource baselines, created the RACI matrix across UX, front-end, back-end, SEO, and content teams, and set up the dependency tracking across all workstreams.

              </ProjectSectionText>
                            <ProjectSectionText>
                   During delivery: coordinated daily across UX designers, front-end and back-end developers, SEO specialists, and content teams. Acted as the primary client liaison for all four stakeholders. Ran structured approval workflows to keep reviews moving without creating bottlenecks. Managed a formal change control process so scope additions were assessed for time and cost impact before being agreed.

              </ProjectSectionText>
                                          <ProjectSectionText>
                  Coordinated with third-party vendors and external technology partners for the AI recipe generator integration.
                  At close: delivered the final performance report with engagement metrics and usage data. Documented lessons learned and built the case study materials that were later used for the industry award entries.

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
              <ProjectSectionHeading> What we built
</ProjectSectionHeading>
              <ProjectSectionText>
               The Cheesy Recipe Generator let users pick ingredients from a dropdown or drag them onto a plate, then generate a recipe using GO Cheese products. A live-time tracker showed recipes being built in real time across the site.

              </ProjectSectionText>
              <ProjectSectionText>
              Each recipe page showcased specific products from the GO Cheese range. Users could build their own and submit it, creating over 1,000 user-generated recipe pages by the end of the campaign.
The visual design gave the website a new identity alongside the generator, moving it away from a static product catalogue.

              </ProjectSectionText>
              </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Before vs after</ProjectSectionHeading>
              <ProjectSectionText>
                Before : Static brand website. Product listings. No reason to interact. Average time on site low. No user contribution or participation.

              </ProjectSectionText>
              <ProjectSectionText>
              After : Interactive recipe builder on site. Users generating and submitting their own recipes. 1,000+ user-created recipe pages live. Average session duration of 2 minutes 28 seconds. 27,790 recipe views. 8,778 sessions globally.

              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image4}
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
              <ProjectSectionHeading> Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                Numbers from the project report.

              </ProjectSectionText>
              <ProjectSectionText>
               8,778 website sessions globally. 27,790 recipe views. 2 minutes 28 seconds average session duration. 1,000+ user-generated recipe pages. Three digital industry awards.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image7}
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
              <ProjectSectionHeading> Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                The difference between a PM who delivers a brief and a PM who delivers a good product is whether they stay close enough to the UX thinking to catch problems early.
              </ProjectSectionText>
              <ProjectSectionText>
              On this project, the approval workflow mattered as much as the build itself. Four stakeholders with different priorities meant every review cycle had the potential to slow things down or introduce conflicting feedback late in the process. Getting alignment earlier, and building a change control process that people actually used, kept the timeline intact.

              </ProjectSectionText>

              <ProjectSectionText>
             Coordinating across seven types of specialists simultaneously (UX, front-end, back-end, SEO, content, vendors, and the client team) meant the RACI had to be genuinely clear, not just a document that existed. People needed to know their lane without being asked.

              </ProjectSectionText>
            </ProjectTextRow>
             <Image
              src={image6}
              width={940}
              height={500}
              placeholder={image6}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                When you are building something interactive for a consumer audience, the PM's job is to protect the UX from the complexity of the build. Developers will solve for technical feasibility. Clients will push for features. Someone has to hold the line on what the user actually experiences.
              </ProjectSectionText>
              <ProjectSectionText>
              If your stakeholder review process is creating conflicting feedback late in the build, the problem is not the feedback. It is that alignment was not established clearly enough at the start.
              </ProjectSectionText>
              </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>


      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
