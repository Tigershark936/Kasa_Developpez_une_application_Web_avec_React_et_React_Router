import styles from './CollapseContent.module.scss';

const CollapseContent = ({ text, description, equipments, isOpen }) => {
  const contentClass = `${styles.text} ${isOpen ? styles.show : ''}`;

  if (equipments) {
    return (
      <ul className={contentClass}>
        {equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className={contentClass}>
      {description || text}
    </p>
  );
};


export default CollapseContent