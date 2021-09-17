import HomeStyle from "../modules/Home.module.css"
import "animate.css"

const Home = () => {
    return ( 
        <div className={HomeStyle.Home}>
            <img 
                src="Logo.png"
                alt="Carlani Logo"
                className="animate__animated animate__fadeInUp welcome"
                    />
        </div>
     );
}

export default Home;