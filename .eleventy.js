module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./*.jpg");
  eleventyConfig.addPassthroughCopy("./*.webp");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.ico");
};