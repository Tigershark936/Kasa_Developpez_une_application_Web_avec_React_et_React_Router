import styles from './CollapseContent.module.scss';

const CollapseContent = ({text}) => {
    return (
        <p className={styles.text}>{text}</p>
    )
}

export default CollapseContent