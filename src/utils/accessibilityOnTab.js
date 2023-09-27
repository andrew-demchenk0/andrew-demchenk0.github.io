// Отримайте всі елементи з атрибутом tabindex
const elements = document.querySelectorAll('[tabindex]');

// Функція для обробки клавіш Enter і Space
function handleActivation(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    e.target.click();
  }
}

elements.forEach((element) => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // Обробка переміщення фокусу
      const currentIndex = Array.from(elements).indexOf(element);
      const nextIndex = e.shiftKey ? (currentIndex - 1) : (currentIndex + 1);

      if (nextIndex >= 0 && nextIndex < elements.length) {
        elements[nextIndex].focus();
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      // Обробка активації
      e.preventDefault();
      e.target.click();
    }
  });
});
