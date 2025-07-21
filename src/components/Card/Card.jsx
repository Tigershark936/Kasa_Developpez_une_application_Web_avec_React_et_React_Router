import styles from './Card.module.scss';

function Card(){
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.h1}>Titre de la location</h1>
            </div>
        </div>
    )
}

export default Card