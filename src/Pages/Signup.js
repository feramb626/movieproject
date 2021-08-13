import React, { useEffect, useState } from 'react';
import Background from '../Components/Background/background';
import Button from '../Components/Button/button';
import ListSelection from '../Components/ListSelection/ListSelection';

const Signuppage = () =>{

    return(
        <div>
            <Background>
            </Background>
            <Button className="container mx-auto"
                text={"Name"}
                clas={"email"}
            />
            <Button className="container mx-auto"
                text={"Country"}
                clas={"pass"}
            />                        
            <Button className="container mx-auto"
                text={"Password"}
                clas={"email"}
            />
            <Button className="container mx-auto"
                text={"Confirm Password"}
                clas={"email"}
            />
            <h1 className="text-center pt-10 text-xl font-bold">
                Choose your plan
            </h1> 
            <p className="text-center pt-6 text-xs">
                Acording with your plan you will have an specific catalogue of movies
            </p>  
            <ListSelection /> 
            <div className="mt-12">
                <Button className="container mx-auto"
                    text={"SIGN UP NOW"}
                    clas={"button-signup"}
                />       
            </div> 
            <div className="text-center pt-8 text-xs font-bold">
                <p>@2021</p>
            </div>    
        </div>

    )
}

export default Signuppage;