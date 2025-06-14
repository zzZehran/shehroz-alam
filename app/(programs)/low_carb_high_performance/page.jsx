import Footer from "@/app/(components)/Footer";
import Hero from "@/app/(components)/Hero";
import Navbar from "@/app/(components)/Navbar";
import Testimonials from "@/app/(components)/Testimonials";
import Program from "@/app/(components)/Program";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        title="Programs"
        navigation="Low Carb, High Perfomance Crash Course"
      />
      <Program
        programImageName={"carb"}
        programName={"Low Carb, High Perfomance Crash Course"}
        showPrice={true}
      />
      <Testimonials />
      <Footer />
    </>
  );
}
