#!/bin/bash
sed -r -si '/\$\(/s/\$\( *"/$("#/g' *.js *.html
