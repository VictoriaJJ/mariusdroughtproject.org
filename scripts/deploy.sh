#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

# rev=$(git rev-parse --short HEAD)

cd _site
touch .nojekyll
ls -la

git init

git config user.name "5j4"
git config user.email "5j4@users.noreply.github.com"

git add .
git commit -m "Generated Jekyll Site by Travis CI - ${TRAVIS_BUILD_NUMBER}"
git push origin gh-pages #> /dev/null 2>&1