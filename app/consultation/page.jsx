import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BookingTable from "../components/bookingTable";
import styles from "./page.module.css";
export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"Consulation"} navigation={"Consulation"} />
      <div
        className={`${styles.consultation_container} container my-5 text-center`}
      >
        <h1>REGISTER BELOW AND CHOOSE YOUR SPOT NOW.</h1>
        <p className="my-4">
          Not sure which program suits best for you? Have a one on one VIDEO
          CALL with me! During this 30 minutes session, I will clear all your
          doubts and guide you towards the program best suited for your
          needs/skills. The amount paid for the consultation call will be
          adjusted to the program you purchase
        </p>
        <h2>Personal Consultation with Shehroz 30 minutes @Rs 199</h2>
      </div>
      <BookingTable />

      <Footer />
    </>
  );
}
