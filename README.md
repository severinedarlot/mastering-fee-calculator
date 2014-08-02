# Mastering-fee-calculator

This README outlines the details of collaborating on this Ember application.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).

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
