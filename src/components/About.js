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
                <svg id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><g transform="translate(463.3199470949114 280.5049718295511)"><path d="M139.3 -116.5C187.1 -91.5 237.1 -45.7 232.8 -4.2C228.6 37.2 170.1 74.5 122.3 108.6C74.5 142.8 37.2 173.9 -13.1 187C-63.4 200.1 -126.8 195.1 -176.8 161C-226.8 126.8 -263.4 63.4 -259.4 4C-255.4 -55.4 -210.8 -110.8 -160.8 -135.8C-110.8 -160.8 -55.4 -155.4 -4.8 -150.6C45.7 -145.7 91.5 -141.5 139.3 -116.5" fill="#FADB78"></path></g></svg>
                <h2>What's Carlani? </h2>
                <p> Here are Carlani. We care about Carlani.. and THIS is our story...</p>
            </section>
            
        </div>
     );
}
 
export default About;