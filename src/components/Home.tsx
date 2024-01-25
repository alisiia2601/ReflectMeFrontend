import React from 'react';
import { Outlet } from 'react-router-dom';
import Card from './Card';
import FeatureCard from './FeatureCard';
import classes from './Home.module.css';

const Home: React.FC = () => {
  const cardData = [
    {
      title: 'Welcome to ReflectMe!',
      subtitle: 'Your platform for thoughtful reflections and vibrant discussions.',
      content:
        'Empower your thoughts, connect with the community, and share your ideas. ReflectMe is your platform for meaningful discussions.',
    },
    {
      title: 'Explore Topics',
      subtitle: 'Dive into a diverse range of topics',
      content:
        'Discover and explore a wide variety of topics, from technology and science to arts and culture. Engage in conversations and broaden your perspectives.',
    },
    {
      title: 'Create Compelling Posts',
      subtitle: 'Share your insights with the world',
      content:
        'Craft compelling posts to share your experiences, insights, and thoughts. Connect with like-minded individuals and make your voice heard.',
    },
    {
      title: 'Connect with the Community',
      subtitle: 'Build connections and join discussions',
      content:
        'Join discussions, participate in conversations, and build connections with a vibrant community. ReflectMe is a space for meaningful interactions.',
    },
  ];

  const featureCardsData = [
    {
      title: 'Share Your Ideas',
      description: 'Post your unique ideas and concepts for others to explore and engage with.',
      icon: '🚀',
    },
    {
      title: 'Receive Feedback',
      description: 'Get valuable feedback from the community to refine and improve your ideas.',
      icon: '👂',
    },
    {
      title: 'Connect with Others',
      description: 'Join a vibrant community of thinkers and collaborators who share your passions.',
      icon: '🤝',
    },
  ];

  return (
    <>
      <div className={classes.content}>
      <video
          className={classes['video-background']}
          autoPlay
          muted
          loop
          poster="/video-poster.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className={classes.appName}>ReflectMe</h1>

       
        <div className={classes.cardsContainer}>
          {cardData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>

      
        <div className={classes.featureCardsContainer}>
          {featureCardsData.map((data, index) => (
            <FeatureCard key={index} {...data} />
          ))}
        </div>

       
        <p className={classes.explanationText}>
          Welcome to ReflectMe, a platform for sharing and exploring creative ideas.
          Whether you're a registered user or a visitor, feel free to contribute your thoughts!
        </p>

        
        <form className={classes.ideaForm}>
          <label htmlFor="idea">Share Your Creative Idea:</label>
          <textarea id="idea" name="idea" rows={4} required /> 
          
          <label htmlFor="email">Your Email (required):</label>
          <input type="email" id="email" name="email" required /> 
          
          <button type="submit">Submit</button>
        </form>
        <p className={classes.noteText}>
          Note: After receiving your idea, we will contact you via the provided email.
        </p>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
