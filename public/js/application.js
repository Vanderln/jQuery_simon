$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();

    $.post('/color', function(response){
      $('#color_me li:nth-child('+response.cell+')').css('background-color', response.color);
    });
  });
});
