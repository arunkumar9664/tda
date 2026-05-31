import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { pricingPlans } from '../../data/pricing';
import { site } from '../../data/site';

function formatPrice(amount) {
  return `${site.currencySymbol}${amount.toLocaleString('en-IN')}`;
}
import { fadeUpStagger, springPop, springSoft } from '../../utils/motion';
import styles from './Pricing.module.scss';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <div className={styles.container}>
        <SectionTitle
          label="Membership"
          title="Invest in Your Artistry"
          subtitle="Affordable plans for Jaipur families and serious performers — from first steps to national stages."
          light
        />
        <h2 id="pricing-title" className="sr-only">
          Pricing Plans
        </h2>
        <motion.div
          className={styles.grid}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.id}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              variants={springPop}
              whileHover={{ y: plan.featured ? -16 : -10, transition: springSoft }}
            >
              {plan.featured && <span className={styles.badge}>Most Popular</span>}
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{formatPrice(plan.price)}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button
                to="/#contact"
                variant={plan.featured ? 'primary' : 'outline'}
                className={styles.btn}
              >
                Get Started
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
