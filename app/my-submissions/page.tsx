"use client";
import { useEffect, useState } from "react";
import UserDataCard from "../components/UserDataCard";
import getData from "../api/getData";

type UserData = {
  username: string;
  hobby: string;
};

function UserSubmissionsPage() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setUserData(data);
    }
    fetchData();
  }, []);

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
