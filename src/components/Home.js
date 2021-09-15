import HomeStyle from "../modules/Home.module.css"
import "animate.css"

const Home = () => {
    return ( 
        <div className={HomeStyle.Home}>
            <h1 className="animate__animated animate__slideInLeft">Carlani</h1>
        </div>
     );
}

export default Home;