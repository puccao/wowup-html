import React, { useState } from "react";
import styles from "../styles/ServiceList.module.css";
import { FaChartBar, FaUsers, FaLaptopCode, FaComment } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const iconMap = {
  chart: <FaChartBar />,
  users: <FaUsers />,
  laptop: <FaLaptopCode />,
  comment: <FaComment />
};

const services = [
  {
    title: "Thiết kế Ứng dụng di động và website",
    icon: "chart",
    content: "Phát triển các ứng dụng di động và web tiên tiến để thu hút người dùng và nâng cao sự hiện diện kỹ thuật số của doanh nghiệp bạn. Giúp doanh nghiệp bạn làm việc dễ dàng hơn, WowUp luôn mang đến cho khách hàng cơ hội trải nghiệm dịch vụ và mang lại giá trị sản phẩm đáp ứng được nhu cầu của mọi khách hàng."
  },
  { title: "Hệ thống CRM", icon: "users", content: "Tận dụng kinh nghiệm sâu rộng trong lĩnh vực chăm sóc khách hàng, WowUp cung cấp hệ thống tự động hóa việc quản lý thông tin khách hàng, hỗ trợ phân tích dữ liệu, tối ưu hóa các hình thức tiếp thị, hỗ trợ hợp tác nội bộ và tăng cường mối quan hệ với khách hàng, tất cả đều nhằm mục đích nâng cao hiệu quả kinh doanh và có được sự hài lòng của khách hàng." },
  { title: "Cho thuê nhân sự IT", icon: "users", content: "Chúng tôi cung cấp nhiều chuyên gia CNTT có kỹ năng phát triển trang web, ứng dụng di động và công nghệ phần mềm để đẩy nhanh các dự án của công ty bạn. Đội ngũ của chúng tôi thành thạo trong các ngôn ngữ lập trình phổ biến như React Native, Node.js, Next.js, PHP và Vue.js." },
  { title: "Thiết kế UI và giải pháp UX", icon: "laptop", content: "Đặt sự trải nghiệm của khách hàng lên hàng đầu, chúng tôi luôn thử nghiệm các giao diện phù hợp để tối ưu trải nghiệm người dùng nhất có thể. Tin tưởng vào WowUp, UI và UX của bạn sẽ thu hút khách hàng, tối đa hóa chuyển đổi của khách hàng trên nền tảng của bạn." },
  { title: "Tư vấn phát triển sản phẩm", icon: "comment", content: "Nếu bạn có ý tưởng phát triển công nghệ, đừng ngần ngại liên hệ WowUp ngay lập tức. Đội ngũ chuyên gia 9 năm kinh nghiệm của chúng tôi sẽ hướng dẫn bạn đến thành công. Chúng tôi sẽ nghiên cứu, phân tích và tạo ra chiến lược sản phẩm tốt nhất để tối đa hóa tiềm năng kinh doanh của doanh nghiệp bạn." },
];

const ServiceList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <div className={styles.serviceHeader} onClick={() => toggleService(index)}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon}>{iconMap[service.icon]}</span>
              <span className={styles.serviceTitle}>{service.title}</span>
            </div>
            <button className={styles.serviceExpandButton} aria-expanded={openIndex === index}>
              <IoMdAdd />
            </button>
          </div>
          <div className={`${styles.serviceContent} ${openIndex === index ? styles.show : ""}`}>
            {service.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
