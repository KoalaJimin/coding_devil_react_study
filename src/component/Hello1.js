import World from "./World";
import styles from "./Hello1.module.css";

const Hello1 = function () {
  return (
    <div>
      <p style={
        {
          color: 'red',
          backgroundColor: 'green',
        }
      }>Hello</p>
      <World />
      <div className={styles.box}>Hello</div>
    </div>
  );
};

export default Hello1;