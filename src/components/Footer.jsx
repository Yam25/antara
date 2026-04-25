import './Footer.css'

function Footer() {
  return (
    <footer id="footer" className="footer-items">
      <div className="footer-top">
        <div className="socials">
          <h1 className="footer-title">Antara</h1>
          <p className="footer-p">
            A space for my dreams, stories <br />
            and everything in between.
          </p>
          <div className="socials-icons">
            <a href="https://instagram.com/_yamini_iyengar_" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://github.com/Yam25/" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://linkedin.com/in/yaminiiyengar" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-explore">
          <h3 className="footer-explore-title">Explore</h3>
          <div className="footer-explore-items">
            <a href="">Places</a>
            <a href="">Hobbies</a>
            <a href="">Moments</a>
            <a href="">Growth</a>
          </div>
        </div>

        <div className="connect">
          <h3 className="connect-title">Let’s Connect ✨</h3>
          <div className="connect-items">
            <p>
              <i className="fa-solid fa-headphones"></i>
              Collab? Questions? Random thoughts at 2am? I’m listening 👀
            </p>

            <p>
              <i className="fa-solid fa-paper-plane"></i>
              yaminiiyengar10@gmail.com
            </p>

            <p>
              <i className="fa-solid fa-phone-volume"></i>
              +91 8660016378
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>

        <div className="footer-bottom-content">
          <p>© 2026 Antara. All rights reserved.</p>
          <p className="footer-tags">dream • love • experiences</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
