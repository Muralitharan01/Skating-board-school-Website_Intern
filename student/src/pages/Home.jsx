import React from 'react';
import '../styles/Home.css';
import Skating from './Skating';
import About from "./About";
import Shop from "./Shop";
import "../styles/responsive.css";

const Home = () => {
  return (
    <div className='Home'>
      <div className="home_slide">
        <div className="board">
          <i><img src="images/top_icon.png" alt="#" /></i>
          <h1>
            Skating<br /> Board<br /> School
          </h1>
          <div className="link_btn">
            <a className="read_more" href="#">Read More   <span></span></a>
          </div>
        </div>
        <div className="col-md-7">
          <div className="banner_img">
            <figure><img className="img_responsive" src="images/banner_img.png" height={600} /></figure>
          </div>
        </div>

      </div>
      <div >
        <Skating />
        <About />
        <Shop />
      </div>
    </div>



  )
};

export default Home;
