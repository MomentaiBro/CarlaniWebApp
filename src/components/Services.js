import { useEffect, useState } from 'react';
import style from '../modules/Services.module.css'

const Services = () => {

    const [services, setService ] = useState([
        {title: "Painting", description: "If there are walls that need some color -- we can paint 'em!", icon: "./icons/paint.png"},
        {title: "Cleaning", description: "Messy Rooms? Need your house to get ready for showings? We've got a knack for cleaning.", icon: "./icons/mop.png"},
        {title: "Organizing", description: "We all get a little disorganized from time to time. Let us help organize your office, home, garage, etc.", icon: "./icons/house.png"},
        {title: "Flooring", description: "Got some flooring you want to get rid of? Maybe need some help instaling your new hardwood floors? We got you!", icon: "./icons/flooring.png"},
        {title: "Packing", description: "Moving can be so daunting. Luckily, Carlani has experience helping home owners get ready for the big move!", icon: "./icons/shipping.png"},
        {title: "Trash Pick Up", description: "Need help getting rid of trash? Let Carlani help you with that so you dont have to worry.", icon: "./icons/trashcan.png"},
    ]);

    return ( 
        <div className={style.services} id="services">
            <h1>Services We Offer</h1>
            {/* <p>These are our Sevices</p> */}
            <div className={style.serviceContainer}>

            { services.map((service) => (
        
                <span className={style.singleService}>  
                    <img className={style.serviceIcon} src={service.icon} alt={service.description}/>

                    <h2 className={style.serviceTitle}> {service.title}</h2>

                    <h4>{service.description}</h4>
                </span>
            ))}

            </div>
        </div>
     );
}
export default Services;