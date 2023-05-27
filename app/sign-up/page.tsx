import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex justify-center p-20 bg-gray-700 h-screen">
      <SignUp />
    </main>
  );
}
