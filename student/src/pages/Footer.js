import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-4 ">
                  <div className="infoma">
                     <h3>Contact Us</h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i>Locations
                        </li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i>Call +01 1234567890</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="row border_left">
                     <div className="col-md-12">
                        <div className="infoma">
                           <h3>Newsletter</h3>
                           <form className="form_subscri">
                              <div className="row">
                                 <div className="col-md-12">
                                 </div>
                                 <div className="col-md-4">
                                    <input className="newsl" placeholder="Enter your number" type="text" name="Enter your email" />
                                 </div>
                                 <div className="col-md-4">
                                    <input className="newsl" placeholder="Enter your email" type="text" name="Enter your email" />
                                 </div>
                                 <div className="col-md-4">
                                    <button className="subsci_btn">subscribe</button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-md-9">
                        <div className="infoma">
                           <h3>Useful Link</h3>
                           <ul className="fullink">
                              <li><a href="/">Home</a></li>
                              <li><a href="/about">About</a></li>
                              <li><a href="/skating">Skating</a></li>
                              <li><a href="/shop">Shop</a></li>

                           </ul>
                        </div>
                     </div>
                     <div className="col-md-3">
                        <div className="infoma text_align_left">
                           <ul className="social_icon">
                              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <p>© 2024 All Rights Reserved. Design by <samp> Muralitharan01</samp></p>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Footer;
