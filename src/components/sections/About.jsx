import { motion } from 'framer-motion';
import { fadeUpStagger, fadeUpItem, slideFromLeft, slideFromRight, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { site, stats } from '../../data/site';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrap}
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80"
            alt={`Indian classical and Bollywood dancers at ${site.name}, Jaipur`}
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            Est. {site.established} · Jaipur
          </motion.span>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionTitle
            label="About Academy"
            title="Jaipur's Home for World-Class Dance"
            subtitle={`Since ${site.established}, ${site.name} has trained thousands of students from Rajasthan and across India.`}
            align="left"
          />

          <div className={styles.story}>
            <h3 id="about-title">Our Story</h3>
            <p>
              Founded in the Pink City by Tanya Sharma, our academy was born from a vision to offer
              rigorous international training without leaving Rajasthan. From Kathak and Ghoomar to
              hip-hop and K-Pop, we blend Indian heritage with global choreography — right here in
              Malviya Nagar, Jaipur.
            </p>
          </div>

          <motion.div
            className={styles.missionVision}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.article variants={fadeUpItem}>
              <h4>Mission</h4>
              <p>
                To deliver exceptional dance education that honours Indian classical roots while
                preparing students for national stages, television, films, and international
                opportunities.
              </p>
            </motion.article>
            <motion.article variants={fadeUpItem}>
              <h4>Vision</h4>
              <p>
                To be Rajasthan&apos;s most trusted dance institution — where every child and adult
                in Jaipur discovers discipline, artistry, and the confidence to shine.
              </p>
            </motion.article>
          </motion.div>

          <motion.div
            className={styles.stats}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpItem}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
