import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="rise-up">Rise Up In Life</h1>
        <p className="motivation">
          I have created this because I believe I am missing my life goal. This
          is my journey to rise up and achieve what I am destined for.
        </p>
        <div className="quotes-section">
          Work like hell. You just have to put in 80 to 100 hour weeks every
          week. This improves the odds of success. If others are putting in 40
          hour work weeks and you’re putting in 100 hour work weeks, then even
          if you’re doing the same thing, you will achieve in 4 months what it
          takes them a year.
        </div>
      </div>
      <div className="image-gallery">
        <img
          src="https://cdn.magicdecor.in/com/2023/10/23170635/Ask-Yourself-Motivational-Wallpaper-for-Wall-710x488.jpg"
          alt="Motivation"
        />
        <img
          src="https://as1.ftcdn.net/jpg/05/25/05/78/1000_F_525057872_dpbuZV9KIFcs7uhrDDlfJKtyws3PXUQE.jpg"
          alt="Growth"
        />
        <img
          src="https://spiritualquotes.in/wp-content/uploads/2023/04/20-5-1024x1024.jpg"
          alt="Determination"
        />
        <img
          src="https://storage.needpix.com/rsynced_images/accomplish-1136863_1280.jpg"
          alt="Achievement"
        />
      </div>
      <div className="content-blocks">
        <div className="block">
          Take control of your destiny by setting clear goals.
        </div>
        <div className="block">
          Never give up on your dreams, no matter how hard it gets.
        </div>
        <div className="block">
          Consistency and hard work will lead to success.
        </div>
        <div className="block">
          Every failure is a lesson leading to a greater victory.
        </div>
        <div className="block">Believe in yourself and take action today!</div>
        <div className="block">
          Your future self will thank you for your efforts now.
        </div>
        <div className="block">
          Surround yourself with positivity and growth-minded people.
        </div>
        <div className="block">Stay disciplined and keep moving forward.</div>
      </div>
    </div>
  );
};

export default Home;
