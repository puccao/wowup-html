import styles from "../styles/Footer.module.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const SocialIcons = () => (
  <div className={styles.socialIcons}>
    {[
      { icon: <FaLinkedinIn />, href: "#" },
      { icon: <FaFacebookF />, href: "#" },
      { icon: <SiZalo />, href: "#" },
    ].map((item, index) => (
      <a key={index} href={item.href} className={styles.socialIcon}>
        {item.icon}
      </a>
    ))}
  </div>
);

const ContactInfo = () => (
  <div className={styles.info}>
    {[
      { label: "Email:", value: "sale@wowup.vn", link: "mailto:sale@wowup.vn" },
      { label: "Điện thoại:", value: "(+84)818 990 465", link: "tel:+84818990465" },
      {
        label: "Trụ sở chính:",
        value: "Số 75A Minh Khai, phường Lê Mao, thành phố Vinh, Nghệ An",
        link: "https://maps.app.goo.gl/your_map_link",
      },
    ].map((item, index) => (
      <div key={index} className={styles.infoRow}>
        <span>{item.label}</span>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.value}
        </a>
      </div>
    ))}
  </div>
);

const NavigationLinks = () => (
  <div className={styles.links}>
    {[
      { name: "Trang chủ", href: "/" },
      { name: "Dịch vụ", href: "/services" },
      { name: "Dự án", href: "/projects" },
    ].map((link, index) => (
      <a key={index} href={link.href} className={styles.link}>
        {link.name}
      </a>
    ))}
  </div>
);

const ContactForm = () => (
  <div className={styles.contactForm}>
    <input type="text" placeholder="Số điện thoại" className={styles.input} />
    <input type="email" placeholder="exp@gmail.com" className={styles.input} />
    <button className={styles.button}>→</button>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.wowup}>WOWUP</span>
          <ContactInfo />
          <SocialIcons />
          <NavigationLinks />
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <div className={styles.textAndFormContainer}>
              <div className={styles.textSection}>
                <h2>Chúng tôi ở đây</h2>
                <p>Cánh cửa của chúng tôi luôn mở cho một tách cà phê ngon</p>
              </div>
              <ContactForm />
            </div>
            <div className={styles.imageSection}>
              <img src="/cfcup.jpg" alt="Coffee Cup" className={styles.coffeeImage} />
            </div>
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
