import NavBar from "./NavBar";
import ReturnHome from "./ReturnHome";
import HomeStyle from "../modules/Home.module.css"

const Home = () => {
    return ( 
        <div className={HomeStyle.Home}>
            <ReturnHome/>
            <NavBar/>
        </div>
     );
}

export default Home;