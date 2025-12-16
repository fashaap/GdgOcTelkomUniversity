function buatTeh(jenisGula) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Sedang merebus air... (Tunggu 2 detik)");
        setTimeout(() => {
            if (jenisGula === "Gula Batu") {
                resolve("✅ Teh Gula Batu Siap dinikmati!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        }, 2000);
    });
}


console.log("--- Test Case 1: Berhasil ---");
buatTeh("Gula Batu")
    .then((pesan) => {
        console.log(pesan);
        console.log("");
        
        console.log("--- Test Case 2: Gagal ---");
        return buatTeh("Gula Pasir");
    })
    .catch((error) => {
        console.log(error);
    });