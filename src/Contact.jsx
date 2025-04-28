

function Contact() {
    return (
      <div className="main-contact">
        <div className="contact">
          <h2>CONTACT US</h2>
          <h4>TELL US ABOUT YOUR PROJECT</h4>
        </div>
  
        <div className="address-det">
          <div className="address">
            <ul>
              <li>DHA PHASE 4, 142 D</li>
              <li>+92 300 1234567</li>
              <li>TECHGOAT@gmail.com</li>
            </ul>
          </div>
  
          <div className="form">
            <input className="inp-1" type="text" placeholder="Tell us about your project?" />
            <div>
              <input className="inp-2" type="text" placeholder="Name" />
              <input className="inp-2" type="text" placeholder="E-mail" />
            </div>
            <div>
              <input className="inp-2" type="text" placeholder="Phone" />
              <input className="inp-2" type="text" placeholder="Phone" />
            </div>
            <input className="inp-1" type="text" placeholder="Your Message" />
          </div> 
        </div>  
        <div className="footer"> 
          <h4>FOLLOW US</h4>
          <button>SUBMIT</button>
        </div>
        <div className="links">
          <ul>
           <li>twitter</li>
           <li>facebook</li>
           <li>linkedin</li>
           <li>instagram</li>
          </ul>
        </div>
        <div className="copy-right">
          <h4>Copy right 2025</h4>
          <h5>logo</h5>
        </div>
      </div>
    );
  }

export default Contact;