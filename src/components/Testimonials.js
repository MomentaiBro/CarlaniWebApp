import style from "../modules/Testimonials.module.css"

const Testimonials = () => {

    const [ testimonial, setTestimonial ] = useState([
        {name: "Jane", quote: "Carlani is the BEST. I love Carlani!", image: "./img/tony-closeup.jpg"},
    ]);

const Testimonials = () => {
    return ( 
        <div 
            className={style.testimonial}
            id="testimonials"
        >
            I'm the Testimonial Page!
        </div>
     );
}
 
export default Testimonials;