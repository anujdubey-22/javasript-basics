//console.dir(document);

console.log(document.getElementById('main-header'));
console.log(document.getElementById('header-title'))
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 5px #000'
//header.textContent='Hello'
//header.innerHTML='<h1>Hello</h1>'

var headerTitle=document.getElementById('header-title');
//console.log(headerTitle,header)

//console.log(document.getElementById('header-title'))
//headerTitle.style.borderBottom='solid 5px #000'
headerTitle.style.color='red'
headerTitle.textContent="Hello"

var header=document.getElementById('main-header');
header.style.borderBottom='solid 5px #000'

var title=document.getElementsByClassName('title');
console.log(title);
console.log(title.firstElementChild)
title[0].style.color='green'
title[0].style.fontWeight='bold'

var list=document.getElementsByClassName('list-group-item');
console.log(list);
list[2].style.background='green'
for (var i=0;i<list.length;i++){
  list[i].style.fontWeight='bold'
}