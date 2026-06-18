import { fetchUsers } from "./api.ts";

async function quickFetch() {
  // GAYA HYBRID: Menunggu (await), tapi kalau error langsung ditangkap (.catch) sebaris!
  // Kalau fetch gagal, variabel 'users' otomatis bernilai 'null'.
  const users = await fetchUsers().catch((err) => {
    console.log("Duh error bro:", err.message);
    return null;
  });

  if (!users) {
    console.log("Data kosong, tampilkan UI Error di sini.");
    return;
  }

  console.log("Dapat datanya sebanyak:", users.length);
}

quickFetch();