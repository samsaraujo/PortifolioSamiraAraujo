import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div>
      <h2>Email</h2>
      <p><a href="mailto:samiraaraujo119@gmail.com">samiraaraujo119@gmail.com</a></p>
      <hr />
      <h2>Phone</h2>
      <p><a href="tel:+5588994731366">(88)994731366</a></p>

      </div>
    </section>
  );
}

export default Contact;
