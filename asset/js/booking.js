$(document).ready(function () {
  $('.pelayanan-item').click(function () {
    window.location.href = 'booking-2.html';
  });

  $('#selesai-booking-btn').click(function (e) {
    e.preventDefault();

    let pembayaran_val = $('#pembayaran-input').val();

    if (pembayaran_val == 1) {
      window.location.href = 'bukti-transfer.html';
    } else if (pembayaran_val == 2) {
      window.location.href = 'bukti-qris.html';
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Pilih metode pembayaran.',
      });
    }
  });
});
