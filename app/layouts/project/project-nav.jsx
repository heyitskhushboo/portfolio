import { Link } from '@remix-run/react';
import { Icon } from '~/components/icon';
import { Text } from '~/components/text';
import styles from './project-nav.module.css';

export function ProjectNav({ previous, next }) {
  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <div className={styles.inner}>
        {previous ? (
          <Link to={previous.href} className={styles.link} data-direction="prev">
            <Icon icon="arrow-left" className={styles.icon} />
            <div className={styles.label}>
              <Text className={styles.direction} size="s">Previous project</Text>
              <Text className={styles.title} as="span">{previous.title}</Text>
            </div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={next.href} className={styles.link} data-direction="next">
            <div className={styles.label}>
              <Text className={styles.direction} size="s">Next project</Text>
              <Text className={styles.title} as="span">{next.title}</Text>
            </div>
            <Icon icon="arrow-right" className={styles.icon} />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
