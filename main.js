let item = document.querySelector('.items')
item.firstElementChild.textContent="Hello"
item.firstElementChild.style.color='green'
 //item1.style.color='red'
 item.children[1].style.color='yellow'


 const btn = document.querySelector('.btn');
// btn.style.background = 'red';
 btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = 'blue';
    document.querySelector('body').classList.add('bg-dark');
  });

  btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
  });


  btn.addEventListener('mouseout', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = 'white';
    document.querySelector('body').classList.add('bg-dark');
  });