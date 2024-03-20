const html = `<div id="tarto">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</div>`;

const paras = html.match(/<p.*?\/p>/gs);
console.log(paras) ;