import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex justify-center p-20 bg-gray-700 h-screen">
      <SignIn />
    </main>
  );
}
