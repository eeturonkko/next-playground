"use client";
import { useForm } from "react-hook-form";
import { createData } from "../api/createData";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export type userData = {
  username: string;
  hobby: string;
};

function DataForm() {
  const { register, handleSubmit } = useForm<userData>();
  const { user } = useUser();
  const { push } = useRouter();

  async function onSubmitHandler(formData: userData) {
    if (!user) return;
    try {
      await createData(formData, user.id);
    } catch (error) {
      console.log(error);
    }
    push("/my-submissions");
  }

  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-700 border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
        <h5 className="text-xl font-medium text-white">
          Enter your username and hobby
        </h5>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            htmlFor="hobby"
            className="block mb-2 text-sm font-medium text-white"
          >
            Hobby
          </label>
          <input
            {...register("hobby", { required: true })}
            type="text"
            placeholder="Your hobby"
            className="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DataForm;
