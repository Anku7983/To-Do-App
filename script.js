const inputbox = document.getElementById('input-box')
const Listcontainer = document.getElementById('list-container')
document.getElementById('b').addEventListener('click',function(){
    if(inputbox.value===''){
        alert('you must write something ')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputbox.value;
        Listcontainer.appendChild(li)
        //cross icon 
        let span  = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputbox.value = '';
    savedata();
})

Listcontainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem('data',Listcontainer.innerHTML);
}

function showtask(){
    Listcontainer.innerHTML = localStorage.getItem('data')
}
showtask();