import { DescriptionHousing } from "../../data/DescriptionHousing";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import HousingDetails from "../../components/HousingDetails/HousingDetails";


const HousingPage = () => {
    // 1.Récupérer l'ID depuis l'URL
    const { id } = useParams();

    // 2.Chercher le logement dans la data
    const selectedHousing = DescriptionHousing.find((housing) => housing.id === id);
    
    // 3.Si le logement n’existe pas → afficher NotFound
    if(!selectedHousing){
        return <NotFound />;
    }

    // 4.Si le logement existe → j'accéder à ses données
    const {
        title,
        location,
        tags,
        rating,
        host,
        description,
        equipments,
        pictures
    } = selectedHousing;

    return (
        <>
            < Slideshow 
                pictures={pictures}
            />
            <HousingDetails 
                title={title}
                city={location}
                tags={tags}
                rating={rating}
                host={host}
                description={description}
                equipments={equipments}
            />
        </>
    )
}

export default HousingPage