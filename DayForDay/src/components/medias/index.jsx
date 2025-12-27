import styles from "./styles.module.css";
import { PiMoney } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";

export function CardMedias({ color, filter, title, total }) {
  return (
    <div className={styles.cardMedias}>
      <div className={styles.icons}>
        <div
          className={styles.mediaIcon}
          style={{ color: color, background: `${color}33` }}
        >
          <PiMoney />
        </div>

        {filter === true ? (
          <div className={styles.filter}>
            <IoFilterSharp />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={styles.content}>
        <span
        // style={{ color: color }}
        >
          {title}
        </span>
        <p>R$ {total}</p>
      </div>
    </div>
  );
}
