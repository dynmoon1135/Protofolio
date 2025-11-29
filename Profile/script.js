function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ... kode toggleMenu sebelumnya ...

function kirimPesan(event) {
    event.preventDefault(); // Mencegah form reload halaman
    alert("Terima kasih! Pesan Anda telah terkirim (Demo). Silakan hubungi via WhatsApp untuk respon cepat.");
    // Reset form setelah kirim
    document.querySelector('.contact-form').reset();
}