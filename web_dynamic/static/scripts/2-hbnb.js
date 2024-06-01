$(document).ready(function() {
  const li = [];
  $('.popover input').click(function() {
    const value = $(this).val();
    if ($(this).is(':checked')) {
      li.push(value);
    } else {
      const idx = li.indexOf(value)
      if (idx !== -1) {
        li.splice(idx, 1);
      }
    }
    $('.amenities h4').text(li.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
