// Canister ID (ganti dengan ID canister Anda)
const canisterId = "your-canister-id";

// Fungsi untuk menyimpan pesan
async function storeMessage() {
    const message = document.getElementById('message').value;

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    try {
        const result = await ic.plug.agent.update(canisterId, 'store_message', [message]);
        alert('Message stored successfully!');
        getMessage();
    } catch (error) {
        console.error("Error storing message:", error);
    }
}

// Fungsi untuk mengambil pesan yang disimpan
async function getMessage() {
    try {
        const result = await ic.plug.agent.query(canisterId, 'get_message', []);
        document.getElementById('storedMessage').textContent = result;
    } catch (error) {
        console.error("Error retrieving message:", error);
    }
}

// Ambil pesan saat pertama kali memuat halaman
getMessage();
