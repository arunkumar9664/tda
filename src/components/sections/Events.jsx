import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { events } from '../../data/events';
import styles from './Events.module.scss';

export default function Events() {
  return (
    <section id="events" className={styles.section} aria-labelledby="events-title">
      <div className={styles.container}>
        <SectionTitle
          label="Upcoming Events"
          title="Join the Movement"
          subtitle="Auditions, galas, workshops, and open houses — your next chapter starts here."
        />
        <h2 id="events-title" className="sr-only">
          Upcoming Events
        </h2>
        <div className={styles.grid}>
          {events.map((event, i) => (
            <motion.article
              key={event.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.image}>
                <img src={event.image} alt={event.title} loading="lazy" />
                <span className={styles.date}>{event.date}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.location}>{event.location}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <Button href="#contact" variant="outline" className={styles.cta}>
                  Register Now
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
