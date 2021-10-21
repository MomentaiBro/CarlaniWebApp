import style from '../modules/Contact.module.css'


const Contact = () => {




    return ( 

        <div className={style.contact} id="contact">
            <div className={style.contact_H1}> 
                <h1>Contact Us</h1>
                <img
                    className={style.contactImg}
                    src="carlanilogoant.png"
                    alt="ant with a broom"
                    />
            </div>
            <form className={style.cf}>
                <div class="half left cf">
                    <input type="text" className={style.inputName} placeholder="Name"/>
                    <input type="email" id="input-email" placeholder="Email address"/>
                    <input type="text" id="input-subject" placeholder="Subject"/>
                </div>
                <div className={`${style.half} ${style.right} ${style.cf}`}>
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                </div>  
                    <input type="submit" value="Submit" id="input-submit"/>
            </form>
        </div>

     );
}
 
export default Contact;