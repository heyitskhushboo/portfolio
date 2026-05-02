import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import image2 from `~/assets/Image for case study 2a.jpg`;
import image3 from `~/assets/Image for case study 2b.jpg`;
import image4 from `~/assets/Image for case study 3.png`;
import image5 from `~/assets/Go Cheese case study 4.jpeg`;
import mobileimage1 from `~/assets/gocheesemobile1.jpeg`;
import mobileimage2 from `~/assets/gocheesemobile2.jpeg`;
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

const title = 'GO Cheese AI Interactive Website';
const description =
  'The brief was to make people stay on a cheese website. So we gave them something to actually do.';
const roles = [
  'End-to-end project delivery',
  'Stakeholder management across four client contacts',
  'Cross-functional coordination across UX, front-end, back-end, SEO, and content teams',
  'Approval workflows and change control',
  'Vendor and third-party coordination for AI integration',
  'Post-delivery reporting and award entry documentation',
];

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
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://gocheese.co.in"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${image5} 800w, ${image5} 1920w`}
              width={800}
              height={500}
              placeholder={image5}
              alt="GO Cheese interactive website on device mockups alongside campaign branding."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Project Intro</ProjectSectionHeading>
              <ProjectSectionText>
                I was Project Manager on the GO Cheese interactive website, built for Parag Milk
                Foods through Dentsu Creative (WATConsult) in Mumbai. The project centred on an
                AI-enabled recipe generator that let users build recipes using GO Cheese products
                directly on the brand website.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage1} 350w, ${mobileimage1} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="GO Cheese recipe generator on mobile."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mobileimage2} 350w, ${mobileimage2} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="GO Cheese product range on mobile."
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
                The brand had a website. People visited, looked at products, and left.
              </ProjectSectionText>
              <ProjectSectionText>
                The brief was to change that. Give users a reason to stay — something to interact
                with, something that connected the product to food they might actually make. Passive
                browsing wasn't working. The answer was to build something worth engaging with.
              </ProjectSectionText>
              <ProjectSectionText>
                The product range was the starting point. GO Cheese makes processed squares,
                slices, spreads, pizza cheese. All usable in real recipes. The insight was simple:
                let people build something with it.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${image2} 800w, ${image2} 1920w`}
              width={800}
              height={500}
              placeholder={image2}
              alt="GO Cheese website product listing before the interactive redesign."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Constraints</ProjectSectionHeading>
              <ProjectSectionText>
                AI-powered functionality in 2018 on a consumer brand website was not a simple
                build. The recipe generator had to work intuitively for a general audience, not a
                tech-savvy one.
              </ProjectSectionText>
              <ProjectSectionText>
                Four client stakeholders with different priorities and approval speeds — brand,
                marketing, product, and technical teams all had a say.
              </ProjectSectionText>
              <ProjectSectionText>
                The website had to showcase the full GO Cheese range, existing and new, without
                feeling like a product catalogue. That tension ran through every UX decision.
              </ProjectSectionText>
              <ProjectSectionText>
                Budget and timeline were fixed. Any scope change needed formal change control.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I did</ProjectSectionHeading>
              <ProjectSectionText>
                At the start: defined project scope with client stakeholders, built the project
                management plan including schedule, cost, and resource baselines, created a RACI
                matrix across seven specialist teams, and set up dependency tracking across all
                workstreams.
              </ProjectSectionText>
              <ProjectSectionText>
                During delivery: coordinated daily across UX designers, front-end and back-end
                developers, SEO specialists, and content teams. Acted as primary client liaison for
                all four stakeholders. Ran structured approval workflows to keep reviews moving
                without creating bottlenecks. Managed formal change control so scope additions were
                assessed for time and cost before being agreed.
              </ProjectSectionText>
              <ProjectSectionText>
                Coordinated with third-party vendors for the AI recipe generator integration.
              </ProjectSectionText>
              <ProjectSectionText>
                At close: delivered the final performance report with engagement metrics and usage
                data. Documented lessons learned and built the case study materials used for
                industry award entries.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image3}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="GO Cheese Cheesy Recipe Generator in use."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What we built</ProjectSectionHeading>
              <ProjectSectionText>
                The Cheesy Recipe Generator let users pick ingredients from a dropdown or drag them
                onto a plate, then generate a recipe using GO Cheese products. A live tracker showed
                recipes being built in real time across the site.
              </ProjectSectionText>
              <ProjectSectionText>
                Each recipe page featured specific GO Cheese products. Users could build and submit
                their own — creating over 1,000 user-generated recipe pages by the end of the
                campaign.
              </ProjectSectionText>
            </ProjectTextRow>
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
                  <li>Static brand website with product listings</li>
                  <li>No reason to interact or return</li>
                  <li>Average time on site low</li>
                  <li>No user contribution or participation</li>
                </ul>
              </div>
              <div className={styles.afterColumn}>
                <span className={styles.afterLabel}>After</span>
                <ul className={styles.compareList}>
                  <li>Interactive recipe builder live on site</li>
                  <li>Users generating and submitting their own recipes</li>
                  <li>1,000+ user-created recipe pages</li>
                  <li>Average session: 2 minutes 28 seconds</li>
                  <li>27,790 recipe views. 8,778 sessions globally.</li>
                </ul>
              </div>
            </div>
            <Image
              src={image4}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="GO Cheese interactive recipe builder showing live recipe creation."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>Numbers from the project report.</ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.outcomeStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>8,778</span>
                <span className={styles.statLabel}>Website sessions globally</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>27,790</span>
                <span className={styles.statLabel}>Recipe views</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2m 28s</span>
                <span className={styles.statLabel}>Avg session duration</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1,000+</span>
                <span className={styles.statLabel}>User-generated recipes</span>
              </div>
            </div>
            <div className={styles.outcomeNotes}>
              <p className={styles.outcomeNote}>Three digital industry awards</p>
            </div>
            <Image
              src={image7}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="GO Cheese AI recipe generator interface."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Lesson</ProjectSectionHeading>
              <ProjectSectionText>
                The difference between a PM who delivers a brief and a PM who delivers a good
                product is whether they stay close enough to the UX thinking to catch problems
                early.
              </ProjectSectionText>
              <ProjectSectionText>
                On this project, the approval workflow mattered as much as the build. Four
                stakeholders with different priorities meant every review cycle could slow things
                down or introduce conflicting feedback late in the process. Getting alignment
                earlier — and building a change control process people actually used — kept the
                timeline intact.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={image6}
              width={940}
              height={500}
              placeholder={image6}
              alt="GO Cheese AI recipe generator full interface view."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Takeaway</ProjectSectionHeading>
              <ProjectSectionText>
                When you're building something interactive for a consumer audience, the PM's job is
                to protect the UX from the complexity of the build. Developers solve for technical
                feasibility. Clients push for features. Someone has to hold the line on what the
                user actually experiences.
              </ProjectSectionText>
              <ProjectSectionText>
                If your stakeholder review process is generating conflicting feedback late in the
                build, the problem isn't the feedback. It's that alignment wasn't established
                clearly enough at the start.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
