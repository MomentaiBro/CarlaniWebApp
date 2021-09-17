import style from '../modules/Services.module.css'

const Services = () => {
    return ( 
        <div className={style.services} id="services"> 
            <div>
                <h1>Services</h1>
                <ul>
                    <li>
                        Paint
                    </li>
                    <li>
                        Clean
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