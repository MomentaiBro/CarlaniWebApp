import style from "../modules/About.module.css"

const About = () => {
    return ( 
        <div className={style.about} >
            <section className={style.description}>
                <h2>What's Carlani? </h2>
                <p> Here are Carlani. We care about Carlani.. and THIS is our story...</p>
            </section>
            <section className={style.aboutImage}>

            </section>
        </div>
     );
}
 
export default About;