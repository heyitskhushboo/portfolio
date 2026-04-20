
import goCheeseCampaign from '~/assets/goCheesecampaign.png';

import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import lootCase from '~/assets/Lootcase.jpg';
import healthLinkBCPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import goCheeseLaptopImage from `~/assets/gpCheeseAILaptop.png`;
import healthLinkBCLaptopImage from `~/assets/hlbsLaptop.png`;
import goCheeseCampaignLaptopImage from `~/assets/goCheeseCampaignLaptopImage.png`;

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Product Manager',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title=" HealthLink BC"
        description="16 million people used this platform. Most couldn't find what they needed."
        buttonText="View project"
        buttonLink="/projects/healthlink"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${healthLinkBCLaptopImage} 1280w, ${healthLinkBCLaptopImage} 2560w`,
              placeholder: healthLinkBCPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="GO Cheese AI-based Interactive Website"
        description="The brief was to make people stay on a cheese brand website. So we gave them something to actually do."
        buttonText="View project"
        buttonLink="/projects/gocheese"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${goCheeseLaptopImage} 1280w, ${goCheeseLaptopImage} 2560w`,
              placeholder: healthLinkBCPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="GO Cheese Lovers Day Campaign"
        description="One day. Five platforms. It trended on Twitter for four hours."
        buttonText="View project"
        buttonLink="/projects/gocheeseloversday"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${goCheeseCampaignLaptopImage} 1280w, ${goCheeseCampaignLaptopImage} 2560w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="High-Scale Creative Campaigns"
        description=" Five film releases. One pandemic. Release dates that never move."
        buttonText="View project"
        buttonLink="/projects/creativecampaign"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${lootCase} 1280w, ${lootCase} 2560w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
