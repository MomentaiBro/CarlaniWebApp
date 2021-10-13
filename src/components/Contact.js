import '../modules/Contact.module.css'


const Contact = () => {




    return ( 

        <div id="contact">
            <h1>Contact Us</h1>
            <form class="cf">
                <div class="half left cf">
                    <input type="text" id="input-name" placeholder="Name"/>
                    <input type="email" id="input-email" placeholder="Email address"/>
                    <input type="text" id="input-subject" placeholder="Subject"/>
                </div>
                <div class="half right cf">
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                </div>  
                    <input type="submit" value="Submit" id="input-submit"/>
            </form>
        </div>

     );
}
 
export default Contact;