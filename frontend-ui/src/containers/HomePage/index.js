import React from 'react'
import './style.css';
import MenuHeader from '../../components/MenuHeader';
import { RiPlantLine } from "react-icons/ri";


/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <>
    <header>
    <RiPlantLine size="1.5em" />
    <h2>PATCH</h2>
    </header> 
    <MenuHeader />

    <div class="main">

      <div class="small-12 column">
        <section class="delivery roww">
          <div class="delivery_img-container">
            <img class="img" src="https://images.prismic.io/patch/fcdadd81-3896-41c5-876f-57ae2b8c1901_Delivery.jpg?auto=compress,format%27)%201x,url(%27https://images.prismic.io/patch/fcdadd81-3896-41c5-876f-57ae2b8c1901_Delivery.jpg?auto=compress,format%27)%202x" 
              alt="delivery img">
              </img>
          </div>
          <div class="delivery-body body">
            <h3 class="delivery-title">DELIVERING SAFELY NATIONWIDE</h3>
            <p>In light of the spread of COVID-19 we’re taking all necessary precautions to keep our customers and colleagues safe. We’ve switched to contactless delivery, and you won’t be asked to sign for your order.</p>
          </div>
        </section>
      </div>

      <div class="small-12 column">
        <section class="news roww">
          <div class="news-body body">
            <h3 class="news-title">NEW PLANT</h3>
            <p>We've just added a range of amazing plants to the Patch family. Some big, some small. Some weird, all wonderful.</p>
          </div>
          
          <img class="img" src="https://images.prismic.io/patch/0651c649-92c5-483c-b25e-7b261b02f618_Copy+of+Untitled.jpg?auto=compress,format') 1x,url('https://images.prismic.io/patch/0651c649-92c5-483c-b25e-7b261b02f618_Copy+of+Untitled.jpg?auto=compress,format"
          alt="newsimg"> 
          </img>
        </section>
      </div>

      <div class="small-12 column">
        <section class="home roww">
          <img class="img" src="https://res.cloudinary.com/patch-gardens/image/upload/c_fill,h_1600,q_auto:good,w_1600/v1/b2b/offices_for_homepage.jpg"
              alt="homeimg">
          </img>
          <div class="home-body body">
            <h3 class="home-title">PLANT FOR HOME OFFICES</h3>
            <p>Bringing plants into your home office is the easiest way to bring the space to life, and create a relaxing environment.</p>
          </div>
        </section>
      </div>

      <div class="small-12 column">
        <h2 class="heading-home text-center">Plant of the month</h2>
      </div>

      <div class="small-12 column">
        <section class="plant roww">
          <div class="plant-body body">
            <h3 class="plant-title">BIG KEN THE KENTIA PALM</h3>
            <p>Big Ken is our go to guy for getting that instant tropical vibe. He works wonders to fill a space in any room and has the ability to totally transform the space thanks to his arching fronds and architectural shadows.</p>
          </div>
          
          <img class="img" src="https://res.cloudinary.com/patch-gardens/image/upload/c_fill,h_1600,q_auto:good,w_1600/v1/products/kentia-palm-1350ac.jpg"
          alt="plantimg"> 
          </img>
        </section>
      </div>
    </div>  

      <div class="delivery-banner">
        <section class="row">
          <div class="delivery-banner_inner medium-12 small-centered">
            <img width="92" height="50" class="delivery-banner_icon" src="https://static.patchplants.com/img/icons/icon_delivery_truck.svg"> 
            </img>
            <p class="delivery-banner_text">Free standard delivery on orders over £50</p>
          </div>
        </section>
      </div>

      <div class="trust-messages">
        <div class="rows">
          <div class="small-12 small-centered column">
            <ul class="gallery unstyled-list">

              <li class="trust-message_item media media_stacked">
                <div class="media_img media_img-stacked">
                  <img width="30" height="30" src="https://static.patchplants.com/img/icons/icon-telephone.svg"></img>
                </div>
                <div class="media_body media_body-stacked">
                  <h3 class="trust-msg_heading">HELP</h3>
                  <p class="trust-msg_body">Need to get in touch?</p>
                  <p class="trust-msg_body">Just use the help widget to send a message to the team.</p>
                  <p class="trust-msg_body">Customer service opening hours:</p>
                  <p class="trust-msg_body">Monday to Sunday 9am-10pm</p>
                  <p class="trust-msg_body">Live chat is available 10am-5pm Monday to Sunday</p>
                </div>
              </li>

              <li class="trust-message_item gallery_item media media_stacked">
                <div class="media_img media_img-stacked">
                  <img width="30" height="30" src="https://static.patchplants.com/img/icons/icon-security.svg"></img>
                </div>
                <div class="media_body media_body-stacked">
                  <h3 class="trust-msg_heading">SECURITY</h3>
                  <p class="trust-msg_body">Secure payment - our systems are protected with bank-grade security. Your payment is safe with us.</p>
                </div>
              </li>

              <li class="trust-message_item gallery_item media media_stacked">
                <div class="media_img media_img-stacked">
                  <img width="30" height="30" src="https://static.patchplants.com/img/icons/icon-delivery.svg"></img>
                </div>
                <div class="media_body media_body-stacked">
                  <h3 class="trust-msg_heading">QUALITY</h3>
                  <p class="trust-msg_body">We work directly with over 40 specialist growers to bring you the best quality plants</p>
                </div>
              </li>

              <li class="trust-message_item gallery_item media media_stacked">
                <div class="media_img media_img-stacked">
                  <img width="30" height="30" src="https://static.patchplants.com/img/icons/icon-patch-promise.svg"></img>
                </div>
                <div class="media_body media_body-stacked">
                  <h3 class="trust-msg_heading">PATCH PROMISE</h3>
                  <p class="trust-msg_body">If you need advice, just get in touch - we’ll be your personal plant gurus as long as you need us. If something’s up, tell us within 30 days of delivery — we’ll sort it.</p>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

    
    
      <div class="footer">
        <span class="footer-text">© 2020 Patch Gardens Ltd</span>
      </div>
    

    </>
   )
}

export default HomePage