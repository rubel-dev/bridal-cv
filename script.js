document.getElementById('bridalForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const height = document.getElementById('height').value;
    const hobbies = document.getElementById('hobbies').value;
    const education = document.getElementById('education').value;
    const languages = document.getElementById('languages').value;
    const occupation = document.getElementById('occupation').value;
    const email = document.getElementById('email').value;
    const father = document.getElementById('father_name').value;
    const mother = document.getElementById('mother_name').value;
    const sibling = document.getElementById('siblings').value;
    const phone = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const photo = document.getElementById('photo').files[0];

    // Display form values
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayDob').textContent = dob;
    document.getElementById('displayHeight').textContent = height;
    document.getElementById('displayHobbies').textContent = hobbies;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayLanguages').textContent = languages;
    document.getElementById('displayOccupation').textContent = occupation;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayFname').textContent = father;
    document.getElementById('displayMname').textContent = mother;
    document.getElementById('displaySiblings').textContent = sibling;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayAddress').textContent = address;

    // Display photo
    const photoDisplay = document.getElementById('displayPhoto');
    const reader = new FileReader();
    reader.onload = function (e) {
        photoDisplay.src = e.target.result;
    };
    reader.readAsDataURL(photo);

    // Show result section
    document.getElementById('result').classList.remove('hidden');
});
