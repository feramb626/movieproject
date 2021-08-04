import react from 'react';
import './button.css';

const Button = ({text,clas}) =>{

    return(
        <div>
            <button className="button" id={`${clas}`}>
                <div className="container mx-auto">
                    {text} 
                </div>                
            </button>
        </div>
    )
}

export default Button