import styles from './Education.module.css';
import { useTheme } from '../../common/ThemeContext';

function Education() {
  const { theme } = useTheme();


  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">EDUCATION</h1>
      <div>
      <h2>Software Engineering</h2>
      <p>Unopar</p>
      <p>2024 - Present</p>
      </div>
     <hr />
      <div>
        <h2>Electrical Engineering</h2>
        <p>Universidade Federal do Ceará - Campus Sobral</p>
        <p>2016 - 2025</p>
      </div>
    </section>
  );
}

export default Education;
