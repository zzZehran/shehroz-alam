import Image from "next/image";
import Link from "next/link";
import styles from "./program.module.css";
export default function Program({
  programImageName,
  programName,
  showPrice,
  programInfo,
}) {
  return (
    <div className={`${styles.program_container} container`}>
      <div className="row my-5 justify-content-evenly">
        <div className={`${styles.img_container} col-lg-5`}>
          <Image
            src={`/programs/${programImageName}.jpg`}
            fill={true}
            alt="Image of a pan containing various food items including egg whites, egg yolks and spices"
          ></Image>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0">
          <h1>“{programName}”</h1>
          {showPrice && (
            <>
              <h4 className="mt-4">
                ₹2,000
                <span
                  className={`${styles.strike_through} ms-3 position-relative`}
                >
                  ₹5,000
                  <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    60% <br />
                    OFF
                    <span className="visually-hidden">60% OFF</span>
                  </span>
                </span>
              </h4>
              <button className="px-4 py-2 mt-3">
                <Link
                  href={"https://rzp.io/rzp/Rfwhtww"}
                  className="text-decoration-none text-white"
                >
                  BOOK NOW
                </Link>
              </button>
            </>
          )}
          {!showPrice && (
            <button className="px-4 py-2 mt-3">
              <Link
                href={"https://rzp.io/rzp/Rfwhtww"}
                className="text-decoration-none text-white"
              >
                GET QUOTE
              </Link>
            </button>
          )}
          <p className={`${styles.program_info} mt-5`}>{programInfo}</p>
        </div>
      </div>
    </div>
  );
}
