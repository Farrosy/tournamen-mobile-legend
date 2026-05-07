/**
 * MLBB Tournament Central - Logic Script
 * Author: Sayyid Syuja Farrosy
 */

// 1. Fungsi bantuan untuk menyembunyikan semua toast yang mungkin sedang terbuka
function hideAllToasts() {
    const toasts = ['not-available-toast', 'closed-toast'];
    toasts.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden', 'opacity-0');
        }
    });
}

// 2. Logika untuk Toast "Fitur Belum Tersedia"
function showNotAvailable() {
    hideAllToasts(); 
    
    const toast = document.getElementById('not-available-toast');
    if (!toast) return;

    // Reset posisi dan tampilkan
    toast.style.transform = 'translate(-50%, -20px)';
    toast.classList.remove('hidden', 'opacity-0');
    
    // Animasi masuk
    setTimeout(() => {
        toast.style.transform = 'translate(-50%, 0)';
    }, 10);
    
    // Auto-close setelah 2.5 detik
    setTimeout(() => {
        closeNotAvailable();
    }, 2500);
}

function closeNotAvailable() {
    const toast = document.getElementById('not-available-toast');
    if (toast && !toast.classList.contains('hidden')) {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }
}

// 3. Logika untuk Toast "Tournament Closed"
function showClosedNotification() {
    hideAllToasts(); 
    
    const toast = document.getElementById('closed-toast');
    if (!toast) return;

    // Tampilkan dan set animasi awal
    toast.classList.remove('hidden', 'opacity-0');
    toast.style.transform = 'translate(-50%, -20px)';
    
    setTimeout(() => {
        toast.style.transform = 'translate(-50%, 0)';
    }, 10);

    // Auto-close setelah 1.5 detik
    setTimeout(() => {
        closeToast();
    }, 1500);
}

function closeToast() {
    const toast = document.getElementById('closed-toast');
    if (toast && !toast.classList.contains('hidden')) {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }
}

// 4. (Opsional) Menutup toast dengan tombol ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideAllToasts();
    }
});