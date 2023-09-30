var userslist = document.getElementById('users');

//userslist.addEventListener('click',onClick);



function savetolocalstorage(event){
    event.preventDefault();
    //console.log('hi')
    //console.log(event.target[0].value);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    console.log(name)

    var obj={
        name:name,
        email:email,
        phone:phone

    };

    var users=document.getElementById('users');

    var li = document.createElement('li');
    var btn = document.createElement('button');

    btn.id='button';
    btn.appendChild(document.createTextNode('Delete'));

    btn.addEventListener('click',clicked);

    function clicked(e){
        console.log('hi',obj,e.target)
        var li = e.target.parentElement;
        users.removeChild(li);
        
        localStorage.removeItem(obj.email);

    }

    li.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
    li.appendChild(btn)
    users.appendChild(li)
    console.log(li)

    var objString=JSON.stringify(obj);

    localStorage.setItem(email,objString);

    

}



// function onClick(e){
//     //console.log('clicked')
//     var li =e.target.parentElement;
//     console.log(e.value,li)
//     console.log(ojb.email)
//     if(e.target.id==='button'){
//         var li =e.target.parentElement;
//         users.removeChild(li);
//     };


// }