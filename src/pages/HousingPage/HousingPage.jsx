import { DescriptionHousing } from "../../data/DescriptionHousing";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import NotFound from '../NotFound/NotFound';


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
    const pictures = selectedHousing.pictures;

    return (
        < Slideshow 
            pictures={pictures}
        />
    )
}

export default HousingPage