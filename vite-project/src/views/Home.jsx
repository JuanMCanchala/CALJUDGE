import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <div className="text-content">
          <h1>Welcome to Our Platform</h1>
          <p>
            Join a community of enthusiasts and professionals. Stay updated on the latest techniques and technologies. Discover a huge repository of models, data, and code for your next project.
          </p>
          <div className="register-buttons">
            <Link to="/register" className="register-button google-button">
              Register with Google
            </Link>
            <Link to="/register" className="register-button email-button">
              Register with Email
            </Link>
          </div>
        </div>
        <div className="image-content">
          <img src="https://via.placeholder.com/300x200" alt="Community Illustration" />
        </div>
      </section>

      <section className="info-section">
        <h2>Why Join Us?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <p>Explore new projects, collaborate with others, and sharpen your skills.</p>
        <p>Access to hundreds of datasets, competitions, and tutorials.</p>
      </section>
    </div>
  );
};

export default Home;
