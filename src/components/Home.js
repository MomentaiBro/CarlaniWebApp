import HomeStyle from "../modules/Home.module.css"
import "animate.css"

const Home = () => {
    return ( 
        <div className={HomeStyle.Home}>
            
            <img 
                src="carlanilogo.png"
                alt="Carlani Logo"
                className="animate__animated animate__slideInLeft welcome"
                    />
        </div>
     );
}

export default Home;