import GradientButton from "./components/GradientButton";

export default function HomePage() {
  return (
    <>
      <main className="relative flex h-screen flex-col items-center justify-between p-24 ">
        <section>
          <h2 className="text-7xl font-bold text-white">
            You <span className="text-blue-500">submit</span> we
            <span className="text-green-500"> collect</span>
          </h2>
          <p className="text-white text-center mt-4">
            DataCollector is a new innovative way to get your data and show it
            to you!
          </p>
          <div className="flex justify-center items-center mt-6">
            <GradientButton text="Get Started" path="/sign-in" />
          </div>
        </section>
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,69.3C672,85,768,171,864,186.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </main>
    </>
  );
}
