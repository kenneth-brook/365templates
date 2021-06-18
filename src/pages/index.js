import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Devices from "../images/365templates-hero_devices.jpg"
import Featured from "../images/featuredTheme-placeholde-870x870r.jpg"
import Bulb from "../images/light-bulb.png"
import HowItWorks from "../images/how-it-works.png"

const IndexPage = () => (
  <Layout>
    <div className="hero-wrapper container-fluid">
      <div className="hero-content container text-center">
        <div className="hero-content">
          <h1>Beautiful Sites.<br />No Hassle.</h1>
          <p className="hero-lead">Select your template. Deliver your content. We'll handle the rest!</p>

          <Link to="/" className="btn green-btn">Start Your Site</Link>
          <p className="hero-small">Know what you're here for?</p>
        </div>
        <img
          src={Devices}
          className="img-responsive center-block"
          alt="Computer, Laptop, Tablet, and Mobile Phone"
        />
        </div>
    </div>

    <div className="container text-center how-it-works">
      <h2 className="text-darkblue">How it <span className="text-green">works</span></h2>
      <p className="text-blue-trans col-sm-8 col-sm-offset-2">Setting up a site our templated site solution is as easy as <span className="bold">1, 2, 3!</span> We like to call <span className="bold">Select, Send, Site.</span> Take a look at the quick guide below to see how its done.</p>

      <div className="hidden-xs col-sm-12" style={{marginBottom: 40, marginTop: 40}}>
        <img src={HowItWorks} className="img-responsive center-block" alt="How it works infographic"/>
      </div>

      <div class="col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl" style={{marginBottom: 40, marginTop: 40}}>
        <ul>
          <li class="row">
            <h4 class="col-xs-1 text-green">1</h4>
            <div class="col-xs-11 text-darkblue text-left">
              <h4>Select your theme</h4>
              <p class="text-blue-trans">Browse through our library of completely custom and unique designs you won’t find anywhere else! Select the design you think works best for your business. We’ve highlighted some of the strengths of each theme to help you with your decision.</p>
            </div>
          </li>
          <li class="row">
            <h4 class="col-xs-1 text-green">2</h4>
            <div class="col-xs-11 text-darkblue text-left">
              <h4>Send your content</h4>
              <p class="text-blue-trans">After selecting your theme you’ll be prompted with a form that’s been tailored to your design asking for the content you want displayed on your site. We have this broken down this way so you are aware of and can provide the appropriate amount of text and images needed for the theme you selected.</p>
            </div>
          </li>
          <li class="row">
            <h4 class="col-xs-1 text-green">3</h4>
            <div class="col-xs-11 text-darkblue text-left">
              <h4>We build your site</h4>
              <p class="text-blue-trans">After we’ve received your content we’ll get right to work putting your site together! At this point all you have to do is sit tight until we notify you your site is live!</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-darkblue">That's all it takes!</h3>
      <p className="text-darkblue">Ready to get started?</p>
      <Link to="/" className="btn green-btn">Start Your Site</Link>
    </div>

    <div className="container-fluid featured-wrapper">
      <div className="container">
        <div className="row content">
          <div className="col-xs-12 col-sm-6">
            <img
              src={Featured}
              className="img-responsive"
              alt="Thumbnail of the featured theme"
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h2 className="text-darkblue">Featured <span className="text-white">Theme</span></h2>
            <h3 className="text-white">Business</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="text-white">
              <li>Photo Gallery</li>
              <li>Contact Form</li>
              <li>Portfolio</li>
            </ul>
            <Link to="/" className="btn blue-btn">See More Info</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="container benefits">
      <div className="col-xs-12 col-sm-6">
        <h2 className="text-darkblue">The <span className="text-green">Benefits</span></h2>
        <p className="text-blue-trans">We could go on forever about the benefits of one of our beautiful site options but we know you have a business to run so we’ll just  name a few. Our sites are designed in-house so there’s not 1,000 other people already using the design you like, giving you a more unique presence on the web.</p>
        <ul className="text-darkblue">
          <li>Affordable</li>
          <li>World-class Designs</li>
          <li>Fast Load Time</li>
          <li>Mobile Responsive</li>
          <li>Easy maintenance</li>
          <li>Personable Support</li>
        </ul>
      </div>
      <div className="col-xs- 12 col-sm-6">
        <img 
          src={Bulb}
          className="img-responsive col-xs-8 col-xs-offset-2 col-sm-offset-1"
          alt="Light bulb graphic"
        />
      </div>
    </div>

    <div className="container we-handle-everything">
      <h2 className="text-darkblue text-center">We Handle <span className="text-green">Everything</span> <span className="text-small hidden-xs">(almost)</span></h2>
      <p className="col-sm-8 col-sm-offset-2 text-center text-blue-trans">Building a website can be a daunting task that not everyone has the time to deal with.That’s why we take care of all of it for you! We handle the tough stuff so you don’t have to. We’ll purchase your domain name, set up your server, and make sure your content is optimized for peak web performance so you can focus on running your business to its best.</p>
      <ul className="text-darkblue col-xs-12 text-center">
        <li>Server Setup and Configuration</li>
        <li>Image and Content Optimization</li>
        <li>Site Development and Deployment</li>
        <li>Search Engine Optimization</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
