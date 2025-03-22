import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
  return (
    <div className={styles.page}>
      <Content/>
    </div>
  );
}
