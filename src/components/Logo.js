const small = 'carlanilogoant.png'
const reg = 'carlanilogo.png'

const Logo = () => {
    return(

        <img
            src="carlanilogo.png"
            srcset={`${small} 300w, ${reg} 751w`}
            alt="Carlani Logo"
            className="animate__animated animate__fadeInUp welcome"
        />
    )
};

export default Logo;