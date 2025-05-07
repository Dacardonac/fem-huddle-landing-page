import './Social.scss';

const Social = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
