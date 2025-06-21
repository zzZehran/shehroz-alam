import Footer from "@/app/(components)/Footer";
import Hero from "@/app/(components)/Hero";
import Navbar from "@/app/(components)/Navbar";
import Program from "@/app/(components)/Program";
import Testimonials from "@/app/(components)/Testimonials";
import styles from "./page.module.css";
import Image from "next/image";

export default function page() {
  const programInfo = `Your diabetes diet is simply a healthy-eating plan that will help
            you keep your blood glucose in normal range. A diabetes diet simply
            means eating the healthiest foods which don't spike your blood
            glucose. Diabetes is caused by our bodies insulin response to
            chronic overconsumption of sugar and that the best and most natural
            way to reverse the disease is to reduce consumption of those foods
            which causes insulin spike.`;
  return (
    <>
      <Navbar />
      <Hero
        title={"Programs"}
        navigation={"Reverse Type 2 Diabetes Programs"}
      />
      <Program
        programImageName={"diabetes"}
        programName={"Reverse Type 2 Diabetes Programs"}
        showPrice={false}
        programInfo={programInfo}
      />
      <div className={`${styles.diabetes} container my-5`}>
        <div className="row justify-content-evenly">
          <div className="col-lg-5">
            <h2 className={`${styles.quote}`}>
              “Reverse Type II Diabetes and live a Medicine Free Life again.”
            </h2>
          </div>
          <div
            className={`${styles.yt_container} col-lg-5 d-flex justify-content-center`}
          >
            <iframe
              src="https://www.youtube.com/embed/HZFT6rJDPQk"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
        <div className={`${styles.diabetes_info} row mt-5`}>
          <div className="col-lg-6">
            <section>
              <header>
                <h1>Why Medicines Are Not the Answer</h1>
              </header>
              <p>
                Diabetic medications are expensive, invasive, and only hide the
                blood glucose by cramming it into the already engorged cells.
                They do nothing to reverse diabetes — because you can’t use
                drugs or devices to cure a dietary disease. The medicines make
                diabetes appear better, but actually it worsens over time.
              </p>
              <p>
                There is also the stark reality that most medical associations
                today are significantly funded by pharmaceutical and device
                companies, which have no interest in a dietary solution to
                disease. Indeed, a nutritional fix that reverses disease and
                ends the need for medication puts them squarely out of business.
              </p>
              <p>
                Only diet and lifestyle changes — not medications — will reverse
                this disease, simply because type 2 diabetes is largely a
                dietary disease. No amount of medication prevents the heart
                attacks, congestive heart failure, strokes, kidney failure,
                amputations, and blindness that result when diabetes worsens.
              </p>

              <header>
                <h2>Why Do You Need to Develop a Healthy-Eating Plan?</h2>
              </header>
              <p>
                <strong>
                  Type 2 diabetes affects every organ in the body.
                </strong>
                What happens when excessive glucose piles up in the body over
                10-20 years? Every cell in the body starts to rot, which is
                precisely why type 2 diabetes, unlike virtually any other
                disease, affects every single organ:
              </p>
              <ul>
                <li>Your eyes rot, and you go blind.</li>
                <li>Your kidneys rot, and you need dialysis.</li>
                <li>
                  Your heart rots, and you get heart attacks and heart failure.
                </li>
                <li>Your brain rots, and you get Alzheimer’s disease.</li>
                <li>
                  Your liver rots, and you get fatty liver disease and
                  cirrhosis.
                </li>
                <li>Your legs rot, and you get diabetic foot ulcers.</li>
                <li>Your nerves rot, and you get diabetic neuropathy.</li>
              </ul>
              <p>
                No part of your body is spared. Save yourself from these
                emotionally and financially devastating events just by
                correcting your diet.
              </p>

              <header>
                <h2>How to Reverse Type II Diabetes</h2>
              </header>
              <p>
                Type II Diabetes is reversible when we remove the foods from the
                diet which cause insulin spikes. The best part? It’s all natural
                and completely free. No drugs. No surgery. No cost. Just Correct
                Nutrition!
              </p>

              <header>
                <h2>What Does a Diabetes Diet Involve?</h2>
              </header>
              <p>It involves healthy foods such as:</p>
              <ul>
                <li>Meat</li>
                <li>Poultry</li>
                <li>Eggs</li>
                <li>Paneer</li>
                <li>Selected low-carb vegetables</li>
                <li>Avocados</li>
                <li>Other insulin-friendly foods</li>
              </ul>
              <p>
                50+ recipes in video format will be shared with you to make your
                life in the kitchen easy.
              </p>
            </section>
          </div>
          <div className="col-lg-6">
            <section>
              <header>
                <h2>What Does This Program Include?</h2>
              </header>

              <ul className={`${styles.icon_list} mt-4 p-0`}>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_salad.png"
                      height={50}
                      width={50}
                      alt="salad icon"
                    />
                  </span>
                  Nutrition Plan (Veg and Non-Veg) to Get Shredded
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_gym.png"
                      height={50}
                      width={50}
                      alt="gym weights icon"
                    />
                  </span>
                  Training Program to Increase Muscle and Strength
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_supplement.png"
                      height={50}
                      width={50}
                      alt="medicine icon"
                    />
                  </span>
                  Supplements Plan for Your Needs
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_cinema.png"
                      height={50}
                      width={50}
                      alt="video camera icon"
                    />
                  </span>
                  Video Demonstration of All Recipes to Simplify Cooking
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_training.png"
                      height={50}
                      width={50}
                      alt="stick figure lifting weights icon"
                    />
                  </span>
                  Exercise Video Demonstration with Correct Cues (Key Exercises,
                  Rep Ranges, Number of Sets, Rest Period)
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_whatsapp.png"
                      height={50}
                      width={50}
                      alt="messaging app icon"
                    />
                  </span>
                  1-on-1 Email Communication & Progress Monitoring on Facebook
                  Community Group
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_manual.png"
                      height={50}
                      width={50}
                      alt="guide manual icon"
                    />
                  </span>
                  Bonus #1: Mobility / Flexibility Guide (Video Demonstration)
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_faq.png"
                      height={50}
                      width={50}
                      alt="FAQ icon"
                    />
                  </span>
                  Bonus #2: Access to Facebook Community Group for Q&A, Form
                  Feedback, Monthly Progress Sharing, and Networking with
                  Like-Minded People
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_market.png"
                      height={50}
                      width={50}
                      alt="basket icon"
                    />
                  </span>
                  Bonus #3: Grocery Shopping List
                </li>
                <li>
                  <span className={`${styles.icon_container}`}>
                    <Image
                      src="/program_icons/content_money.png"
                      height={50}
                      width={50}
                      alt="wallet icon"
                    />
                  </span>
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

              <ul className="ps-0 mt-4">
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    Normal Blood Glucose
                  </span>
                  <br /> You'll feel your body functioning normally again.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    Reduced Medication or No Medication at All
                  </span>
                  <br /> No more unnecessary expenses on medication — Bye Bye
                  Meds!
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">Renewed Energy</span>
                  <br /> No more cat naps, extra snoozes, or frequent breaks.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    Burn Body Fat and Gain Eye-Catching Muscles
                  </span>
                  <br /> Love handles and belly fat will give way to toned
                  muscles.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">Mental Clarity</span>
                  <br /> Brain fog and lack of focus caused by poor nutrition
                  will be resolved.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">Optimal Performance</span>
                  <br /> Perform better at the gym, home, work, and everywhere
                  in life — from playing with kids to taking the stairs
                  effortlessly.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">A Leaner Look</span>
                  <br /> You'll lose not just pounds, but also inches off your
                  body.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    Sense of Pride & Accomplishment
                  </span>
                  <br /> It's time to prove the doubters wrong!
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    All Kinds of Compliments
                  </span>
                  <br /> Prepare for lots of positive comments on your
                  transformation.
                </li>
                <li className="mb-3">
                  <span className="text-warning fs-1">
                    Lifelong Healthy Habits
                  </span>
                  <br /> Build life-changing habits that will stick with you for
                  the long-haul.
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
