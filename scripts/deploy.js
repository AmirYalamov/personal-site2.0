const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/AmirYalamov/personal-site2.0.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
