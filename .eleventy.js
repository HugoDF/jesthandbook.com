module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./*.jpg");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.ico");
};