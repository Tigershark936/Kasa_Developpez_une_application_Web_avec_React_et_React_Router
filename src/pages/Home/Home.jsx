import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { DescriptionHousing } from "../../data/DescriptionHousing";
import styles from '../../pages/Home/Home.module.scss';

function Home() {
  return (
    <>
      <Banner />
      <div className={styles.container}>
        {/* // On crée un tableau de JSX avec .map() */}
        {DescriptionHousing.map((announce) => (
          <Card
            key={announce.id}
            id={announce.id}
            title={announce.title}
            cover={announce.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home