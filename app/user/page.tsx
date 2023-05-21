import React from "react";
import SignInForm from "../components/SignInForm";

function UserPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700">
      <SignInForm />
    </div>
  );
}

export default UserPage;
