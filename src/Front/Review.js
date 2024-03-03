import React from 'react'
import { useState,useEffect} from 'react';
import '../Front/Review.css'
const Review = () => {

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const testimonials = [
        {
          name: 'Miyah Myles',
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          text:"...Solves hell lot of unnecessary stress and helps take care of money matters very conveniently… "
        },
        {
          name: 'Swathi Mishra',
          photo: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=',
          text:"..it has the option to validate the expense incurred by others as well. Kudos team!"
        },
        {
          name: 'Rakhina',
          photo: 'https://randomuser.me/api/portraits/women/44.jpg',
          text: "Easy to use. Simplified UI and the payment flow is swift. Highly recommend for managing trips and household expenses!"
        },
        {
          name: 'Justina duffer',
          photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
          text:"Offers great flexibility to split bills. Highlights are the payments & group summary feature.. "
        },
        // Add more testimonial objects as needed
      ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const { name, position, photo, text } = testimonials[testimonialIndex];

  return (
      <div className='entire'>
        <h1 className='functionality'>
            What are our users saying?
        </h1>
        <div className="testimonial-container">
      <div className="progress-bar"></div>
      <div className="fas fa-quote-right fa-quote"></div>
      <div className="fas fa-quote-left fa-quote"></div>
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt="user" className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <p className="role">{position}</p>
        </div>
      </div>
    </div>

        </div>
  )
}

export default Review