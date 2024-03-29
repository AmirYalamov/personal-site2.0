const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/pages/blog.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/pages/projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/pages/resume.js"))),
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/templates/allTagsIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/templates/blogPost.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/home/amir/Projects/personal-site2.0/src/templates/singleTagIndex.js")))
}

