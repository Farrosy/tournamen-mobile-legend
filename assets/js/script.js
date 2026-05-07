/**
 * MLBB Tournament Central - Logic Script
 * Author: Sayyid Syuja Farrosy
 */

// Variable untuk menyimpan timer agar bisa direset jika ada klik baru
let toastTimer;

/**
 * 1. Fungsi bantuan untuk menutup semua toast
 */
function hideAllToasts() {
    // Bersihkan timer yang sedang berjalan jika ada klik baru
    clearTimeout(toastTimer);
    
    const toasts = ['not-available-toast', 'closed-toast'];
    toasts.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('show');
        }
    });
}

/**
 * 2. Logika untuk Toast "Fitur Belum Tersedia"
 */
function showNotAvailable() {
    hideAllToasts(); 
    
    const toast = document.getElementById('not-available-toast');
    if (!toast) return;

    // Tambahkan class show untuk memicu animasi CSS
    toast.classList.add('show');
    
    // Set timer baru untuk menutup otomatis
    toastTimer = setTimeout(() => {
        closeNotAvailable();
    }, 2500);
}

function closeNotAvailable() {
    const toast = document.getElementById('not-available-toast');
    if (toast) {
        toast.classList.remove('show');
    }
}

/**
 * 3. Logika untuk Toast "Tournament Closed"
 */
function showClosedNotification() {
    hideAllToasts(); 
    
    const toast = document.getElementById('closed-toast');
    if (!toast) return;

    toast.classList.add('show');

    toastTimer = setTimeout(() => {
        closeToast();
    }, 2000);
}

function closeToast() {
    const toast = document.getElementById('closed-toast');
    if (toast) {
        toast.classList.remove('show');
    }
}

/**
 * 4. Event Listener Global
 */
document.addEventListener('keydown', (e) => {
    // Tutup dengan ESC
    if (e.key === 'Escape') {
        hideAllToasts();
    }
});

// Tutup toast jika user mengklik area di luar toast saat sedang aktif
document.addEventListener('click', (e) => {
    const isToastContent = e.target.closest('.toast-content');
    const isButton = e.target.closest('button') || e.target.closest('a');
    
    // Jika klik di luar konten toast DAN bukan di tombol pemicu, sembunyikan
    if (!isToastContent && !isButton) {
        hideAllToasts();
    }
});