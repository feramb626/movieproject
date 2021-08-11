import React, { useEffect, useState } from 'react';
import Background from '../Components/Background/background';
import Button from '../Components/Button/button';
import Ico from '../Components/Ico/Ico';


const homepage = () =>{
    
    return(
        <div>
            <Background>
            </Background>
            <div className="container mx-auto px-10">
                <h1 className="text-center font-bold pt-6">
                    One more streaming app, may it will be the best
                </h1>
                <h1 className="text-center pt-3">
                    USD 10.50/month
                </h1>
                <Button className="container mx-auto"
                    text={"SIGN UP NOW"}
                    clas={"button-signup"}
                />
                <p className="text-center pt-3 text-xs">
                    *Price may vary depending on the currency or platform used for payment. Third-party fees may apply.
                </p>
                <div className="container mx-auto px-16 pt-10">
                    <div id ="linea">
                    </div> 
                </div>
                <h1 className="text-center pt-10 text-xl font-bold">
                    Watch the way you want
                </h1> 
                <p className="text-center pt-6 text-xs">
                    Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy.
                </p>
                <h1 className="text-center pt-10 text-xl font-bold">
                    Available on your favorite devices
                </h1>
                <div id="iconos" >
                    <div className="icon">
                        <Ico 
                            name={"fa fa-tv fa-5x"}
                        />
                        <ul className="text-center pt-6 text-xs">
                            <li>Amazon Fire TV</li>
                            <li>Android TV</li>
                            <li>Apple TV</li>
                            <li>Chromecast</li>
                            <li>LG TVs</li>
                            <li>Roku</li>
                            <li>Samsung</li>
                        </ul>
                    </div>
                    <div className="icon">
                        <Ico 
                            name={"fa fa-laptop fa-5x"}
                        />  
                        <ul className="text-center pt-6 text-xs">
                            <li>Chorme OS</li>
                            <li>MacOS</li>
                            <li>Windows PC</li>
                        </ul>
                    </div>                    
                    <div className="icon">
                        <Ico 
                            name={"fa fa-mobile fa-5x"}
                        />
                        <ul className="text-center pt-6 text-xs">
                            <li>Amazon Fire Tablets</li>
                            <li>Android Phones & Tablets</li>
                            <li>Iphone & ipad</li>
                        </ul>
                    </div>
                    <div className="icon">
                        <Ico 
                            name={"fa fa-gamepad fa-5x"}
                        /> 
                        <ul className="text-center pt-6 text-xs">
                            <li>PS4</li>
                            <li>PS5</li>
                            <li>Xbox One</li>
                            <li>Xbox Series X</li>
                            <li>Xbox Series S</li> 
                        </ul> 
                    </div>                
                </div> 
                <div className="text-center pt-8 text-xs font-bold">
                    <p>@2021</p>
                </div>         
            </div>
 

        </div>
    )
}

export default homepage;
