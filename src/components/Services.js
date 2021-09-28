import style from '../modules/Services.module.css'

const Services = () => {
    return ( 
        <div className={style.services} id="service-container"> 
            <div>
                <h1>Services</h1>
                <ul>
                    <li className="singleservice">
                            <img className="serviceicon" src="../icons/paint.png"/>
                            <h2 className="servicetitle">Paint</h2>
                            <h4>touch up paint and such.</h4>
                    </li>
                    <li className="singleserviceb">
                            <img className="serviceicon" src="icons/mop.png"/>
                            <h2 className="servicetitle">Clean</h2>
                            <h4>so much cleaning.</h4>
                    </li>
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