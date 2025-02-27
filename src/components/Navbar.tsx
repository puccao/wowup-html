import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect, SetStateAction } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState('EN');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (lang: SetStateAction<string>) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>
        <span>WOWUP</span>
        <Link href="/" className={styles.link}>
          Dịch vụ
        </Link>
        <Link href="/about" className={styles.link}>
          Dự án
        </Link>
        <Link href="/contact" className={styles.link}>
          Bài viết
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.languageDropdown} onClick={toggleDropdown}>
          <span>{language}</span>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <span onClick={() => changeLanguage('EN')}>EN</span>
              <span onClick={() => changeLanguage('VN')}>VN</span>
            </div>
          )}
        </div>
        <button className={styles.transparentButton}>Hồ sơ công ty</button>
        <button className={styles.whiteButton}>Liên hệ</button>
      </div>
    </nav>
  );
};

export default Navbar;