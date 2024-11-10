document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Capture the form data
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const links = document.getElementById('links').value;
    const imageFile = document.getElementById('image').files[0];
    
    // Display the data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayTitle').textContent = title;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayLocation').textContent = location;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayExperience').textContent = experience;
    document.getElementById('displaySkills').textContent = skills;
    document.getElementById('displayLinks').textContent = links;
  
    // Handle the image upload
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('displayImage').src = e.target.result;
      };
      reader.readAsDataURL(imageFile);
    }
  
    // Show the resume display section and hide the form
    document.getElementById('resumeDisplay').style.display = 'block';
    document.getElementById('resumeForm').style.display = 'none';
  });
  