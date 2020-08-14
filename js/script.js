// SELECT DEPARTMENTS:
$(function () {

  $.getJSON('test.json', function (response) {

    let items = [];

    $.each(response, function (department, city) {
      items[department] = city;
      $('#dateDepartment').append(`<option value="${department}">${department}</option>`);
    });

    $('#dateDepartment').change(function () {
      const selectedDepartment = $(this).children('option:selected').val();
      let selectedCities = items[selectedDepartment];
      $('#dateCity').empty();
      $.each(selectedCities, function (index, city) {
        $('#dateCity').append(`<option value="${city}">${city}</option>`);
      });
    });
  });

  // CONTACT FORM
  
    $('#submit').click(function () {
  
      let name = $('input[name=name]').val();
      let email = $('input[name=email]').val();
      let state = $('select[name=state]').val();
      let city = $('select[name=city]').val();
  
      let form_data =
        'name=' + name +
        '&email=' + email +
        '&state=' + state +
        '&city=' + city +
  
        $('.text').attr('disabled', 'true');
  
      $.ajax({
        url: 'php/contact.php',
        type: 'POST',
        data: form_data,
  
        success: function (html) {
  
          if (html == 1) {} else alert('Por favor intenta de nuevo. Hubo un error.');
  
          let mailFormat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
          if (state == 0) {
            $('#messageState').show();
            return false;
          } else {
            $('#messageState').hide();
            if (city == 0) {
              $('#messageCity').show();
              return false;
            } else {
              $('#messageCity').hide();
              if (name == 0 || name.length == 50) {
                $('#messageName').show();
                return false;
              } else {
                $('#messageName').hide();
                if (email == 0 || !mailFormat.test(email) || name.length == 30) {
                  $('#messageEmail').show();
                  return false;
                } else {
                  $('#messageEmail').hide();
                  $(".modal").modal('show');
                  $("#dateDepartment option[value=''").attr("selected", true);
                  $('#dateCity').empty();
                  $('input[type="text"]').val('');
                  $('input[type="email"]').val('');
                }
              }
            }
          }
        }
      });
      return false;
    });
});


