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
});