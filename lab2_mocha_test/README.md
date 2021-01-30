mkdir lab2_mocha_test
cd lab2_mocha_test

npm init -y
sudo npm install -g mocha    // (if mocha not working)
npm install --save mocha chai
npm install --save request
npm install --save express

npm test
npx mocha --reporter spec
