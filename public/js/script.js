document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('answer').addEventListener('input', function(){
    this.value = this.value.replace(/\s+/g, '').toLowerCase();
  });
});
