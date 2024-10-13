let contacts = [];
let contactCounter = 1;

function updateProfile() {
    const avatarUrl = document.getElementById('avatarUrl').value;
    const newUsername = document.getElementById('newUsername').value;

    document.getElementById('usernameLink').textContent = newUsername;
    document.querySelector('.avatar').style.backgroundImage = `url('${avatarUrl}')`;
}

function updateName() {
    const newUsername = document.getElementById('newUsername').value;
    document.getElementById('usernameLink').textContent = newUsername;
}

function addContact() {
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;

    if (contactName && contactPhone) {
        contacts.push({ name: contactName, phone: contactPhone });
        displayContacts();
        clearContactInputs();
    }
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${contact.name}, ${contact.phone}`;
        contactList.appendChild(li);
    });
}

function clearContactInputs() {
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
}

function exportContacts() {
    if (contacts.length === 0) {
        alert('ไม่มีข้อมูลสำหรับดาวน์โหลด');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ชื่อ,เบอร์โทร\n";

    contacts.forEach(contact => {
        csvContent += `${contact.name},${contact.phone}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
