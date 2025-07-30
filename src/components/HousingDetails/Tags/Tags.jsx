import styles from './Tags.module.scss';

const Tags = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.p}>Cozy</p>
            </div>
            <div className={styles.text}>
                <p className={styles.p}>Canal</p>
            </div>
                <div className={styles.text}>
                <p className={styles.p}>Paris 10</p>
            </div>
        </div>
    )
}

export default Tags