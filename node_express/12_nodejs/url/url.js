//az URL modul használata webcímek kezelésére
//dokumentáció: https://nodejs.org/docs/latest-v18.x/api/url.html

import * as url from 'node:url';

const webcim = 'http://peter:jelszo@www.pelda.ro:3000/elso/masodik?para1=alma&para2=szilva#alcim';

//feldolgozás (elavult):
const cim = url.parse(webcim);
console.log(cim);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.pelda.ro:3000',
  port: '3000',
  hostname: 'www.pelda.ro',
  hash: '#alcim',
  search: '?para1=alma&para2=szilva',
  query: 'para1=alma&para2=szilva',
  pathname: '/elso/masodik',
  path: '/elso/masodik?para1=alma&para2=szilva',
  href: 'http://www.pelda.ro:3000/elso/masodik?para1=alma&para2=szilva#alcim'
}
*/

//feldolgozás jelenleg javasolt mód:
const cim1 = new URL (webcim);
console.log(cim1);
/* cim1 tartalma:
URL {
  href: 'http://peter:jelszo@www.pelda.ro:3000/elso/masodik?para1=alma&para2=szilva#alcim',
  origin: 'http://www.pelda.ro:3000',
  protocol: 'http:',
  username: 'peter',
  password: 'jelszo',
  host: 'www.pelda.ro:3000',
  hostname: 'www.pelda.ro',
  port: '3000',
  pathname: '/elso/masodik',
  search: '?para1=alma&para2=szilva',
  searchParams: URLSearchParams { 'para1' => 'alma', 'para2' => 'szilva' },
  hash: '#alcim'
}
*/



//előállítás
const cim2 = new URL ('http://www.pelda.ro');
cim2.pathname='/elso/masodik';
cim2.query = 'para1=alma&para2=szilva';
cim2.hash = '#alcim';

console.log('Új webcím: '+cim2.href); //Új webcím: http://www.pelda.ro/elso/masodik#alcim

