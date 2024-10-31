import './User.css';

const User = () => {
  return (
    <div className="user-container">
      {/* Banner Section */}
      <div className="user-banner">
        {/* Placeholder for banner image */}
      </div>

      {/* Profile Section */}
      <header className="user-header">
        <div className="profile-logo">
          {/* Placeholder for profile image */}
          <img src="path/to/profile-logo.png" alt="Profile Logo" />
        </div>
        <h1>Welcome, Satron SM!</h1>
        <p>Kaggle is the place to learn data science and build a portfolio.</p>
      </header>

      <div className="user-stats">
        <div className="user-stats-item">
          <h2>Login Streak</h2>
          <p>1 day</p>  
          <span>a new record!</span>
        </div>
        <div className="user-stats-item">
          <h2>Tier Progress</h2>
          <div className="progress-circle">0% to Contributor</div>
        </div>
        <div className="user-stats-item">
          <h2>Public Activity</h2>
          <p className="activity-dots">M T W T F S S</p>
        </div>
      </div>

      <div className="user-categories">
        <div className="category">
          <h3>Datasets</h3>
          <p>0 total created</p>
        </div>
        <div className="category">
          <h3>Notebooks</h3>
          <p>0 total created</p>
        </div>
        <div className="category">
          <h3>Competitions</h3>
          <p>0 total joined</p>
        </div>
        <div className="category">
          <h3>Discussions</h3>
          <p>0 total posted</p>
        </div>
        <div className="category">
          <h3>Courses</h3>
          <p>0 total completed</p>
        </div>
      </div>

      <div className="suggestions">
        <h2>How to start: Choose a focus for today</h2>
        <p>Help us make relevant suggestions for you</p>
        <div className="suggestion-cards">
          <div className="card">Suggestion 1</div>
          <div className="card">Suggestion 2</div>
          <div className="card">Suggestion 3</div>
        </div>
      </div>
    </div>
  );
};

export default User;
