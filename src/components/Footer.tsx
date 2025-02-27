import styles from '../styles/Footer.module.css';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.wowup}>WOWUP</span>
          <div className={styles.info}>
            <div className={styles.infoRow}>
              <span>Email:</span>
              <a href="mailto:sale@wowup.vn">sale@wowup.vn</a>
            </div>
            <div className={styles.infoRow}>
              <span>Điện thoại:</span>
              <a href="tel:+84818990465">(+84)818 990 465</a>
            </div>
            <div className={styles.infoRow}>
              <span>Trụ sở chính:</span>
              <a
                href="https://maps.app.goo.gl/your_map_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Số 75A Minh Khai, phường Lê Mao, thành phố Vinh, Nghệ An
              </a>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialIcon}>
              <SiZalo />
            </a>
          </div>
          <div className={styles.links}>
            <a href="/" className={styles.link}>
              Trang chủ
            </a>
            <a href="/services" className={styles.link}>
              Dịch vụ
            </a>
            <a href="/projects" className={styles.link}>
              Dự án
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <h2>Chúng tôi ở đây</h2>
            <p>Cánh cửa của chúng tôi luôn mở cho một tách cà phê ngon</p>
            <div className={styles.contactForm}>
              <input
                type="text"
                placeholder="Số điện thoại"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="exp@gmail.com"
                className={styles.input}
              />
              <button className={styles.button}>→</button>
            </div>
            <img
              src="/coffee.png"
              alt="Coffee Cup"
              className={styles.coffeeImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2024 Được thiết kế và phát triển bởi Wow Up</span>
      </div>
    </footer>
  );
};

export default Footer;