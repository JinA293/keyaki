import styles from "./index.module.css";

type Props = {
    message: string
}       
export default function CategoryButton ({ message }: Props) {
    return (
        <button className={styles.categoryButton}>{message}</button>
    );
}