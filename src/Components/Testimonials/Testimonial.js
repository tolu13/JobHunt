import React from 'react';
import "./Testimonial.css";

const testimonials = [
    {
        name: 'John Doe',
        feedback: 'JobHunt Helped me find my Dream Job. The application process was smooth and seamless',
        position: 'Associate Software Engineer',
        company: 'Tech Pal',
        photo: 'img2.png'
    },
    {
        name: 'Janet alfred',
        feedback: 'We found top talent through Job Hunt. They have a friendly user interface',
        position: 'Web Developer',
        company: 'Go-Tech',
        photo: 'img1.png'
    }
]

 const Testimonial = () => {
  return (
    <section className='testimonials py-5 '>
    <div className='container'>
        <h2 className='text-center mb-4'>What Our Users Say</h2>
    </div>
    <div className='row p-1'>
        {testimonials.map((testimonial, index) =>
        <div className='col-md-12  mb-4' key = {index}>
            <div className='d-flex align-items-start'>
                <img
                  src={testimonial.photo}
                  className='img-fluid rounded-circle me-4'
                  alt={testimonial.name}
                  style={{width: '100px', height: '100px', objectFit: 'cover'}}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{testimonial.name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>{testimonial.position} at {testimonial.company}</h6>
                    <p className='card-text'>{testimonial.feedback}</p>
                    </div>
                    </div>
                    </div>
                    )}
    </div>
    </section>
  );
}
export default Testimonial;