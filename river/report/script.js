
  document.addEventListener('DOMContentLoaded', function() {
    // Select all the accordion buttons
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Toggle the 'active' class on the parent accordion item
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');

        // Toggle the aria-expanded attribute
        const isExpanded = accordionItem.classList.contains('active');
        button.setAttribute('aria-expanded', isExpanded);

        // Close other sections when one is opened (optional)
        const allAccordionItems = document.querySelectorAll('.accordion-item');
        allAccordionItems.forEach(item => {
          if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordion-button').setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  });
