import react from 'react';
import './ListSelection.css';

const ListSelection = () => {

    return(
        <div id="radio" className="container mx-auto mt-8">
            <div>
                <input type="radio" className="radio-buton" id="latino" name="genero" value="Latino" />
                <label for="latino" id="radio-label">Latino +</label>
            </div>
            <div>
                <input type="radio" className="radio-buton" id="International" name="genero" value="International" />
                <label for="latino" id="radio-label">International +</label>
            </div>
            <div>
                <input type="radio" className="radio-buton" id="Art" name="genero" value="Art" />
                <label for="latino" id="radio-label">Art +</label>
            </div>
        </div>
    )
}

export default ListSelection;