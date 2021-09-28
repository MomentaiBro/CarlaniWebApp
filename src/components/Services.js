import { useEffect, useState } from 'react';
import style from '../modules/Services.module.css'

const Services = () => {

    const [service, setService ] = useState([
        {title: "Painting", description: "We paint all the things. Indoor. outdoor. hoboy everything. even your kids.", icon: "./icons/paint.png"},
        {title: "Cleaning", description: "indoor/outdoor/general trash", icon: "./icons/mop.png"},
        {title: "Organizing", description: "Messy Room? We got you. Well help you organize your office, home, life, love life, anything. you name it.", icon: "./icons/house.png"},
        {title: "Flooring", description: "Wow I love floor sm. Can't lay down enough flooring to cover my love for flooring.", icon: "./icons/flooring.png"},
        {title: "Packing", description: "moving? Someone died of covid and left you a bunch of stuff? We can help!!!", icon: "./icons/shipping.png"},
        {title: "Trash Pick Up", description: "Bruh you got trash. we got arms and energy. let us take care of it for you", icon: "./icons/trashcan.png"},
        
    ])
    // useEffect(()=> {
    //         service = []
    // } )

    return ( 
        <div className={style.services} id="services"> 
            <div className="serviceContainer">
                <h1>Services</h1>
                <ul>
                    <li className={style.singleservice}>
                            <img className={style.serviceicon} src=/>

                            <h2 className={style.servicetitle}> {service.title}</h2>

                            <h4>{service.description}</h4>
                    </li>



                    {/* <li className={style.singleserviceb}>
                            <img className={style.serviceicon}  src="./icons/mop.png"/>
                            <h2 className={style.servicetitle}>Clean</h2>
                            <h4>so much cleaning.</h4>
                    </li> */}
                    <li>
                        Organized
                    </li>
                    <li>
                        Change Flooring
                    </li>
                    <li>
                        Change Carpet
                    </li>
                    <li>
                        Outside Cleaning
                    </li>
                    <li>
                        Garbage Clean Up
                    </li>
                    <li>
                        Packing Help
                    </li>
                    <li>
                        And More... 
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Services;