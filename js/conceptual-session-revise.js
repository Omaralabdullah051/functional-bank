let count = 0;

document.getElementById('add-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-value');
    if (inputValue.value == '') {
        alert('bhai,kicu ektato likhen input e');
    }
    else {
        count++;
        const inputValue = document.getElementById('input-value');
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${count}</th> <td>${inputValue.value}</td> <td><Button class="btn btn-danger delete-btn">Delete</Button> <Button class="btn btn-success done-btn">Done</Button></td>`;
        const parent = document.getElementById('content-container');
        parent.appendChild(tr);

        inputValue.value = '';

        const deleteButton = document.getElementsByClassName('delete-btn');
        for (const button of deleteButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            })
        }

        const doneButton = document.getElementsByClassName('done-btn');
        for (const button of doneButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            })
        }
    }
})

document.getElementById('all-delete').addEventListener('click', function () {
    document.getElementById('content-container').style.display = 'none';
})