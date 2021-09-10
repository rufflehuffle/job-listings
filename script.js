Array.from(document.querySelectorAll('.js-listing-tag')).forEach(tag => {
  tag.addEventListener('click', (e) => {
    const filter = document.querySelector('.js-filter');
    const filterContainer = document.querySelector('.js-filter-container');
    const filterTag = document.createElement('span');
    filterTag.classList.add('filter__tag', 'tag', 'js-filter-tag');
    filterTag.textContent = tag.textContent;
    filterTag.addEventListener('click', () => {
      filterTag.remove();
      filterContainer.firstChild ? filter.style.display = 'block' : filter.style.display = 'none';
    });
    filterContainer.appendChild(filterTag);
    filter.style.display = 'block';
  });
})

const filter = document.querySelector('.js-filter');
const filterContainer = document.querySelector('.js-filter-container');
const filterButton = document.querySelector('.js-filter-button')
filterButton.addEventListener('click', () => {
  while (filterContainer.firstChild) filterContainer.removeChild(filterContainer.firstChild);
  filter.style.display = 'none';
})