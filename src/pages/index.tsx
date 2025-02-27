import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/index.module.css';
import { useState } from 'react';

export default function Home() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = ['/image1.jpg', '/image2.jpg'];

    const handlePrev = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Trang chủ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                <section className={styles.sc1}>
                    <div className={styles.textContainer}>
                        <p className={styles.design}>THIẾT KẾ</p>
                        <p className={styles.programming}>& LẬP TRÌNH</p>
                    </div>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img
                                src={images[imageIndex]}
                                alt={`Image ${imageIndex + 1}`}
                                className={styles.roundedImage}
                            />
                            <button className={styles.prevButton} onClick={handlePrev}>
                                &lt;
                            </button>
                        </div>
                        <div className={styles.imgWrapper}>
                            <img
                                src={images[(imageIndex + 1) % images.length]}
                                alt={`Image ${((imageIndex + 1) % images.length) + 1}`}
                                className={styles.roundedImage}
                            />
                            <button className={styles.nextButton} onClick={handleNext}>
                                &gt;
                            </button>
                        </div>
                    </div>
                </section>
                <section className={styles.sc2}>
                    <div className={styles.scrollingTextContainer}>
                        <div className={styles.scrollingText}>
                            LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING - LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}