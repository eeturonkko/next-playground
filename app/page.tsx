import SignInForm from "./components/SignInForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700">
      <SignInForm />
    </main>
  );
}
