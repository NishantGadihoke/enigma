window.addEventListener("DOMContentLoaded", function(event) {
  if(document.getElementById('answer')) {
    document.getElementById('answer').addEventListener('input', function(){
      this.value = this.value.replace(/\s+/g, '').toLowerCase();
    });
  }
});
