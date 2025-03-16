$(document).ready(function () {
  
  $('.show-hide-btn-1').click(function () {
    let passwordInput = $('#password-input');
    let showIcon = $('#show-1');
    let hideIcon = $('#hide-1');

    if (passwordInput.attr('type') === 'password') {
      passwordInput.attr('type', 'text');
      showIcon.addClass('d-none');
      hideIcon.removeClass('d-none');
    } else {
      passwordInput.attr('type', 'password');
      showIcon.removeClass('d-none');
      hideIcon.addClass('d-none');
    }
  });

  $('#masuk-button').click(function (e) {
    e.preventDefault();

    let username_val = $('#username-input').val().trim();
    let password_val = $('#password-input').val().trim();

    if (username_val === '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Nama pengguna harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    } else if (/[^a-zA-Z]/.test(username_val)) {
      isValid = false;
      Swal.fire({
        title: 'Gagal!',
        text: 'Nama pengguna hanya boleh berisi huruf tanpa angka atau simbol.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    }

    if (password_val === '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Kata sandi harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    } else if (password_val.length < 8) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Kata sandi harus lebih dari 8.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    }

    Swal.fire({
      title: 'Sukses!',
      text: 'Selamat Datang.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  });
});
