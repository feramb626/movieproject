import React, { useEffect, useState } from 'react';
import Background from '../Components/Background/background';
import Button from '../Components/Button/button';


const loginpage = () =>{

    return(
        <div>
            <Background>
            </Background>
            <Button className="container mx-auto"
                text={"Email"}
                clas={"email"}
            />
            <Button className="container mx-auto"
                text={"Password"}
                clas={"pass"}
            />                        
            <Button className="container mx-auto"
                text={"LOG IN NOW"}
                clas={"button-signup"}
            />
            <div className="text-center pt-8 text-xs font-bold">
                <p>@2021</p>
            </div>             
        </div>
    )
}

export default loginpage;