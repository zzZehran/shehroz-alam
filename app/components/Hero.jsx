import styles from "./hero.module.css";
import Link from "next/link";
export default function Hero({ title, navigation }) {
  return (
    <div className="about_hero container-fluid p-0">
      <div className={`${styles.img_container}`}>
        <div className={`${styles.hero_overlay}`}>
          <h2>{title}</h2>
          <p>
            <i className="bi bi-house-door-fill"></i>
            <Link href={"/"} className="text-decoration-none text-white">
              Home
            </Link>
            {" > "}
            {navigation}
          </p>
        </div>
      </div>
    </div>
  );
}
