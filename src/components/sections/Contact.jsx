import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { site } from '../../data/site';
import styles from './Contact.module.scss';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <SectionTitle
          label="Contact"
          title="Begin Your Journey"
          subtitle={`Visit us in ${site.addressShort}, Jaipur — book a free trial class or speak with our team today.`}
          align="left"
        />
        <h2 id="contact-title" className="sr-only">
          Contact Us
        </h2>

        <div className={styles.grid}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <p className={styles.success}>
                Thank you! Our team will reach out within 24 hours to welcome you to{' '}
                {site.name}.
              </p>
            ) : (
              <>
                <div className={styles.row}>
                  <label>
                    Full Name
                    <input type="text" name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                </div>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="+91 98XXX XXXXX" />
                </label>
                <label>
                  Program Interest
                  <select name="program" defaultValue="">
                    <option value="" disabled>
                      Select a program
                    </option>
                    <option>Kathak / Classical</option>
                    <option>Bollywood</option>
                    <option>Hip-Hop</option>
                    <option>Contemporary</option>
                    <option>Rajasthani Folk</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} placeholder="Tell us about your dance goals..." />
                </label>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </>
            )}
          </motion.form>

          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.block}>
              <h4>Phone</h4>
              <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            </div>
            <div className={styles.block}>
              <h4>WhatsApp</h4>
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className={styles.block}>
              <h4>Email</h4>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className={styles.block}>
              <h4>Location</h4>
              <p>{site.address}</p>
            </div>
            <div className={styles.social}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                {Object.entries(site.social).map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.map}>
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                alt="Jaipur, Rajasthan — home of Tanya Dance Academy"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
