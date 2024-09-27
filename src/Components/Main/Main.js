import React from 'react';
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Testimonial from '../Testimonials/Testimonial';
import { Footer } from '../Footer/Footer';

export const Main = () => {
  return (
    <div>
        <section className="hero bg-primary text-white text-center py-5"
         style={{
            backgroundImage: "url('jobhun.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh"
        }}
        >
         <div className="container">
            <h1 className='text'>Welcome to JobHunt</h1>
            <p className='text1'>Your gateway to finding the perfect job or hiring top talent.</p>
            <a href="#jobListings" className="btn btn-light btn-lg">Explore Jobs</a>
    </div>
        </section>

        <section className='search'>
          <div className='containers'>
            <h2 className='h2'>Find the Perfect Job for you</h2>
            <form className='searchForm'>
              <input type='text' placeholder='Job Title or Keyword' />
              <input type='text' placeholder='Location' />
              <select>
                <option>Job Type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
              </select>
              <button type='submit' className='btn1'>Search</button>
            </form>
          </div>
        </section>

        <section className='listings'>
            <div className='listingContainer'>
              <h3 className='h3'>Job Listings</h3>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="dunn.jpg" class="d-block w-100" alt="" />
            <div className="carousel-caption d-md-block">
                <h5 className='hiring'>We Are Hiring</h5>
                <p className='position'>A software Engineer (java)</p>
                <h6 className='company'>Ericccson Ltd</h6>
                <button className='button'>View All Jobs</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src="grahm.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-md-block">
                <h5 className='hiring'>We Are Hiring</h5>
                <p className='position'>A Data Analyst.</p>
                <h6 className='company'>Data Scholkg</h6>
                <button className='button'>View All Jobs</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src="Men.jpg" class="d-block w-100" alt="men" />
            <div className="carousel-caption  d-md-block">
                <h5 className='hiring'>We Are Hiring</h5>
                <p className='position'>Technical Writer.</p>
                <h6 className='company'>Techniz</h6>
                <button className='button'>View All Jobs</button>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </section>
          <Testimonial />
        <section>
          <Footer />
        </section>

    </div>
  )
}
