import HomeStyle from "../modules/Home.module.css"
import "animate.css"
import Logo from "./Logo";

const Home = () => {

    return ( 
        <div className={`${HomeStyle.Home} shimmer`}>
            <Logo />
        </div>
     );
}

export default Home;