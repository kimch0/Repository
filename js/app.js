function changeLanguage(lang) {
   
    if(lang == 'en'){
       location.href= "/Repository/en/index.html";
    }else if(lang == 'es'){
        location.href="/index.html"
    }
    return false
}
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

