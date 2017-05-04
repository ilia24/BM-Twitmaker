// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('#create-tweet').on('click', function(e) {
  e.preventDefault();
  $(function() {

    $.ajax({
      method: 'GET',
      url: '',
      dataType: 'html'
    }).done(function(data){
      console.log('ajax submission succeeded')

      };
    }).fail(function(){
      console.log('ajax submission failed')

    }).always(function(){
    });

  });
});
