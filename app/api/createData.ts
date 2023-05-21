import { userData } from "../components/DataForm";
export async function createData(formData: userData, userId: string) {
  try {
    const response = await fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
