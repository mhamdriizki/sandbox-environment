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

async function mainAwait() {
  console.log("Memulai aplikasi...\n");
  let isLoading = true; // Contoh state yang sering dipakai di React

  // Padanan .then() = blok try
  try {
    console.log("Loading data users...");
    const users = await fetchUsers(); 
    
    const [user1, user2, user3] = users; 
    
    console.log("Data berhasil diambil:\n");
    console.log(formatUser(user1));
    console.log(formatUser(user2));
    console.log(formatUser(user3));

  // Padanan .catch() = blok catch
  } catch (error) {
    console.error("Terjadi kesalahan:", error);

  // Padanan .finally() = blok finally
  } finally {
    isLoading = false; // Mematikan loading entah datanya sukses atau error
    console.log(`\nStatus Loading saat ini: ${isLoading}`);
    console.log("Aplikasi selesai dieksekusi.");
  }
}

main();