$(document).ready(function () {
  $('#keluar-btn').click(function () {
    Swal.fire({
      title: 'Kamu ingin keluar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'auth/login.html';
      }
    });
  });
});
