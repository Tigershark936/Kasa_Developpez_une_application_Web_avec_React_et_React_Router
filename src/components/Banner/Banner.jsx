import img from '../../assets/Falaise.png';
import styles from './Banner.module.scss';

function Banner(){
    return (
        <div className={styles.banner}>
            <img src={img} alt='Falaises' className={styles.img}/>
            <h1 className={styles.h1}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner