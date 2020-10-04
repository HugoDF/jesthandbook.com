module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./*.jpg");
  eleventyConfig.addPassthroughCopy("./*.ico");
};