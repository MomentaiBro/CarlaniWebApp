const small = 'carlanilogoant.png'
const reg = 'Logo.png'

const Logo = () => {
    return(
        <img
            src="Logo.png"
            srcSet={`${small} 300w, ${reg} 751w`}
            alt="Carlani Logo"
            className="animate__animated animate__fadeInUp welcome logo"
        />
    )
};

export default Logo;