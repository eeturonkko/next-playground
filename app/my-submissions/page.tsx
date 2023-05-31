"use client";
import { useEffect, useState } from "react";
import UserDataCard from "../components/UserDataCard";
import getData from "../api/getData";
import { deleteData } from "../api/deleteData";
import { useUser } from "@clerk/nextjs";

type UserData = {
  username: string;
  hobby: string;
  id: string;
};

function UserSubmissionsPage() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    fetchData(); //
  }, [userId]);

  async function fetchData() {
    if (!userId) return;
    const data = await getData(userId);
    if (!data) {
      console.log("Data is undefined or null");
      return;
    }
    setUserData(data);
  }

  return (
    <>
      <main className="h-screen text-white">
        <section className="flex flex-col items-center gap-4 container mx-auto mt-12">
          <h1 className="text-center text-4xl">My Submissions</h1>
          <div className="grid grid-cols-3 gap-4 mt-6 ">
            {userData.map((data, index) => (
              <UserDataCard
                key={index}
                username={data.username}
                hobby={data.hobby}
                id={data.id}
                onDelete={fetchData}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default UserSubmissionsPage;
