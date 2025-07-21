import { Link } from 'react-router-dom';
import { DescriptionHousing } from '../../data/DescriptionHousing';
import styles from './Card.module.scss';

function Card(){
    // On crée un tableau de JSX avec .map()
    const announces = DescriptionHousing.map((announce) => {
        
        return (
        <div key={announce.id} className={styles.cardContainer}>
            <Link  to='/' className={styles.card}>
                <img src={announce.cover} alt='Picture logement' className={styles.img}/>
                <h1 className={styles.h1}>{announce.title}</h1>
            </Link>
        </div>
    )
    });
    
    // On affiche le tableau dans le JSX
    return (
        <div className={styles.container}>
            {announces}
        </div>
    )
}

export default Card