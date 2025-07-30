import styles from './HostInfo.module.scss';

const HostInfo = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.name}>Alexandre Dumas</h3>
            <img className={styles.photo}/>
        </div>
    )
}

export default HostInfo