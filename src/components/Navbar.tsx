import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect, useCallback } from 'react';

const LanguageDropdown = ({ language, setLanguage }: { language: string; setLanguage: (lang: string) => void }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.languageDropdown} onClick={() => setShowDropdown(!showDropdown)}>
      <span>{language}</span>
      {showDropdown && (
        <div className={styles.dropdownContent}>
          <span onClick={() => { setLanguage('EN'); setShowDropdown(false); }}>EN</span>
          <span onClick={() => { setLanguage('VN'); setShowDropdown(false); }}>VN</span>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [language, setLanguage] = useState('EN');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>
        <span>WOWUP</span>
        <Link href="/" className={styles.link}>Dịch vụ</Link>
        <Link href="/about" className={styles.link}>Dự án</Link>
        <Link href="/contact" className={styles.link}>Bài viết</Link>
      </div>
      <div className={styles.right}>
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        <button className={styles.transparentButton}>Hồ sơ công ty</button>
        <button className={styles.whiteButton}>Liên hệ</button>
      </div>
    </nav>
  );
};

export default Navbar;
