import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

const Card = ({ title, cover, id }) => { 
    console.log(title, cover, id);
    return (
        <div key={id} className={styles.cardContainer}>
            <Link to={`/housing/${id}`} className={styles.card}>
                <img src={cover} alt='Picture logement' className={styles.img}/>
                <h1 className={styles.h1}>{title}</h1>
            </Link>
        </div>
    )
}

export default Card