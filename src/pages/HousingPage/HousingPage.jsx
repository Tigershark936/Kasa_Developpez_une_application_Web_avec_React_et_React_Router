import { DescriptionHousing } from "../../data/DescriptionHousing";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router";
import HousingDetails from "../../components/HousingDetails/HousingDetails";


const HousingPage = () => {
    // 1.Récupérer l'ID depuis l'URL
    const { id } = useParams();
    // 2. Instancier le hook de navigation
    // ➜ Permet de rediriger l'utilisateur vers une autre page de l'application via le code (ex: après une erreur, une action ou un clic)
    const navigate = useNavigate()

    const [selectedHousing, setSelectedHousing] = useState(null);

    useEffect(() => {
        // 2.Chercher le logement dans la data
        const findHousing = DescriptionHousing.find((housing) => housing.id === id);

        // 3.Si le logement n'existe pas → afficher NotFound
        if(findHousing){
            setSelectedHousing(findHousing);
        } else {
            navigate('/notfound');
        }

    }, [id]);


    if (!selectedHousing) {
        return <></>
    }

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
                location={location}
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