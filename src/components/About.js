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
                <p> Here are Carlani. We care about Carlani.. and THIS is our story...</p>
            </section>
            
        </div>
     );
}
 
export default About;