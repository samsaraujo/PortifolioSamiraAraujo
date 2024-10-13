import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImgS.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV_PT from '../../assets/CV_PT.pdf'
import CV_EN from '../../assets/CV_EN.pdf'
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const github = theme === 'light' ? githubLight : githubDark;
  const linkedin = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <div>
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Foto de perfil de Samira" />
                <img className={styles.colorMode} src={themeIcon} alt="Icone de modo de cor" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>Samira Araujo</h1>
                <h2>Full-Stack Developer</h2>
                <span>
                  <a href="https://www.linkedin.com/in/samira-araujo-76b802187/" target='_blank'>
                  <img src={linkedin} alt="Linkedin Icon" /></a>
                  <a href="https://github.com/samsaraujo" target='_blank'>
                  <img src={github} alt="Github Icon" /></a>
                </span>
                <span>
                <p className={styles.description}>I'm Samira Araujo, a Full Stack Developer in training, currently pursuing degrees in Software Engineering and Electrical Engineering. Discover more about my experience and feel free to reach out.</p>
                </span>
                <span>
                <a href={CV_EN} download>
                  <button className='hover'>Resume (EN)</button>
                </a>
                <a href={CV_PT} download>
                  <button className='hover'>Resume (PT)</button>
                </a>
                </span>
            </div>
        </section>
    </div>
  )
}

export default Hero

