#!/bin/bash

cd /var/www/ojsi
mkdir ojsi
cd ojsi
wget 127.0.0.1/ojsi/index.php -O index.html
wget 127.0.0.1/ojsi/alone.php -O alone.html
cp -r ../resources .
cd ..

rm downloads/ojsi.zip
zip -r downloads/ojsi.zip ojsi

pwd

cd ojsi
zip -r ../downloads/ojsi_inside.zip .
