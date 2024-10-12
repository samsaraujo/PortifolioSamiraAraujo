import styles from './Education.module.css';
import { useTheme } from '../../common/ThemeContext';

function Education() {
  const { theme } = useTheme();


  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">EDUCATION</h1>
      <div>
      <h2>Bacharelado em Engenharia de Software</h2>
      <p>Unopar</p>
      <p>2024 - Atualmente</p>
      </div>
     <hr />
      <div>
        <h2>Bacharelado em Engenharia Elétrica</h2>
        <p>Universidade Federal do Ceará - Campus Sobral</p>
        <p>2016 - Atualmente</p>
      </div>
    </section>
  );
}

export default Education;
