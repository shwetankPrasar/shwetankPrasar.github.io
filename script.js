// This code will add a simple hover effect to the list items.
const listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
  listItem.addEventListener('mouseover', () => {
    listItem.classList.add('hover');
  });

  listItem.addEventListener('mouseout', () => {
    listItem.classList.remove('hover');
  });
});
