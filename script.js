document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  const profileCard = document.getElementById('profile-card');
  const avatar = document.getElementById('avatar');
  const name = document.getElementById('name');
  const country = document.getElementById('country');
  const email = document.getElementById('email');
  const saveBtn = document.getElementById('save');
  const savedProfilesList = document.getElementById('saved-profiles');

  // Array en memoria para los perfiles guardados
  let savedProfiles = [];

  generateBtn.addEventListener('click', async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];

    avatar.src = user.picture.large;
    name.textContent = `${user.name.first} ${user.name.last}`;
    country.textContent = user.location.country;
    email.textContent = user.email;

    profileCard.classList.remove('hidden');
  });

  saveBtn.addEventListener('click', () => {
    const profile = {
      avatar: avatar.src,
      name: name.textContent,
      country: country.textContent,
      email: email.textContent
    };
    savedProfiles.push(profile);
    renderSavedProfiles();
  });

  function renderSavedProfiles() {
    savedProfilesList.innerHTML = '';
    savedProfiles.forEach((profile, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${profile.avatar}" alt="Avatar" style="width:36px;height:36px;border-radius:50%;border:2px solid #007bff33;">
          <span><strong>${profile.name}</strong> (${profile.country})<br><small>${profile.email}</small></span>
        </div>
        <button style="background:#ff4d4f;border:none;color:#fff;padding:4px 10px;border-radius:5px;cursor:pointer;" data-idx="${idx}">🗑️</button>
      `;
      li.querySelector('button').onclick = function() {
        savedProfiles.splice(idx, 1);
        renderSavedProfiles();
      };
      savedProfilesList.appendChild(li);
    });
  }
});