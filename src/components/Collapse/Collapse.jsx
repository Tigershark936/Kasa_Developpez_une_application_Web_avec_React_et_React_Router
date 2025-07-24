import styles from './Collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Collapse = ({title, children}) => {
    return (
        <div className={styles.box}>
            <div className={styles.toggleBar}>
                <h2 className={styles.toggleBarH2}>{title}</h2>
                < FontAwesomeIcon 
                    icon={faChevronUp}
                    className={styles.faChevronDown}
                />
            </div>
            <div className={styles.content}>
                {children} {/* C’est ici que CollapseContent s’affiche */}
            </div>
        </div>
    )
}

export default Collapse