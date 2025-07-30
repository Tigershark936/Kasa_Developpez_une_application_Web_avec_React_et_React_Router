import { DescriptionHousing } from '../../data/DescriptionHousing';
import TitleLocation from './TitleLocation/TitleLocation';
import Tags from './Tags/Tags';
import RatingStars from './RatingStars/RatingStars';
import HostInfo from './HostInfo/HostInfo';
import Collapse from '../Collapse/Collapse';
import CollapseContent from '../CollapseContent/CollapseContent';
import styles from './HousingDetails.module.scss';

const HousingDetails = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>

                {/* LIGNE 1 : titre à gauche, HostInfo visible SEULEMENT en desktop */}
                <div className={styles.row}>
                    <TitleLocation />
                    <div className={styles.hostdesktopOnly}>
                        <HostInfo />
                    </div>
                </div>

                {/* LIGNE 2 : tags à gauche, RatingStars + HostInfo (visible uniquement en mobile) */}
                <div className={styles.row}>
                    <Tags />
                    <div className={styles.ratingHostMobile}>
                        <RatingStars rating={3} />
                        <HostInfo />
                    </div>
                    <div className={styles.ratingStarsDesktop}>
                        <RatingStars rating={3} />
                    </div>
                </div>

            </div>
            <div className={styles.dropdown}>
                <Collapse>
                    <CollapseContent />
                </Collapse>
                <Collapse>
                    <CollapseContent />
                </Collapse>
            </div>
        </div>
    )
}

export default HousingDetails