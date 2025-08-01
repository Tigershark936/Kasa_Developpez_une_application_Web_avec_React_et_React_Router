import { useRef, useEffect, useState } from 'react';
import styles from './CollapseContent.module.scss';

const CollapseContent = ({ text, description, equipments, isOpen }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div
      className={styles.content}
      style={{ maxHeight }}
      ref={contentRef}
    >
      {equipments ? (
        <ul>
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description || text}</p>
      )}
    </div>
  );
};

export default CollapseContent;
