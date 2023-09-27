var form = document.getElementById('addForm');
var itemList=document.getElementById('items')




form .addEventListener('submit',addItem);




function addItem(e){
  e.preventDefault();

  var newItem=document.getElementById('item').value;
  console.log(newItem);

  var li =document.createElement('li');

  var newButton=document.createElement('button');
  var newEditBtn=document.createElement('button');

  li.className='list-group-item' ;
  newButton.className='btn btn-danger btn-sm float-right delete';
  newEditBtn.className='btn btn-danger btn-sm float-right delete'

  li.appendChild(document.createTextNode(newItem));
  newButton.appendChild(document.createTextNode('X'));
  newEditBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(newEditBtn);
  li.append(newButton);
  

  itemList.appendChild(li)
  console.log(li)

}