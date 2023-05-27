import UserDataCard from "../components/UserDataCard";
function UserSubmissionsPage() {
  return (
    <>
      <main className="h-screen text-white">
        <section className="flex flex-col items-center gap-4 container mx-auto mt-12 border border-red-600 border-dashed">
          <h1 className="text-center text-4xl">My Submissions</h1>
          <div className="grid grid-cols-3 gap-4 ">
            <UserDataCard username="awonfs" hobby="Programming" />
            <UserDataCard username="MiracLe" hobby="Counter Strike" />
            <UserDataCard username="Inkku" hobby="Law" />
            <UserDataCard username="Loki" hobby="Being annoying" />
            <UserDataCard username="Muuk" hobby="Also being annoying" />
            <UserDataCard username="Nane" hobby="Sleeping" />
          </div>
        </section>
      </main>
    </>
  );
}

export default UserSubmissionsPage;
