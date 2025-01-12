function kirimPesan(formNumber) {
var pilihan, nomorWA, pesan, url;

if (formNumber === 1) {
pilihan = document.querySelector('input[name="pesan1"]:checked').value;
nomorWA = "6285711374861"; 
//Ganti dengan nomor WhatsApp untuk formulir 1
} else if (formNumber === 2) {

pilihan = document.querySelector('input[name="pesan2"]:checked').value;
nomorWA = "6285711374861";
//Ganti dengan nomor WhatsApp untuk formulir 2
} else {
return; // Jika nomor formulir tidak valid
}

pesan = "👋" + pilihan;
url = "https://api.whatsapp.com/send?phone=" + nomorWA + "&text=" + encodeURIComponent(pesan);
window.open(url, '_blank');
  }