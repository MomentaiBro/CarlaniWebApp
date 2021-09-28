import style from '../modules/Services.module.css'

const Services = () => {
    return ( 
        <div className={style.services} id="services"> 
            <div className="serviceContainer">
                <h1>Services</h1>
                <ul>
                    <li className={style.singleservice}>
                            <img className={style.serviceicon} src="../icons/paint.png"/>
                            <h2 className={style.servicetitle}>Paint</h2>
                            <h4>touch up paint and such.</h4>
                    </li>
                    <li className={style.singleserviceb}>
                            <img className={style.serviceicon}  src="icons/mop.png"/>
                            <h2 className={style.servicetitle}>Clean</h2>
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