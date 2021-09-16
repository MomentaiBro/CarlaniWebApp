import style from "../modules/About.module.css"

const About = () => {
    return ( 
        <div className={style.about} >
            <section >
                <img
                    className={style.aboutImg}
                    src="carlanilogoant.png"
                    alt="ant with a broom"
                    />
            </section>
            <section className={style.description}>
                <h2>What's Carlani? </h2>
                <p> Here are Carlani. We care about Carlani.. and THIS is our story...</p>
            </section>
            
        </div>
     );
}
 
export default About;