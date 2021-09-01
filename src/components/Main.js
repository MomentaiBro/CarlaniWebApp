import image from '../img/clean.jpg'

const Main = () => {
    return (  
        <div className="Main">
        Main
        { Image }
        </div>
    );
}

const Image = () => {
    return (
        <div className="Image">
            <img src={require('../img/clean.jpg')} alt="image" height={300} width={300}/>
        </div>
    )
}

 
export default Main;