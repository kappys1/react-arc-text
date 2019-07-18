#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

rm -rf public
mkdir public

# config
git config --global user.email "alexsbd1@gmail.com"
git config --global user.name "alex marcos - Travis CI"

# build (CHANGE THIS)
make

# deploy
cd example/build
git init
git add .
git commit -m "docs(docs): Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GITHUB_REPO}" master:gh-pages > /dev/null 2>&1
