import Banner from "../../components/Banner/Banner";
import aboutBannerImg from '../../assets/MontainAbout.png';
import { AboutData } from "../../data/AboutData";
import Collapse from "../../components/Collapse/Collapse";
import CollapseContent from "../../components/CollapseContent/CollapseContent";
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <Banner 
        image={aboutBannerImg}
        alt='Montagnes'
        className={styles.aboutBanner}
        imgClassName={styles.aboutBannerImg}
      />
      <div className={styles.container}>
        {AboutData.map(({title, text}) => (
        <Collapse 
          key={title}
          title={title}>
          <CollapseContent text={text}/>
        </Collapse>
      ))}
      </div>
    </>
  )
}

export default About
