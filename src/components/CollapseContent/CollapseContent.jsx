import styles from './CollapseContent.module.scss';

const CollapseContent = ({text, isOpen}) => {
    return (
        <p className={`${styles.text} ${isOpen ? styles.show : ''}`}>{text}</p>
    )
}

export default CollapseContent