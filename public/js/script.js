$(document).ready(function(){
  $('#answer').bind('input', function(){
    $(this).val(function(_, v){
      return v.replace(/\s+/g, '');
    });
    $(this).val().toLowerCase();
  });
});
