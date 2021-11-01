import "../App.css"
import HomeStyle from "../modules/Home.module.css"

const ReturnHome = () => {
    return (
        <div className={HomeStyle.return}>
            <a href="/">Carlani</a>
        </div>
    )
};

export default ReturnHome;