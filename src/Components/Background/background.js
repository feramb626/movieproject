import react from 'react';
import './background.css';
import Button from '../Button/button';



const background = () => {
    
    return(
        <div id="background" className="w-screen">
            <Button
                text={"LOGIN"}
                clas={"button-login"}
            />
        </div>
    )
    
}

export default background;