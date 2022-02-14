let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-value').value;

    if (inputValue == '') {
        alert('please enter a value');
    }
    else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = ` <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td><Button class="btn btn-danger delete-btn">Delete</Button>
        <Button class="btn btn-success done-btn">Done</Button></td>`;
        mainContainer.appendChild(tableContainer);
        document.getElementById('input-value').value = '';

        const deleteButton = document.getElementsByClassName('delete-btn');
        const doneButton = document.getElementsByClassName('done-btn');
        for (const button of deleteButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            })
        }
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



