import React from 'react';
import "../styles/Skating.css";


const Skating = () => {
   return (
      <div className="class">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>Our Skating Class</h2>
                     <p>There are many variations of passages of Lorem</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 margi_bottom">
                  <div className="class_box text_align_center">
                     <i><img src="images/class1.png" alt="#" /></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <a className="read_more" href="#">Read More</a>
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="class_box blue text_align_center">
                     <i><img src="images/class2.png" alt="#" /></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <a className="read_more" href="#">Read More</a>
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="class_box text_align_center">
                     <i><img src="images/class3.png" alt="#" /></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Skating;
