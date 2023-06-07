const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elements}`);
});