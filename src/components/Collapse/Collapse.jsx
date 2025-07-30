import styles from './Collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import React from 'react';


const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);   
        
        setTimeout(() => {
			setIsRotated(!isOpen);
		}, 0);
    }

    return (
        <div className={styles.box}>
            <div className={styles.toggleBar}>
                <h2 className={styles.toggleBarH2}>{title}</h2>
                <button onClick={handleClick} className={styles.iconWrapper}>
                    < FontAwesomeIcon 
                        icon={faChevronUp}
                        className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
                    />
                </button>
            </div>

            {/* Affiche .content seulement si isOpen est true */}
            {isOpen && (
                <div className={styles.content}>
                    {children && typeof children === 'object'
                        ? React.cloneElement(children, { isOpen })
                        : children}
                </div>
            )}
        </div>
    )
}

export default Collapse