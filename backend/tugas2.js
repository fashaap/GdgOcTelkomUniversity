// 1. Buat fungsi async bernama getTodo
async function getTodo() {
    console.log("Mencoba mengambil data ...");

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        const data = await response.json();

        console.log("✅ Judul Todo: " + data.title);

    } catch (error) {
        console.log("❌ Terjadi kesalahan:", error.message);
    } finally {
        console.log("--- Proses Selesai ---");
    }
}

getTodo();