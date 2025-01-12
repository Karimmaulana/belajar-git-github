// Ambil elemen canvas dan konteksnya
const canvas = document.getElementById('sinusCanvas');
const ctx = canvas.getContext('2d');

// Teks yang akan dikonversi ke gelombang sinus
const text = "i love you";

// Fungsi untuk mengonversi karakter ke nilai numerik
function charToValue(char) {
    return char.charCodeAt(0);
}

// Tentukan parameter gelombang sinus
const amplitude = 50; // Amplitudo
const baseFrequency = 0.01; // Frekuensi dasar
const phase = 0; // Fase awal
const centerY = canvas.height / 2; // Titik tengah vertikal canvas
const canvasWidth = canvas.width;

// Gambar gelombang sinus
ctx.beginPath();
ctx.moveTo(0, centerY);

// Langkah yang lebih kecil untuk menggambar gelombang sinus yang lebih halus
const step = 1; // Langkah dalam pixel

for (let x = 0; x < canvasWidth; x += step) {
    // Hitung frekuensi berdasarkan karakter teks
    const charIndex = Math.floor((x / canvasWidth) * text.length);
    const charValue = charToValue(text[charIndex]);
    const frequency = baseFrequency + charValue / 1000;
    
    const y = centerY + amplitude * Math.sin(2 * Math.PI * frequency * x + phase);
    ctx.lineTo(x, y);
}

ctx.stroke();
