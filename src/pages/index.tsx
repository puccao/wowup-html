import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";
import ServiceList from "../components/ServiceList";
import { useState } from "react";

// Component hiển thị carousel ảnh
const ImageCarousel = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handlePrev = () => {
        setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
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
    );
};

const StatItem = ({ number, title, description }) => (
    <div className={styles.sc3Item}>
        <div className={styles.number}>{number}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
    </div>
);

export default function Home() {
    const images = ["/image1.jpg", "/image2.jpg"];

    const stats = [
        { number: "9", title: "Năm", description: "Có kiến thức chuyên môn sâu rộng, đa lĩnh vực về công nghệ thông tin." },
        { number: "150+", title: "Khách hàng hài lòng", description: "Cách tiếp cận chuyên nghiệp đã đáp ứng được nhu cầu của khách hàng." },
        { number: "30+", title: "Chuyên gia công nghệ", description: "Có chuyên môn kỹ thuật vững vàng và khả năng linh hoạt cao." },
        { number: "120+", title: "Dự án", description: "Những dịch vụ hoàn thiện đã được bàn giao thành công cho khách hàng." }
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Trang chủ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {/* Section 1 */}
                <section className={styles.sc1}>
                    <div className={styles.textContainer}>
                        <p className={styles.design}>THIẾT KẾ</p>
                        <p className={styles.programming}>& LẬP TRÌNH</p>
                    </div>
                    <ImageCarousel images={images} />
                </section>

                {/* Section 2 */}
                <section className={styles.sc2}>
                    <div className={styles.scrollingTextContainer}>
                        <div className={styles.scrollingText}>
                            LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING - LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className={styles.sc3}>
                    <div className={styles.sc3Content}>
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>

                    <div className={styles.sc3Layout}>
                        <div className={styles.leftSection}>
                            <div className={styles.experienceText}>Chúng tôi có kinh nghiệm trong</div>
                            <img src="/image3.jpg" alt="Kinh nghiệm" className={styles.experienceImage} />
                        </div>

                        <div className={styles.rightSection}>
                            <ServiceList />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
