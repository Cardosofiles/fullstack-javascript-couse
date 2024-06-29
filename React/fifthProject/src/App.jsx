import Title from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import Paragraph from "./components/Paragraph";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Paragraph />
    </div>
  );
}
