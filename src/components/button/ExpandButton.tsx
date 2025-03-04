import { useState } from "react";
import styles from "../../styles/ExpandButton.module.css";

interface ExpandButtonProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandButton({ title, children }: ExpandButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandContainer}>
      {/* Tiêu đề và nút + cùng một hàng */}
      <div className={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
        <span className={styles.title}>{title}</span>
        <button className={styles.expandButton}>
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      {/* Nội dung hiển thị phía dưới */}
      <div className={`${styles.content} ${isExpanded ? styles.show : ""}`}>
        {children}
      </div>
    </div>
  );
}
