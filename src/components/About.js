import style from "../modules/About.module.css"

const About = () => {
    return ( 
        <div className={style.about} id="about">
            <section className={style.antSection}>
            
                <svg id="visual" viewBox="0 0 150 200" width="150" height="200" version="1.1"><g transform="translate(76.88152945096533 103.06580930618107)"><path d="M48.7 -54.1C60.2 -37.2 64.6 -18.6 62.6 -2C60.6 14.6 52.2 29.2 40.7 43.1C29.2 56.9 14.6 69.9 -6 75.9C-26.5 81.8 -53 80.7 -62.4 66.9C-71.8 53 -64 26.5 -59.5 4.5C-54.9 -17.4 -53.6 -34.9 -44.3 -51.7C-34.9 -68.6 -17.4 -84.8 0.6 -85.4C18.6 -86 37.2 -70.9 48.7 -54.1" fill="#BB004B"></path></g></svg>
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