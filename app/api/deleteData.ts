export async function deleteData(id: string) {
  try {
    const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
