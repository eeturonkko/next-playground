import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-center p-20 bg-gray-700 h-screen">
      <SignUp />
    </main>
  );
}
