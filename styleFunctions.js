// Some functions that change the stylings

function showInfoBox() {
    var contactInfoBox = document.querySelector(".contact-info");
    contactInfoBox.style.display = "block";
}

function hideInfoBox() {
    var contactInfoBox = document.querySelector(".contact-info");
    contactInfoBox.style.display = "none";
}

function showAddContactBox() {
    var addContactBox = document.querySelector(".new-contact");
    document.getElementById('new-contact-header').innerHTML = "Add a new contact";
    document.getElementById('new-contact-form').style.display = 'block';
    addContactBox.style.display = "block";
}

function hideAddContactBox() {
    var addContactBox = document.querySelector(".new-contact");
    addContactBox.style.display = "none";
}

function resetNewContactLabels() {
    document.getElementById("name-label").style.display = 'none';
    document.getElementById("email-label").style.display = 'none';
    document.getElementById("used-email-label").style.display = 'none';
    document.getElementById("phone-label").style.display = 'none';
    document.getElementById("age-label").style.display = 'none';
}

function resetNewContactFields() {
    document.getElementById("new-name").value = '';
    document.getElementById("new-email").value = '';
    document.getElementById("new-phone").value = '';
    document.getElementById("new-age").value = '';
}