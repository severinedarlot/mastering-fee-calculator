mastering-fee-calculator
========================

Mastering fee calculator

Pour lancer les tests
---------------------

Se positionner dans le répertoire `test` et faire :

`mocha mastering_fee_calculator_test.js`


Prérequis
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

Si problème de sécuriter, changer temporairement les droits du répertoire /usr/bin/node

###mocha

Procédure d'installation de mocha

`npm install -g mocha`

###Yeoman

Cette commande permet d'analyser son installation et nous dit tout ce qu'il faut installer avec d'installer yeoman :

`curl -L get.yeoman.io | bash`

Cette commande peut dire qu'il manque des choses. Par exemple :

 ````Homebrew [not installed]
      * Visit https://github.com/mxcl/homebrew/wiki/Installation for Homebrew installation instructions
      * For best results, after install, be sure to run brew doctor and follow the recommendations
   ✖ Compass [not installed]
      * To install Compass use: sudo gem install compass
   ✖ OptiPNG [not installed]
      * To install OptiPNG use: brew install optipng
   ✖ PhantomJS [not installed]
      * To install PhantomJS use: brew install phantomjs
   ✖ Yeoman [not installed]
      * You're missing yeoman! sudo npm install -g yeoman will correct this atrocity.
 ````

###Homebrew

Besoin pour les macs.
`ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"`

###Compass

`sudo gem install compass`

###OptiPNG

`brew install optipng

###PhantomJS

`brew install phantomjs`

###Yeoman

Et voilà, finalement on peut installer Yeoman. Par contre, ça peut prendre du temps. On peut en profiter pour faire une pause ou lire de la documentation sur Yeoman :

`sudo npm install -g yeoman`

