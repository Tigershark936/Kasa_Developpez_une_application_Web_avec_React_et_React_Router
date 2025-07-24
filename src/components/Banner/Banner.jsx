import styles from './Banner.module.scss';

const Banner = ({image, text, alt, className , titleClassName, imgClassName}) => {
    return (
        <div className={`${styles.banner} ${className || ''}`}>
            <img src={image} alt={alt} className={imgClassName}/>
            {text && <h1 className={titleClassName}>{text}</h1>}
        </div>
    )
}

export default Banner