import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you\'re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

const testimonials = [
  {
    quote:
      "Once she sets her mind to something, there's no stopping her. Responsibility, accountability, and teamwork are her key strengths.",
    name: 'Nupur Puranik',
    role: 'Advertising Professional · Dentsu Creative',
  },
  {
    quote:
      'She brought exceptional skill to the content design work. Her recommendations are always backed by research, and she consistently made a positive impact on the team dynamic.',
    name: 'Anupama Budaraju, PMP',
    role: 'Project Manager · HealthLink BC',
  },
];

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const sending = false;

  return (
    <Section className={styles.contact}>
      <Transition unmount in={true} timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.wrapper} ref={nodeRef}>
            <div className={styles.left}>
              <Heading
                className={styles.title}
                data-status={status}
                level={3}
                as="h1"
                style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
              >
                <DecoderText
                  text="Open to new roles and good conversations."
                  start={status !== 'exited'}
                  delay={300}
                />
              </Heading>
              <Divider
                className={styles.divider}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
              />
              <Text
                className={styles.intro}
                data-status={status}
                size="l"
                as="p"
                style={getDelay(tokens.base.durationS, initDelay, 0.5)}
              >
                Looking for digital PM, UX strategy, and digital experience roles in Vancouver. If
                something sounds like a fit, reach out.
              </Text>
              <div className={styles.testimonials}>
                <Text className={styles.testimonialsLabel} size="s">
                  What people say
                </Text>
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={styles.testimonialCard}
                    style={cssProps({ delay: numToMs(msToNum(initDelay) + 900 + i * 250) })}
                  >
                    <span className={styles.quoteGlyph} aria-hidden>
                      &ldquo;
                    </span>
                    <Text className={styles.quote} size="m" as="p">
                      {t.quote}
                    </Text>
                    <div className={styles.authorInfo}>
                      <Text className={styles.authorName} size="s">
                        {t.name}
                      </Text>
                      <Text className={styles.authorRole} size="s">
                        {t.role}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className={styles.form}>
              {/* Hidden honeypot field to identify bots */}
              <Input
                className={styles.botkiller}
                label="Name"
                name="name"
                maxLength={MAX_EMAIL_LENGTH}
              />
              <Input
                required
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay)}
                autoComplete="email"
                label="Your email"
                type="email"
                name="email"
                maxLength={MAX_EMAIL_LENGTH}
                {...email}
              />
              <Input
                required
                multiline
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationS, initDelay)}
                autoComplete="off"
                label="Message"
                name="message"
                maxLength={MAX_MESSAGE_LENGTH}
                {...message}
              />
              <Button
                className={styles.button}
                data-status={status}
                data-sending={sending}
                style={getDelay(tokens.base.durationM, initDelay)}
                disabled={true}
                icon="send"
                type="button"
              >
                Send message
              </Button>
            </form>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
