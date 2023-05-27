import Link from "next/link";

type UserDataCardProps = {
  username: string;
  hobby: string;
};

function UserDataCard({ username, hobby }: UserDataCardProps) {
  return (
    <Link
      href="#"
      className="block max-w-sm p-6  rounded-lg shadow hover:bg-gray-600 bg-gray-700 border-gray-800 "
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
        {username}
      </h5>
      <p className="font-normaltext-gray-400">{hobby}</p>
    </Link>
  );
}

export default UserDataCard;
