const addbtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#task-input');
const ul = document.querySelector("#todo-list");
addbtn.addEventListener('click',function(){
    var li = document.createElement('li');
    var txt = taskInput.value;
    li.classList.add('todo-item');
    li.innerHTML = `<span class="task-content">${txt}</span>
                <button class="done-btn">
                    <span class="material-symbols-outlined">check</span>
                </button>
                <button class="update-btn">
                    <span class="material-icons">edit</span> <!-- Edit icon -->
                </button>
                <button class="delete-btn">
                    <span class="material-icons">delete</span> <!-- Delete icon -->
                </button>`;
    ul.appendChild(li);
    taskInput.value = "";
    document.querySelector('p').style.display = 'block';
    setTimeout(() => {
        document.querySelector('p').style.display= 'none';
    }, 2000);
});


ul.addEventListener('click',function(event){
    if(event.target.innerHTML=='check'){
        event.target.parentElement.parentElement.children[0].classList.add('completed');

        console.log(event.target.parentElement.parentElement.children[0].classList);
    }else if(event.target.innerHTML=='delete'){
        if(event.target.parentElement.parentElement.children[0].classList.contains('completed')){
            event.target.parentElement.parentElement.remove();
        }
    }
});


/*
else if(event.target.innerHTML=='edit'){
        // console.log(event.target.innerHTML);
    }
*/ 