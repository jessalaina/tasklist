const listGroup = document.querySelector('ul');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

function addLis() {
    // create li element
    const lis = document.createElement('li');
    // create text node for li
    const text = document.createTextNode(input.value);
    //create checkbox 
    let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = 1;
        checkbox.name = 'todo[]';
    // append checkbox to li
    lis.appendChild(checkbox);
    // append text node to li node
    lis.appendChild(text);
    // append li to ul
    listGroup.appendChild(lis);
    // remove input value
    input.value = '';
}


// click button to add task to list
btn.addEventListener('click', function() {
    if(input.value.length != 0) {
        if (input.value.length != 0) {
            addLis();
        } 
    }
})

// keypress to add task to list
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter' && input.value.length != 0) {
        addLis();
    }
})