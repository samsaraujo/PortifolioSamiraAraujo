import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div>
      <p>EMAIL: <a href="mailto:samiraaraujo119@gmail.com">samiraaraujo119@gmail.com</a></p>
      <hr />
      <p>PHONE: <a href="https://wa.me/5588994731366" target="_blank">(88)994731366</a></p>

      </div>
    </section>
  );
}

export default Contact;
