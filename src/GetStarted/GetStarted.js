import { useRef, useEffect} from 'react';
import '../GetStarted/GetStarted.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const GetStarted = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const page2Ref = useRef(null);
  const navigate = useNavigate()

  const handleClick = () =>
  {
    navigate("/Signup")

  } 
  useEffect(() => {
    // Function to handle scroll animation for left content
    const handleLeftScroll = () => {
      const leftElement = leftRef.current;
      if (leftElement) {
        leftElement.style.opacity = 1;
        leftElement.style.transform = 'translateX(0)';
      }
    };

    // Function to handle scroll animat
    const handleRightScroll = () => {
      const rightElement = rightRef.current;
      if (rightElement) {
        rightElement.style.opacity = 1;
        rightElement.style.transform = 'scale(1)';
      }
    };

    // Function to handle scroll animation for boxes in page2
    const handlePage2Scroll = () => {
      const boxes = page2Ref.current.querySelectorAll('.box');
      boxes.forEach((box, index) => {
        setTimeout(() => {
          if (box) {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
          }
        }, index * 400);
      });
    };

    // Add event listener for scroll animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const leftPosition = leftRef.current?.offsetTop + leftRef.current?.offsetHeight;
      const rightPosition = rightRef.current?.offsetTop + rightRef.current?.offsetHeight;
      const page2Position = page2Ref.current?.offsetTop + page2Ref.current?.offsetHeight;

      if (scrollPosition >= leftPosition) {
        handleLeftScroll();
      }
      if (scrollPosition >= rightPosition) {
        handleRightScroll();
      }
      if (scrollPosition >= page2Position) {
        handlePage2Scroll();
      }
    };
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div class = "whole">
      <div className="home-container">
        <div id="left" ref={leftRef}>
         <h1>Split Your Bill, Not Your Friends</h1>
        </div>
      </div>
      <div class = "btn">
       <Button onClick={handleClick}>GetStarted</Button>
       </div>
      <div className="page2" ref={page2Ref}>
        <div className="box">
          <h2>Expense Splitter</h2>
          <p>Bill splitting is when a group of people share the cost of something equally or based on what each person consumes</p>
        </div>
        <div className="box">
          <h2>Add Expense</h2>
          <p>Add expense means putting in information about something you spent money on into an app or system that helps you keep track of your spending.</p>
          </div>
        <div className="box">
          <h2>Tracker</h2>
          <p>An expense tracker is like a digital notebook or app where you can note down what you spend money on.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;