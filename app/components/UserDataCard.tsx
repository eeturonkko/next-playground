import { deleteData } from "../api/deleteData";

type UserDataCardProps = {
  username: string;
  hobby: string;
  id: string;
  onDelete: () => void;
};

function UserDataCard({ username, hobby, id, onDelete }: UserDataCardProps) {
  async function handleDelete() {
    await deleteData(id);
    onDelete();
  }

  return (
    <div className="block max-w-sm p-6 rounded-lg shadow hover:bg-gray-600 bg-gray-700 border-gray-800 relative">
      <div className="absolute top-2 right-2">
        <button onClick={handleDelete} className="hover:text-gray-300">
          X
        </button>
      </div>

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {username}
      </h5>
      <p className="font-normal text-gray-400">{hobby}</p>
    </div>
  );
}

export default UserDataCard;
