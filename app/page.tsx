export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700">
      <section>
        <h2 className="text-6xl font-bold text-white">
          You <span className="text-blue-500">submit</span> we
          <span className="text-green-500"> collect</span>
        </h2>
        <p className="text-white text-center mt-4">
          DataCollector is a new innovative way to get your data and show it to
          you!
        </p>
      </section>
    </main>
  );
}
