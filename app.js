const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = '#181818'; /* Voeg hier de gewenste achtergrondkleur toe */
    });

    card.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = ''; /* Terug naar de standaard achtergrondkleur */
    });
});
/*
const observer = new IntersectionObserver((entries)) => {
    entries.forEach((entries)) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }   else {
            entry.target.classList.remove('show');
        }
    }
} 
const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));
*/