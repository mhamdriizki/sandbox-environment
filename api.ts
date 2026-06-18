// Menggunakan named export
export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
  if (!res.ok) {
    throw new Error(`Gagal mengambil data! Status: ${res.status}`);
  }
  
  return res.json(); // Mengembalikan Promise
}
