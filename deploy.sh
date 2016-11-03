#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

# rev=$(git rev-parse --short HEAD)

cd _site

# git remote add origin "https://user:${GH_ACCESS_TOKEN}@${GITHUB_REPO}"
# git fetch origin
# git reset origin/gh-pages

# echo "example.com" > CNAME

touch .
touch .nojekyll

git add -A .
git commit -m "Generated Jekyll Site by Travis CI - ${TRAVIS_BUILD_NUMBER}"
git push -q origin HEAD:gh-pages #> /dev/null 2>&1