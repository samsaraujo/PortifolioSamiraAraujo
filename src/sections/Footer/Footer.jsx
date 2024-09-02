import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Samira Araujo. <br />
        Todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
