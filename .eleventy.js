const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// export all this
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets");

  // Get only content that matches a tag - https://www.11ty.dev/docs/collections/ (bottom half of page)
  // commissions
  eleventyConfig.addCollection("commissions", function(collection) {
    return collection.getFilteredByTag("commission");
  });
  // workshops
  eleventyConfig.addCollection("workshops", function(collection) {
    return collection.getFilteredByTag("workshop");
  });
  // bibliography
  eleventyConfig.addCollection("bibliography", function(collection) {
    return collection.getFilteredByTag("bibliography");
  });
  // glossary
  eleventyConfig.addCollection("glossary", function(collection) {
    return collection.getFilteredByTag("glossary");
  });    

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes"
    }
  }
}
