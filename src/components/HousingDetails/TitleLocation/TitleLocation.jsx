import styles from './TitleLocation.module.scss';

const TitleLocation = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Magnifique appartement proche Canal Saint Martin</h1>
            <h2 className={styles.h2}>Paris, Ile-de-France</h2>
        </div>
    )
}

export default TitleLocation