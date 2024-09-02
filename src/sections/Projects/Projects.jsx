import styles from './ProjectsStyles.module.css';
import bikes from '../../assets/bikes.png'
import eventos from '../../assets/events.png';
import joias from '../../assets/joias.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bikes}
          link="https://github.com/samsaraujo/E-ComerceBikeUrban"
          h3="BikeUrban"
          p="Bike Shop"
        />
        <ProjectCard
          src={eventos}
          link="https://github.com/orgs/Avanti-DFS/repositories"
          h3="Procurando Um Evento?"
          p="Events Website"
        />
        <ProjectCard
          src={joias}
          link="/"
          h3="Joias"
          p="Joias"
        />
      </div>
    </section>
  );
}

export default Projects;
