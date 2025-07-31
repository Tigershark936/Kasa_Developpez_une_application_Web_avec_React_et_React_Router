import TitleLocation from './TitleLocation/TitleLocation';
import Tags from './Tags/Tags';
import RatingStars from './RatingStars/RatingStars';
import HostInfo from './HostInfo/HostInfo';
import Collapse from '../Collapse/Collapse';
import CollapseContent from '../CollapseContent/CollapseContent';
import styles from './HousingDetails.module.scss';

const HousingDetails = ({ title, location, tags, rating, host, description, equipments}) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>

                {/* LIGNE 1 : titre à gauche, HostInfo visible SEULEMENT en desktop */}
                <div className={styles.row}>
                    <TitleLocation 
                        title={title}
                        location={location}
                    />
                    <div className={styles.hostdesktopOnly}>
                        <HostInfo 
                            host={host}
                        />
                    </div>
                </div>

                {/* LIGNE 2 : tags à gauche, RatingStars + HostInfo (visible uniquement en mobile) */}
                <div className={styles.row}>
                    <Tags tags={tags}/>
                    <div className={styles.ratingHostMobile}>
                        <RatingStars 
                            rating={rating} 
                        />
                        <HostInfo 
                            host={host}
                        />
                    </div>
                    <div className={styles.ratingStarsDesktop}>
                        <RatingStars 
                            rating={rating}
                        />
                    </div>
                </div>

            </div>
            <div className={styles.dropdown}>
                <Collapse title="Description">
                    <CollapseContent description={description} />
                </Collapse>
                <Collapse title="Équipements">
                    <CollapseContent equipments={equipments} />
                </Collapse>
            </div>
        </div>
    )
}

export default HousingDetails