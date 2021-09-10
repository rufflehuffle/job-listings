function createFilterTag(tag) {
  const filterTag = document.createElement('span');
  const jobListing = tag.parentElement.parentElement;
  const tagType = tag.dataset.tagType;

  filterTag.classList.add('filter__tag', 'tag', 'js-filter-tag'); // 1. Set classes
  filterTag.dataset.tagType = tagType;                            // 2. Set data tags 
  filterTag.dataset.tagValue = jobListing.dataset[tagType];
  filterTag.textContent = tag.textContent;                        // 3. Set text content
  filterTag.addEventListener('click', filterTagClick);            // 4. Set event listeners
  return filterTag;
}

function filterTagClick(e) {
  const filter = document.querySelector('.js-filter');
  const filterTag = e.target;
  const filterContainer = document.querySelector('.js-filter-container');

  filterTag.remove();

  // Hide filter bar if no filter tags
  filterContainer.firstChild ? filter.style.display = 'block' : filter.style.display = 'none'; 
}

// Listing tag on click
Array.from(document.querySelectorAll('.js-listing-tag')).forEach(tag => {
  tag.addEventListener('click', (e) => {
    const filter = document.querySelector('.js-filter');
    const filterContainer = document.querySelector('.js-filter-container');
    const jobListing = tag.parentElement.parentElement;
    const tagType = tag.dataset.tagType;

    // 1. Create filter tag element
    const filterTag = createFilterTag(tag)

    // 2. Append filter tag to the filter bar
    filterContainer.appendChild(filterTag);
    filter.style.display = 'block'; // Show filter bar

    // 3. Set all other job listings to style.display = 'none'
    const selector = `.job-listing:not([data-${tagType}="${jobListing.dataset[tagType]}"])`;
    Array.from(document.querySelectorAll(selector)).forEach(listing => listing.style.display = 'none');
  });
})

// Filter clear on click
document.querySelector('.js-filter-button').addEventListener('click', (e) => {
  const filter = document.querySelector('.js-filter');
  const filterContainer = document.querySelector('.js-filter-container');

  while (filterContainer.firstChild) filterContainer.removeChild(filterContainer.firstChild);
  filter.style.display = 'none';
})