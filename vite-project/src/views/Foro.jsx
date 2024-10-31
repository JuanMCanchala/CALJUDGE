// Foro.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Foro.css';

const Foro = () => {
  // Mock data to replace Redux state
  const forums = [
    {
      id: 1,
      title: "General",
      description: "Announcements, resources, and interesting discussions",
      lastPost: { time: "6 hours", user: "Amar Ahmed Hamed" },
      color: "#3498db",
      icon: "path/to/general-icon.png"
    },
    {
      id: 2,
      title: "Getting Started",
      description: "The first stop for new Kagglers",
      lastPost: { time: "9 hours", user: "Sara Pachón" },
      color: "#f1c40f",
      icon: "path/to/getting-started-icon.png"
    },
    {
      id: 3,
      title: "Product Feedback",
      description: "Tell us what you love, hate, and wish for",
      lastPost: { time: "an hour", user: "gezi" },
      color: "#e67e22",
      icon: "path/to/product-feedback-icon.png"
    },
    {
      id: 4,
      title: "Questions & Answers",
      description: "Technical advice from other data scientists",
      lastPost: { time: "5 hours", user: "Furkan Ercan" },
      color: "#2ecc71",
      icon: "path/to/questions-answers-icon.png"
    },
  ];

  return (
    <div className="foro-container">
      <h1 className="foro-title">Discussions</h1>
      <p className="foro-description">
        Discuss the Kaggle platform & machine learning topics – this includes sharing feedback, asking questions, and more.
      </p>
      <button className="your-discussions-button">Your Discussions</button>

      <div className="forums-list">
        <h2 className="forums-heading">Forums</h2>
        {forums.length > 0 ? (
          forums.map(forum => (
            <div key={forum.id} className="forum-item">
              <Link to={`/forum/${forum.id}`} className="forum-link">
                <div className="forum-icon" style={{ backgroundColor: forum.color }}>
                  <img src={forum.icon} alt={`${forum.title} icon`} />
                </div>
                <div className="forum-details">
                  <h3 className="forum-title">{forum.title}</h3>
                  <p className="forum-description">{forum.description}</p>
                  <span className="forum-post-info">
                    Last post {forum.lastPost.time} ago by {forum.lastPost.user}
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No forums available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Foro;
