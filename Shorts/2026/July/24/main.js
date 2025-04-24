//
// www.youtube.com/@BinaryMinutes
//

// You want to track active filters (like color, size) and toggle them on/off.

const selectedFilters = new Set();

function toggleFilter(filter) {
  if (selectedFilters.has(filter)) {
    selectedFilters.delete(filter);
  } else {
    selectedFilters.add(filter);
  }
  console.log('Current Filters:', [...selectedFilters]);
}

toggleFilter('Red'); // ['Red']
toggleFilter('Large'); // ['Red', 'Large']
toggleFilter('Red'); // ['Large'] → 'Red' removed
