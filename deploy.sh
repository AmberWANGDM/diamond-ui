rm -rf dist &&
yarn build && 
cd dist &&
git init && 
git add . &&
git commit -m 'update' &&
git branch -M gh-pages &&
git remote add origin git@github.com:AmberWANGDM/diamond-ui.git &&
git push -f -u origin gh-pages &&
cd ..
echo https://amberwangdm.github.io/diamond-ui