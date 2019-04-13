$.ajaxSetup({
  cache: true
});

$(document).ready(function() {
  $.when(
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/js/emojify.min.js'),
    $.getScript('https://cdn.jsdelivr.net/npm/emojione@4.0.0/lib/js/emojione.min.js')
  )
    .done(function(script, textStatus) {
      // run conversion
      emojify.run(document.body, function(emoji, name) {
        const span = document.createElement('span');
        span.classList.add('emoji');
        span.innerHTML = emojione.shortnameToUnicode(emoji);
        return span;
      });
    })
    .fail(function(jqxhr, settings, exception) {
      console.error(exception);
    });
});