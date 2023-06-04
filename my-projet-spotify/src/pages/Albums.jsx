// import { useParams } from 'react-router-dom'
import Albums from "../components/Albums";
 
function AlbumsP() {

    // const { questionNumber } = useParams()
 
    return (
        <div>
            <h1>Liste des albums</h1>
            <Albums/>
            {/* {questionNumber} */}

        </div>
    )
}

export default AlbumsP;