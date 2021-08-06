import react from 'react';
import './Ico.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ico = ({name}) =>{

    return(
        <div className="icono">
            {/* <i className="fa fa-spinner fa-spin"></i> */}
            <i className={`${name}`}></i>
        </div>
    )
}

export default Ico;

// fa fa-tv fa-5x