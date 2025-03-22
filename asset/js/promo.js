$(document).ready(function () {
  $('#card-1 #pratinjau-1, #card-1 #pratinjau-2').click(function (e) {
    e.preventDefault();

    $('#card-1 #pratinjau-1, #card-1 #pratinjau-2').removeClass('active');

    $(this).addClass('active');

    let cardBody = $('#card-1 .card-body');

    if ($(this).attr('id') === 'pratinjau-1') {
      cardBody.find('.pratinjau').removeClass('d-none');
      cardBody.find('.deskripsi').addClass('d-none');
    } else {
      cardBody.find('.pratinjau').addClass('d-none');
      cardBody.find('.deskripsi').removeClass('d-none');
    }
  });

  $('#card-2 #pratinjau-1, #card-2 #pratinjau-2').click(function (e) {
    e.preventDefault();

    $('#card-2 #pratinjau-1, #card-2 #pratinjau-2').removeClass('active');

    $(this).addClass('active');

    let cardBody = $('#card-2 .card-body');

    if ($(this).attr('id') === 'pratinjau-1') {
      cardBody.find('.pratinjau').removeClass('d-none');
      cardBody.find('.deskripsi').addClass('d-none');
    } else {
      cardBody.find('.pratinjau').addClass('d-none');
      cardBody.find('.deskripsi').removeClass('d-none');
    }
  });

  $('#card-3 #pratinjau-1, #card-3 #pratinjau-2').click(function (e) {
    e.preventDefault();

    $('#card-3 #pratinjau-1, #card-3 #pratinjau-2').removeClass('active');

    $(this).addClass('active');

    let cardBody = $('#card-3 .card-body');

    if ($(this).attr('id') === 'pratinjau-1') {
      cardBody.find('.pratinjau').removeClass('d-none');
      cardBody.find('.deskripsi').addClass('d-none');
    } else {
      cardBody.find('.pratinjau').addClass('d-none');
      cardBody.find('.deskripsi').removeClass('d-none');
    }
  });

  $('#card-4 #pratinjau-1, #card-4 #pratinjau-2').click(function (e) {
    e.preventDefault();

    $('#card-4 #pratinjau-1, #card-4 #pratinjau-2').removeClass('active');

    $(this).addClass('active');

    let cardBody = $('#card-4 .card-body');

    if ($(this).attr('id') === 'pratinjau-1') {
      cardBody.find('.pratinjau').removeClass('d-none');
      cardBody.find('.deskripsi').addClass('d-none');
    } else {
      cardBody.find('.pratinjau').addClass('d-none');
      cardBody.find('.deskripsi').removeClass('d-none');
    }
  });
});
