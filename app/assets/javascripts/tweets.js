// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('#tweet-form').on('submit', function(e) {
  e.preventDefault();
  $(function() {

    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      dataType: $(this).serialize(),
      dataType: 'html'
    }).done(function(data){
      console.log('ajax submission succeeded')
    }).fail(function(){
      console.log('ajax submission failed')

    }).always(function(){
    });

  });
});
