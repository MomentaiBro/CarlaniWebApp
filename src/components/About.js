import Slider from "react-slick";
import style from "../modules/About.module.css"

const About = () => {
    return ( 
        <div className={style.about} id="about">
            <section className={style.antSection}>
                <img
                    className={style.aboutImg}
                    src="carlanilogoant.png"
                    alt="ant with a broom"
                    />
            </section>
            <section className={style.description}>
                <h1>What's Carlani? </h1>
                <p>I'm baby keffiyeh roof party waistcoat forage portland. Man braid freegan yuccie, shabby chic lomo semiotics cliche deep v gluten-free helvetica vinyl mustache copper mug master cleanse hella. Banjo gochujang mustache disrupt activated charcoal street art portland pork belly humblebrag listicle. 3 wolf moon shabby chic disrupt poke twee squid. Cred keytar cray plaid four dollar toast ramps.</p>
            </section>
            <Slider></Slider>
            
        </div>
     );
}
 
export default About;