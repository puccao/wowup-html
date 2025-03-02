import { useState } from "react";
import styles from "../../styles/ExpandButton.module.css";

interface ExpandButtonProps {
  children: React.ReactNode; // Nội dung cần hiển thị khi mở rộng
}

export default function ExpandButton({ children }: ExpandButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandContainer}>
      <button onClick={() => setIsExpanded(!isExpanded)} className={styles.expandButton}>
        {isExpanded ? "−" : "+"}
      </button>
      {isExpanded && <div className={styles.content}>{children}</div>}
    </div>
  );
}
