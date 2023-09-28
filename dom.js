var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');




form .addEventListener('submit',addItem);
filter.addEventListener('keyup',filterItems);



function addItem(e){
  e.preventDefault();
  //console.log(e.target.value)
  var newItem=document.getElementById('item').value;
  var newDescription=document.getElementById('description').value;
  console.log(newItem);

  var li =document.createElement('li');

  var newButton=document.createElement('button');
  var newEditBtn=document.createElement('button');

  li.className='list-group-item' ;
  newButton.className='btn btn-danger btn-sm float-right delete';
  newEditBtn.className='btn btn-info btn-sm float-right delete'

  li.appendChild(document.createTextNode(`${newItem} ${newDescription}`));
  newButton.appendChild(document.createTextNode('X'));
  newEditBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(newEditBtn);
  li.append(newButton);
  

  itemList.appendChild(li)
  console.log(li)

}

function filterItems(e){
  console.log(e.target.value);

  var text=e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  console.log(text)
}