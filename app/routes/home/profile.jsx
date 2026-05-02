import profileImgLarge from '~/assets/profile-large.jpeg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpeg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Khushboo, a UX strategist and digital project manager based in Vancouver, working
      across public sector platforms and large-scale digital experiences.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I started in agency environments in Mumbai, working with brands like Home Centre India,
      Godrej Appliances, TATA Croma, Piramal Pharmaceuticals, and film releases under FOX
      Studios (Disney+). The work was fast, high-volume, and constantly shifting. It taught me
      how to manage complexity, align teams, and keep execution moving without losing clarity.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In Vancouver, my focus shifted from campaigns to public digital infrastructure at
      HealthLink BC within the BC Government. Here, the stakes changed. I worked on a platform
      used by millions of people making real health decisions. The work required more than
      content. It demanded structure, governance, and precision across teams.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Across both environments, my role has stayed consistent. I bring clarity to complex
      systems, translate intent into execution, and ensure the experience holds together from
      idea to delivery. My work spans UX content design, digital project management,
      accessibility-driven platforms, and cross-functional delivery across healthcare,
      e-commerce, and media.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m a certified PMP and looking for my next role in digital project management, UX
      strategy, or digital experience design in Vancouver. Open to a conversation about
      interesting work.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Section
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
