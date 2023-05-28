"use client";
import { useEffect, useState } from "react";
import UserDataCard from "../components/UserDataCard";
import getData from "../api/getData";
import { useUser } from "@clerk/nextjs";

type UserData = {
  username: string;
  hobby: string;
};

function UserSubmissionsPage() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      const data = await getData(userId);
      setUserData(data);
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <main className="h-screen text-white">
        <section className="flex flex-col items-center gap-4 container mx-auto mt-12 border border-red-600 border-dashed">
          <h1 className="text-center text-4xl">My Submissions</h1>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="grid grid-cols-3 gap-4 ">
              {userData.map((data, index) => (
                <UserDataCard
                  key={index}
                  username={data.username}
                  hobby={data.hobby}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserSubmissionsPage;
