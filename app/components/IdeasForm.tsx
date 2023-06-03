"use client";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function IdeasForm() {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();
  const { push } = useRouter();

  async function onSubmitHandler() {
    console.log("hi mom");
  }
  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-700 border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
        <h5 className="text-xl font-medium text-white">
          Need new ideas for your new hobby?
        </h5>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your intrests
          </label>
          <textarea
            {...register("intrests", { required: true })}
            className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Write your intrests here"
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

export default IdeasForm;
