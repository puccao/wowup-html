import ExpandButton from "../components/button/ExpandButton";
import styles from "../styles/ServiceList.module.css";

const services = [
  {
    title: "Thiết kế Ứng dụng di động và website",
    content:
      "Phát triển các ứng dụng di động và web tiên tiến để thu hút người dùng và nâng cao sự hiện diện kỹ thuật số của doanh nghiệp bạn...",
  },
  {
    title: "Hệ thống CRM",
    content:
      "Tận dụng kinh nghiệm sâu rộng trong lĩnh vực chăm sóc khách hàng, WowUp cung cấp hệ thống tự động hóa việc quản lý thông tin khách hàng...",
  },
  {
    title: "Cho thuê nhân sự IT",
    content:
      "Chúng tôi cung cấp nhiều chuyên gia CNTT có kỹ năng phát triển trang web, ứng dụng di động và công nghệ phần mềm để đẩy nhanh các dự án...",
  },
  {
    title: "Thiết kế UI và giải pháp UX",
    content:
      "Đặt sự trải nghiệm của khách hàng lên hàng đầu, chúng tôi luôn thử nghiệm các giao diện phù hợp để tối ưu trải nghiệm người dùng...",
  },
  {
    title: "Tư vấn phát triển sản phẩm",
    content:
      "Nếu bạn có ý tưởng phát triển công nghệ, đừng ngần ngại liên hệ WowUp ngay lập tức. Đội ngũ chuyên gia 9 năm kinh nghiệm của chúng tôi sẽ hướng dẫn...",
  },
];

export default function ServiceList() {
  return (
    <div className={styles.container}>
      {services.map((service) => (
        <ExpandButton key={service.title} title={service.title}>
          {service.content}
        </ExpandButton>
      ))}
    </div>
  );
}
