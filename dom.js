//console.dir(document);

// console.log(document.getElementById('main-header'));
// console.log(document.getElementById('header-title'))
// //var header=document.getElementById('main-header');
// //header.style.borderBottom='solid 5px #000'
// //header.textContent='Hello'
// //header.innerHTML='<h1>Hello</h1>'

// var headerTitle=document.getElementById('header-title');
// //console.log(headerTitle,header)

// //console.log(document.getElementById('header-title'))
// //headerTitle.style.borderBottom='solid 5px #000'
// headerTitle.style.color='red'
// headerTitle.textContent="Hello"

// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 5px #000'

// var title=document.getElementsByClassName('title');
// console.log(title);
// console.log(title.firstElementChild)
// title[0].style.color='green'
// title[0].style.fontWeight='bold'

// var list=document.getElementsByClassName('list-group-item');
// console.log(list);
// //list[2].style.background='green'
// for (var i=0;i<list.length;i++){
//   list[i].style.fontWeight='bold'
// }

// var item5=document.getElementsByTagName('li');
// console.log(item5);
// item5[4].style.color='orange'
// item5[4].style.fontWeight='bold'
// item5[4].style.backgroundColor='red'
// item5[4].innerHTML='<h1>Item 5</h1>'


// Queryselector

// var item =document.querySelector('.list-group-item');
// console.log(item);
// item.style.color='coral';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// console.log(secondItem);
// //secondItem.style.background='green'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden'

// QueryselectorAll
// var Item=document.querySelectorAll('.list-group-item');
// console.log(Item[1].textContent);
// Item[1].style.color='green'

// for (i=0;i<Item.length;i++){
//   if (i%2===0){
//     Item[i].style.background='grey'
//   }
//   else{
//     Item[i].style.background='darkgrey'
//   }
// }

// var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
// var even=document.querySelectorAll('.list-group-item:nth-child(even)');
// console.log(odd);
// console.log(even);

// for (var i=0;i<odd.length;i++){
//   odd[i].style.background='grey';
//   even[i].style.background='darkgrey';
// }

// parentElement
var itemList=document.querySelector('#items');
console.log(itemList);
console.log(itemList.parentElement)
console.log(itemList.parentNode)
itemList.parentElement.style.background='red'
itemList.parentNode.style.background='yellow'
console.log(itemList.parentElement.parentElement.parentElement)

//lastelememtchild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='hello 4'

// lastchild
console.log(itemList.lastElementChild.lastChild)

// createchild
// newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello Div');

// var newDivText=document.createTextNode('Hello world');
// newDiv.appendChild(newDivText)

// //var container=document.querySelector('header .container');
// container=document.querySelector('.container')
// var h1 =document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

//firstelementchild

console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='Hello 1'

//nextElementSibling

console.log(itemList.nextElementSibling)

//previoussibling

console.log(itemList.previousElementSibling)


// creating second element

newText=document.createTextNode('HEllo');

var container=document.querySelector('header .container')
console.log(container)
var item_lister=document.querySelector('header h1');

container.insertBefore(newText,item_lister)

//////

newText=document.createTextNode('HEllo');

var container=document.querySelector('ul')
console.log(container)
var item_lister=document.querySelector('.list-group-item');

container.insertBefore(newText,item_lister)
