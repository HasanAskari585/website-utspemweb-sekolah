// File: js/modal-loader.js
document.addEventListener("DOMContentLoaded", function() {
   fetch("modalnavbar/detailjurusan.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("detailjurusan-container").innerHTML = html;
    })
    .catch(err => console.error("Gagal memuat modal profile sekolah:", err));

  fetch("modalnavbar/profilsekolah.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("profilsekolah-container").innerHTML = html;
    })
    .catch(err => console.error("Gagal memuat modal profile sekolah:", err));

fetch("modalnavbar/akademik.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("akademik-container").innerHTML = html;
    })
    .catch(err => console.error("Gagal memuat modal akademik:", err));

fetch("modalnavbar/kesiswaan.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("kesiswaan-container").innerHTML = html;
    })
    .catch(err => console.error("Gagal memuat modal kesiswaan:", err));
});