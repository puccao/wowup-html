import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";
import styles1 from "../styles/sc1.module.css";
import styles2 from "../styles/sc2.module.css";
import styles3 from "../styles/sc3.module.css";
import styles4 from "../styles/sc4.module.css";
import styles5 from "../styles/sc5.module.css";
import styles6 from "../styles/sc6.module.css";
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
        <div className={styles1.imgContainer}>
            <div className={styles1.imgWrapper}>
                <img
                    src={images[imageIndex]}
                    alt={`Image ${imageIndex + 1}`}
                    className={styles1.roundedImage}
                />
                <button className={styles1.prevButton} onClick={handlePrev}>
                    &lt;
                </button>
            </div>
            <div className={styles1.imgWrapper}>
                <img
                    src={images[(imageIndex + 1) % images.length]}
                    alt={`Image ${((imageIndex + 1) % images.length) + 1}`}
                    className={styles1.roundedImage}
                />
                <button className={styles1.nextButton} onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

const StatItem = ({ number, title, description }) => (
    <div className={styles3.sc3Item}>
        <div className={styles3.number}>{number}</div>
        <div className={styles3.sc3}>
            <div className={styles3.title}>{title}</div>
            <div className={styles3.description}>{description}</div>
        </div>
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
                <section className={styles1.sc1}>
                    <div className={styles1.textContainer}>
                        <p className={styles1.design}>THIẾT KẾ</p>
                        <p className={styles1.programming}>& LẬP TRÌNH</p>
                    </div>
                    <ImageCarousel images={images} />
                </section>

                {/* Section 2 */}
                <section className={styles2.sc2}>
                    <div className={styles2.scrollingTextContainer}>
                        <div className={styles2.scrollingText}>
                            LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING - LANDING PAGE - CMR SYSTEM - IT STAFFING - UI UX DESIGN - DEVELOPMENT CONSULTING
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section id="about" className={styles3.sc3}>
                    <div className={styles3.sc3Content}>
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>

                    <div className={styles3.sc3Layout}>
                        <div className={styles3.leftSection}>
                            <div className={styles3.experienceText}>Chúng tôi có kinh nghiệm trong</div>
                            <img src="/image3.jpg" alt="Kinh nghiệm" className={styles3.experienceImage} />
                        </div>

                        <div className={styles3.rightSection}>
                            <ServiceList />
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className={styles4.sc4}>
                    <div className={styles4.container}>
                        <div className={styles4.grid}>
                            <div className={styles4.title}>DỰ ÁN CỦA CHÚNG TÔI</div>

                            {["i1.png", "i2.png", "i3.png", "i4.png", "i5.png", "i6.png", "i7.png"].map((img, index) => (
                                <div key={index} className={styles4["col" + (index < 2 ? "6" : index === 2 ? "8" : "4")]}>
                                    <a href="/"></a>
                                    <div className={styles4.imageContainer}>
                                        <div className={styles4.imageWrapper}>
                                            <img src={`/${img}`} className={styles4.image} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles4.projectName}>{["7ESL", "Lunchwme", "AI WOW", "iTourism", "GoStream", "Xsale", "Taumi"][index]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Section 5 */}
                <section className={styles5.sc5}>
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className={styles5.wrapper}>
                            <div className={styles5.box}>
                                <img
                                    src={`/cp${index + 1}.png`}
                                    alt=""
                                    className={styles5.image}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 6 */}
                <section className={styles6.sc6}>
                    <div id="blog">
                        <div className={styles6.container_sc6}>
                            <div>
                                <div className={styles6.header_sc6}>
                                    <div className={styles6.title_sc6}>BÀI VIẾT</div>
                                    <div className={styles6.actions_sc6}>
                                        <div className={styles6.button_sc6}></div>
                                        <div className={styles6.button_sc6}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
