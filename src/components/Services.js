import { useEffect, useState } from 'react';
import style from '../modules/Services.module.css'

const Services = () => {

    const [services, setService ] = useState([
        {title: "Painting", description: "We paint all the things. Indoor. outdoor. hoboy everything", icon: "./icons/paint.png"},
        {title: "Cleaning", description: "indoor/outdoor/general blah blah blah blah blah blah  blah", icon: "./icons/mop.png"},
        {title: "Organizing", description: "Messy Room? We got you. Well help you organize your office, home, life, love life", icon: "./icons/house.png"},
        {title: "Flooring", description: "Wow I love floor sm. Can't lay down enough flooring to cover my love for flooring.", icon: "./icons/flooring.png"},
        {title: "Packing", description: "moving? Someone died of covid and left you a bunch of stuff? We can help!!!", icon: "./icons/shipping.png"},
        {title: "Trash Pick Up", description: "Bruh you got trash. we got arms and energy. let us take care of it for you", icon: "./icons/trashcan.png"},
    ]);

    return ( 
        <div className={style.services} id="services">
                 <h1>Services</h1>
                 <div className={style.serviceContainer}>

               { services.map((service) => (
                
                    <span className={style.singleService}>
                        
                            
                            <img className={style.serviceIcon} src={service.icon}/>

                            <h2 className={style.serviceTitle}> {service.title}</h2>

                            <h4>{service.description}</h4>
                      
                    </span>
            
            ))}
            </div>
        </div>
     );
}
export default Services;