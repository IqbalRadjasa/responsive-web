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

  $('.show-hide-btn-2').click(function () {
    let passwordInput = $('#confirm-password-input');
    let showIcon = $('#show-2');
    let hideIcon = $('#hide-2');

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

  let isConfirmed = false;
  $('#confirm-password-input').on('input', function () {
    let password = $('#password-input').val();
    let confirmPassword = $(this).val();

    if (confirmPassword !== password) {
      isConfirmed = false;
      $('#confirm-password-error').removeClass('d-none');
    } else {
      isConfirmed = true;
      $('#confirm-password-error').addClass('d-none');
    }
  });

  $('#masuk-button').click(function (e) {
    e.preventDefault();

    let email_val = $('#email-input').val().trim();
    let username_val = $('#username-input').val().trim();
    let password_val = $('#password-input').val().trim();
    let confirm_password_val = $('#confirm-password-input').val().trim();

    if (email_val === '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Email harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email_val)) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Masukkan email yang valid (contoh: user@example.com).',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    }

    if (username_val === '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Nama pengguna harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    } else if (/[^a-zA-Z]/.test(username_val)) {
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

    if (confirm_password_val === '') {
      Swal.fire({
        title: 'Gagal!',
        text: 'Konfirmasi kata sandi harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return;
    } else if (isConfirmed !== true) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Kata sandi tidak sama.',
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
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'login.html';
      }
    });
  });
});
