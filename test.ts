// 1. MEMBUAT PROMISE
// Promise itu janji. Hasilnya bisa ditepati (resolve) atau diingkari (reject)
function getUserData(id: number) {
  console.log("Menyiapkan beban angkatan... (Loading)");

  return new Promise<{ id: number; name: string }>((resolve, reject) => {
    // Simulasi delay jaringan (database fetch) selama 1.5 detik
    setTimeout(() => {
      if (id > 0) {
        // Kalau janji ditepati
        resolve({ id: id, name: "Bro Programmer" });
      } else {
        // Kalau janji gagal ditepati
        reject(new Error("Waduh, ID tidak valid! Gagal ngangkat."));
      }
    }, 1500);
  });
}

// 2. MENGKONSUMSI PROMISE (Zaman Sebelum async/await)
console.log("Mulai Eksekusi...");

getUserData(1)
  .then((user) => {
    console.log("✅ Berhasil! Data user:", user);
  })
  .catch((err) => {
    console.error("❌ Gagal:", err.message);
  })
  .finally(() => {
    console.log("💪 Sesi latihan (Promise) selesai!");
  });

// Tunjukkan ke student kalau tulisan ini akan muncul DULUAN sebelum data user,
// karena sifat Javascript yang Asynchronous (nggak nungguin proses yang lama).
console.log("Lanjut gerakan berikutnya...");