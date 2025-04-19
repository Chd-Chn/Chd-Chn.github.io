document.querySelectorAll('.accordion-header').forEach(function(header) {
  header.addEventListener('click', function() {
    /*only trigger toggle when the .accordion-header is clicked — not the entire section:*/
    const section = header.parentElement;
    section.classList.toggle('open');
  });
});

