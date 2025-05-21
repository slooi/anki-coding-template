//// Remove expected html tags
var answerHTML = document.querySelector("#ans").innerHTML.replace(/^(<div>)*/,"").replace(/<\/div>/gm,"").replace(/<div>/gm,"\n").replace(/<br\s*?\/?>/gm,"\n")

//// Verification no html tags exist
if(answerHTML.match(/<|>/gm)) {
	const h1=document.createElement("h1")
	h1.innerText="ERROR! unexpected html tag found! Here is the full output: "+answerHTML.innerHTML;
	document.body.append(h1)
}

//// Unescape html
var answer = answerHTML.replace(/<div>/gm,"\n").replace(/<br\s*?\/?>/gm,"\n").replace(/\&nbsp\;/gm," ").replace(/\&lt\;/gm,"<").replace(/\&gt\;/gm,">").replace(/&amp;/gm,"&")

console.log(answer===document.querySelector("textarea").value)


