
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
                <p>Carlani, LLC was founded with a passionate drive to bring our family-owned business and values to your home improvement and remodeling needs.  Providing solutions to homeowners during their home transitions whether is selling, renting, or remodeling.   </p>
                <br/>
                <p>We understand that having a construction liaison responsible for the construction project can save clients precious time and eliminate stress, by utilizing a liaison for your remodeling needs will minimize time, frustration and guess work from finding trustworthy, loyal and honest contractors/subcontractors.  </p>
                <br/>
                <p>We focus on bringing the final finishes to your home to create the look you need for your project whatever the transition may be.  Finishes such as painting, changing fixtures, flooring, carpet cleaning or changing, installing tile, and more are some of the services we offer.</p>
                <br/>
            </section>
            
        </div>
     );
}
 
export default About;