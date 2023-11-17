import styles from "./index.module.css";

export default function Header() {
  return (
    <div
      className={styles.title}
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <h1>Peach.Tech</h1>
    </div>
  );
}
