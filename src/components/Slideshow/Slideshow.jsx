import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Slideshow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slideshow = ({pictures}) => {
    return (
        <div className={styles.container}>
            <button className={`${styles.iconWrapper} ${styles.left}`}>
                < FontAwesomeIcon
                    icon={faChevronLeft}
                    className={styles.faChevronLeft}
                />
            </button>
            {/* <img src={pictures} alt={alt} className={styles.img}/> */}
            <button className={`${styles.iconWrapper} ${styles.right}`}>
                < FontAwesomeIcon 
                    icon={faChevronRight}
                    className={styles.faChevronRight}
                />
            </button>
        </div>
    )
}

export default Slideshow