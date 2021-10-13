import style from '../modules/Contact.module.css'
const Contact = () => {
    return ( 

        <div>
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




        // <div className={style.contact} id="contact">
        //     <h1>Contact</h1>
        //     <div className={style.wrapper}>

        //          {/* Left side of Contact Page  */}

        //         <form id="contact-form" className={style.formHorizontal}>
        //             <div className="form-group">
        //                 <div className="col-sm-12">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="name"
        //                         placeholder="NAME"
        //                         name="name"
        //                         value=""
        //                         required
        //                     >
        //                     </input>
        //                 </div>
        //             </div>
        //             <div
        //                 className={style.formGroup}>
        //                 <div className="col-sm-12">
        //                     <input
        //                         type="email"
        //                         className="form-control"
        //                         id="email"
        //                         placeholder="EMAIL"
        //                         name="email"
        //                         value=""
        //                         required
        //                         >
        //                     </input>
        //                 </div>
        //             </div>
        //             <textarea
        //                 className="form-control"
        //                 rows="10"
        //                 placeholder="MESSAGE"
        //                 name="message"
        //                 required
        //                 >
        //             </textarea>
        //             <button
        //                 className="btn btn-primary send-btn"
        //                 id="submit"
        //                 type="submit"
        //                 value="SEND">
        //                 <div className="alt-send-btn">
        //                     <i className="fa fa-paper-plane">
        //                         <span className="send-text">SEND</span>
        //                     </i>
        //                 </div>
        //             </button>
        //         </form>

        //     {/* Right side of Contact Page  */}

        //     <div
        //     className="direct-contact-container">
        //         <ul className="contact-list">
        //             <li className="list-item">
        //                 <i className="fa fa-map-marker fa-2x">
        //                     <span className="contact-text place">City, State</span>
        //                 </i>
        //             </li>

        //             <li className="list-item"><span className="contact-text place">City, State</span><a href="#" title="give me a call"> Phone Number<span className="contact-text place"></span></a></li>

        //             <li className="list-item"><span className="contact-text place">City, State</span></li>
        //         </ul>

        //     </div>

        //     </div>

        // </div>
     );
}
 
export default Contact;