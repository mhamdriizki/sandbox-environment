import formatUser from "./formatter.ts";
import { fetchUsers } from "./api.ts";

async function main() {
  console.log("Loading data users...");
  try {
    // Menunggu promise selesai
    const users = await fetchUsers(); 
    
    // Array destructuring untuk ngambil 3 user pertama saja
    const [user1, user2, user3] = users; 
    
    console.log("Data berhasil diambil:\n");
    console.log(formatUser(user1));
    console.log(formatUser(user2));
    console.log(formatUser(user3));

  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

main();