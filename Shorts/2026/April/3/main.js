//
// www.youtube.com/@BinaryMinutes
//

const title = '10 Tips for Learning JavaScript Fast!';

// Prepare SEO friendly slug
const slug = title
  .toLowerCase()
  .split(' ')
  .join('-')
  .replace(/[^\w-]/g, '');

console.log('Slug:', slug);
