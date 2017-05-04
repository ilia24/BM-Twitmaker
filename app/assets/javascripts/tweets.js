// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
$('#tweet-form').on('submit', function(e) {
  e.preventDefault();

    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: 'html'

    }).done(function(data){
      console.log('ajax submission succeeded')
      console.log(data)
      var tweet = $('<li>').html(data).attr('class', 'tweet')
      $('.tweets').prepend(tweet)
    }).fail(function(data){
      console.log('ajax submission failed')
    }).always(function(){
      console.log('ajax ran')
    });

});
});
