document.getElementById('submitbtn').addEventListener('click', function () {
    const fields = ['firstname', 'lastname', 'email'];
    let allValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const existingError = input.nextElementSibling;
        if (input.value.trim() == "") {
            if (!existingError || !existingError.classList.contains("error")) {
                const errorSpan = document.createElement('span');
                errorSpan.classList.add('error');
                errorSpan.textContent = `${field} is required`;
                input.insertAdjacentElement('afterend', errorSpan);
            }
            allValid = false;
        } else {
            if (existingError && existingError.classList.contains("error")) {
                existingError.remove();
            }
        }
    });

    if (allValid) {
        createTable();
    } else {
        document.getElementById('tablecontainer').innerHTML = "";
    }
});

document.getElementById('cancelbtn').addEventListener('click', function () {
    const form = document.getElementById('form');
    form.reset();
    document.querySelectorAll('.error').forEach(errorspan => errorspan.remove());
    document.getElementById('tablecontainer').innerHTML = '';
});

function createTable() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkboxes = Array.from(document.querySelectorAll('input[name="options"]:checked')).map(element => element.value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const comment = document.getElementById('commant').value.trim();
    const dropdown = document.getElementById('dropdown').value;

    const tableHTML = `
    <table>
        <tr><th>Firstname</th><td>${firstname}</td></tr>
        <tr><th>Lastname</th><td>${lastname}</td></tr>
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>Options</th><td>${checkboxes.join('; ')}</td></tr>
        <tr><th>Gender</th><td>${gender}</td></tr>
        <tr><th>Comment</th><td>${comment}</td></tr>
        <tr><th>Dropdown</th><td>${dropdown}</td></tr>
    </table>
    `;
    document.getElementById('tablecontainer').innerHTML = tableHTML;
}