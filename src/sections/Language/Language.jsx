import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Languages</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="English: Intermediate" />
        <SkillList src={checkMarkIcon} skill="Spanish: Intermediate" />
        <SkillList src={checkMarkIcon} skill="French: Basic" />
      </div>
    
      
    </section>
  );
}

export default Skills;
