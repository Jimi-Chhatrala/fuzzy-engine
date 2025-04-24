//
// www.youtube.com/@BinaryMinutes
//

// Count how many distinct tags were used in a blog.

const tags = ['tech', 'code', 'tech', 'dev', 'javascript', 'code'];

const uniqueTagCount = new Set(tags).size;

console.log('Unique tag count:', uniqueTagCount);
