import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Program from "@/app/components/Program";
import Testimonials from "@/app/components/Testimonials";

import styles from "./page.module.css";
export default function page() {
  const programInfo = `Ladies and gents, there is no stone left unturned, everything is covered, Cardio, Weight Training, Mobility, Diet, and Supplements. Meal plans are 100% personalized and tailor-made, designed according to your tastes and training goals. Each person is different and therefore, each of my diet plans is made in a unique way, based on body data, time & food availability, tastes, and goals including all nutritional information so you know what nutrients you are consuming. When you join this program, you'll get access to free consultation by me regarding diet and exercise for 1 year.`;
  return (
    <>
      <Navbar />
      <Hero title={"Programs"} navigation={"12 Week Get Lean Program"} />
      <Program
        programImageName={"lean"}
        programName={"12 Week Get Lean Program"}
        showPrice={false}
        programInfo={programInfo}
      />
      <div className={`${styles.lean_info} container`}>
        <div className="row d-flex justify-content-center my-5 text-white">
          <div className="col-lg-11">
            <section>
              <header>
                <h2>What Does This Program Include?</h2>
              </header>

              <ul>
                <li>Custom Nutrition Plan (Veg and Non-Veg) to Get Shredded</li>
                <li>Training Program to Increase Muscle and Strength</li>
                <li>Supplements Plan for Your Needs</li>
                <li>Video Demonstration of All Recipes to Simplify Cooking</li>
                <li>
                  Exercise Video Demonstration with Correct Cues (Key Exercises,
                  Rep Ranges, Number of Sets, Rest Period)
                </li>
                <li>
                  1-on-1 Email Communication & Progress Monitoring on Facebook
                  Community Group
                </li>
                <li>
                  <strong>Bonus #1:</strong> Mobility / Flexibility Guide (Video
                  Demonstration)
                </li>
                <li>
                  <strong>Bonus #2:</strong> Access to Facebook Community Group
                  for Q&A, Form Feedback, Monthly Progress Sharing, and
                  Networking with Like-Minded People
                </li>
                <li>
                  <strong>Bonus #3:</strong> Grocery Shopping List
                </li>
                <li>
                  100% Money-Back Guarantee: If you're not satisfied, simply
                  email your concern and my team will refund the full amount.
                </li>
              </ul>

              <header>
                <h2>The Process</h2>
              </header>

              <p>
                As soon as you check out, you're signed up. A questionnaire will
                be sent to your email address. Fill it up and submit. Once I
                have your personal information and starting pictures, please
                allow 1-3 days to create your custom-tailored plan.
              </p>
              <p>
                Many people rush, but remember, perfection takes time. Once your
                plan is ready, put in the work and stay in touch via Email,
                WhatsApp, or Facebook group. I'll monitor your progress and make
                adjustments as needed.
              </p>

              <header>
                <h2>What You Can Expect After 12 Weeks Transformation</h2>
              </header>

              <ul>
                <li>
                  <strong>Normal Blood Glucose:</strong> You'll feel your body
                  functioning normally again.
                </li>
                <li>
                  <strong>Reduced Medication or No Medication at All:</strong>{" "}
                  No more unnecessary expenses on medication — Bye Bye Meds!
                </li>
                <li>
                  <strong>Renewed Energy:</strong> No more cat naps, extra
                  snoozes, or frequent breaks.
                </li>
                <li>
                  <strong>Burn Body Fat and Gain Eye-Catching Muscles:</strong>{" "}
                  Love handles and belly fat will give way to toned muscles.
                </li>
                <li>
                  <strong>Mental Clarity:</strong> Brain fog and lack of focus
                  caused by poor nutrition will be resolved.
                </li>
                <li>
                  <strong>Optimal Performance:</strong> Perform better at the
                  gym, home, work, and everywhere in life — from playing with
                  kids to taking the stairs effortlessly.
                </li>
                <li>
                  <strong>A Leaner Look:</strong> You'll lose not just pounds,
                  but also inches off your body.
                </li>
                <li>
                  <strong>Sense of Pride & Accomplishment:</strong> It's time to
                  prove the doubters wrong!
                </li>
                <li>
                  <strong>All Kinds of Compliments:</strong> Prepare for lots of
                  positive comments on your transformation.
                </li>
                <li>
                  <strong>Lifelong Healthy Habits:</strong> Build life-changing
                  habits that will stick with you for the long-haul.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </>
  );
}
