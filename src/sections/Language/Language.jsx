import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import Language from '../../common/Language';
import { useTheme } from '../../common/ThemeContext';
import LanguageList from '../../common/LanguageList';

function Language() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Languages</h1>
      <div className={styles.skillList}>
        <LanguageList src={checkMarkIcon} language="English: Intermediate" />
        <LanguageList src={checkMarkIcon} language="Spanish: Intermediate" />
        <LanguageList src={checkMarkIcon} language="French: Basic" />
      </div>
    
      
    </section>
  );
}

export default Language;
