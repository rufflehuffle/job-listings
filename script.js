Array.from(document.querySelectorAll('.js-listing-tag')).forEach(tag => {
  tag.addEventListener('click', (e) => {
    const filter = document.querySelector('.js-filter');
    const filterContainer = document.querySelector('.js-filter-container');
    const jobListing = tag.parentElement.parentElement;
    const tagType = tag.dataset.tagType;

    // 1. Create filter tag element
    const filterTag = document.createElement('span');
    filterTag.classList.add('filter__tag', 'tag', 'js-filter-tag');
    filterTag.textContent = tag.textContent;
    filterTag.addEventListener('click', () => {
      filterTag.remove();
      filterContainer.firstChild ? filter.style.display = 'block' : filter.style.display = 'none';
    });

    // 2. Append filter tag to the filter bar
    filterContainer.appendChild(filterTag);
    filter.style.display = 'block';
    
    // 3. Set all other job listings to style.display = 'none'
    const selector = `.job-listing:not([data-${tagType}="${jobListing.dataset[tagType]}"])`;
    Array.from(document.querySelectorAll(selector)).forEach(listing => listing.style.display = 'none');
  });
})

const filter = document.querySelector('.js-filter');
const filterContainer = document.querySelector('.js-filter-container');
const filterButton = document.querySelector('.js-filter-button')
filterButton.addEventListener('click', () => {
  while (filterContainer.firstChild) filterContainer.removeChild(filterContainer.firstChild);
  filter.style.display = 'none';
})