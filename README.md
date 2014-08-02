Mastering-fee-calculator
========================

Pour lancer les tests
---------------------

Se positionner dans le répertoire `test` et faire :

`mocha mastering_fee_calculator_test.js`


Prérequis()
---------

###node.js

Procédure d'installation de node.js :
<pre>
mkdir tmp
cd tmp
curl http://nodejs.org/dist/node-latest.tar.gz -o node-latest.tar.gz
tar xvf node-latest.tar.gz
cd node-v0.x.x
./configure
make
make install
node -v
</pre>

###npm : Node Package Manager

Procédure d'installation de npm :

`curl http://npmjs.org/install.sh | sh`

Si problème de sécurité, changer temporairement les droits du répertoire /usr/bin/node

### Ember CLI

Site [http://www.ember-cli.com/]

`npm install -g ember-cli`

### Bower

Package manager qui permet de garder les dépendances à jour

`npm install -g bower`

### PhantomJS

Les tests d'intégration sont lancés avec PhantomJS:

`npm install -g phantomjs`

###mocha

Procédure d'installation de mocha

`npm install -g mocha`


