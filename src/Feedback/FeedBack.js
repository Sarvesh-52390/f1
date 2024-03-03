import React, { useState} from 'react';
import '../Feedback/FeedBack.css'
import Footer from '../Footer/Footer';
const FeedBack= () => {
  
  const [rating, setRating] = useState(null);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  }
  return (


    <div className='b'>
    <form className="container">
      <h1 className="heading">Give feedback</h1>
      <p className="para">What do you think of the issue search experience within the project?</p>
     
      <div className='feedback-level'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer', fontSize: '24px' }}
        >
          {star <= rating ? '⭐️' : '☆'}
          
        </span>
      ))}
      {rating && <p>You rated {rating} stars.</p>}
      </div>

      <div className="feedback-msg">
        <p className="para">
          What are the main reasons for your rating?
        </p>
        <textarea name="" id=""></textarea>
      </div>

      <div className="agreement">
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I may be contacted about this feedback <a href="#">Privacy Policy</a>.</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I'd like to help improve by joining the <a href="#">Reasearch Group</a>.</label>
        </div>
      </div>

      <div className="buttons">
        <a href="#" onClick={() => alert('Thanks for submitting your feedback')}>Submit</a>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default FeedBack;
