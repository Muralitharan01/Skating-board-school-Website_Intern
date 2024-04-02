import React from 'react';
import "../styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container-fluid">
        <div className="row d_flex d_grid">
          <div className="col-md-7">
            <div className="shop_img text_align_center" data-aos="fade-right">
              <figure><img className="img_responsive" src="images/shop.png" alt="#"  height={800}/></figure>
            </div>
          </div>
          <div className="col-md-5 order_1_mobile">
            <div className="titlepage text_align_left ">
              <h1>Our  Skate <br />Shop</h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns
              </p>
              <a className="read_more" href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
