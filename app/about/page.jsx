import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import Hero from "../components/Hero";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero title="About Me" navigation={"About Me"} />
      <div className={`${styles.about_info} container my-5`}>
        <div className="row justify-content-center py-5">
          <div className="col-10 col-lg-8">
            <h6>
              I see you looking around … Welcome! As you know by now, my name is
              Shehroz Alam. Proud Kashmiri born in a family of entrepreneurs,
              father to the wildest cat in the world. A Commerce graduate,
              turned Fitness Coach, Sports Nutritionist, Powerlifter, Men's
              Physique Athlete and an Enterpreneur.
            </h6>
          </div>
        </div>
        <div className="row px-lg-5 mt-5">
          <div className="col-lg-6">
            <article>
              <header>
                <h1>
                  About Shehroz Alam — Certified Fitness Coach & Personal
                  Trainer
                </h1>
                <p>
                  Helping individuals across Kashmir, Delhi, and beyond achieve
                  lasting fat loss, muscle gain, and metabolic health
                  transformations.
                </p>
              </header>

              <section>
                <h2>My Journey: From Srinagar to Fitness Coaching</h2>
                <p>
                  Growing up in a middle-class family in Srinagar, Kashmir — a
                  city often affected by lockdowns and curfews, I developed a
                  passion for strength and fitness early on. Determined to avoid
                  bullying, I began daily workouts right in my bedroom, doing
                  push-ups, pull-ups, and sit-ups.
                </p>
                <p>
                  Encouraged by my mother, I gradually expanded my home workouts
                  by adding resistance, even as gyms remained shut due to
                  frequent curfews. Like many small-town boys with big dreams, I
                  moved to Delhi to pursue my education, enrolling in B.Com at
                  Jamia Millia Islamia (though I never collected the degree!).
                </p>
                <p>
                  My real calling came when I enrolled in the Diploma in
                  Personal Training at K11 School of Fitness Sciences. That's
                  where I discovered my true passion: not only transforming my
                  own physique but helping others achieve their fitness and
                  nutrition goals.
                </p>
              </section>

              <section>
                <h2>About Shehroz Alam Fitness & Nutrition</h2>
                <p>
                  Shehroz Alam Fitness & Nutrition is a science-backed platform
                  offering customized fitness programs, personalized nutrition
                  coaching, and expert education that's already helped hundreds
                  transform their bodies and health.
                </p>
                <p>
                  My clients experience remarkable results, from fat loss and
                  muscle gain to reversing chronic metabolic disorders like
                  Type-II Diabetes, high triglycerides, elevated cholesterol,
                  and even improving PCOS symptoms.
                </p>
                <p>
                  As a certified fitness coach and personal trainer, I provide
                  1-on-1 personal training, online coaching, structured
                  nutrition plans, and specialized workshops on powerlifting and
                  Olympic lifting, all tailored to fit your unique needs.
                </p>
              </section>

              <section>
                <h2>Join My Coaching Community</h2>
                <p>
                  Becoming a part of my coaching community means receiving
                  direct expert guidance, without automated replies or generic
                  programs. Every plan is customized to help you break through
                  fitness plateaus and achieve lasting, sustainable
                  transformations.
                </p>
                <p>
                  Take a look around the <strong>Programs</strong> section to
                  explore customized training options, nutrition plans, personal
                  coaching, and upcoming workshops. If you're unsure which
                  program suits you best, you can easily
                  <strong>book a free 30-minute consultation</strong> through
                  the consultation section.
                </p>
              </section>

              <aside>
                <p>
                  I personally handle all inquiries (usually while watching
                  Barclays Premier League games or catching up on Game of
                  Thrones reruns). I look forward to helping you achieve your
                  fitness goals, talk soon!
                </p>
              </aside>
            </article>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <section>
              <h2>Certifications & Qualifications</h2>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Master Trainer” from K11 School of Fitness Sciences
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Diploma in Personal Trainer” from K11 School of Fitness
                  Sciences
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Sports Nutrition” from K11 School of Fitness Sciences
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Personal Trainer for Special Population” from K11 School of
                  Fitness Sciences
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Foundation Course in Yoga Science for Wellness” from Morarji
                  Desai National Institute of Yoga
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  “Diploma in Nutrition and Health Education” from IGNOU
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  "M.Sc in Nutritional Science and Dietetics" from Symbiosis
                  Skills and Professional University
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  "PG Diploma in Dietetics" from Symbiosis Skills and
                  Professional University
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  J3 University Level 1 Certification
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  6 Weeks Doctor Flex Anabolic and Bodybuilding Workshop by Dr
                  Gunit
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  GSB Anabolic Steroids and Growth Hormone Workshop
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className={`${styles.vision} container-fluid p-0`}>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-8">
            <article>
              <header>
                <h2>Vision</h2>
              </header>
              <p className="mt-4 px-5 px-lg-0">
                I am on a mission to teach 10,000 people by 2024 how they can
                get stronger, shredded and correct metabolic diseases like Type
                II Diabetes, PCOS, Fatty Liver, High Triglycerides by correct
                Training and Nutrition.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
