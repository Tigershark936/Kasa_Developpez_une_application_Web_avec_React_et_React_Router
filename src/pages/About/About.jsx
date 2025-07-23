import Banner from "../../components/Banner/Banner";
import aboutBannerImg from '../../assets/MontainAbout.png';
import styles from './About.module.scss';

function About() {
  return (
    <>
      <Banner 
        image={aboutBannerImg}
        alt='Montagnes'
        className={styles.aboutBanner}
        imgClassName={styles.aboutBannerImg}
      />
    </>
  )
}

export default About