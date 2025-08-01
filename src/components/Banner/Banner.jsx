import styles from './Banner.module.scss';

const Banner = ({ image, text, alt, className, titleClassName }) => {
  return (
    <div className={`${styles.banner} ${className}`} role="img" aria-label={alt}>
      <div
        className={styles.banner__image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {text && <h1 className={`${styles.banner__title} ${titleClassName || ''}`}>{text}</h1>}
    </div>
  );
};

export default Banner;