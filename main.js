//coisa minha//

alert('NHAw')

// código memo

const linksSM = {
  github: 'ErickyAll',
  youtube: 'Felipeneto',
  facebook: 'Lula',
  instagram: 'rick_allmeida_',
  twitter: 'lucasinutilismo'
}

function changeLSM() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSM[social]}`
  }
}

changeLSM()

function getGitHubProfile() {
  const url = `https://api.github.com/users/${linksSM.github}`
  //promise
  fetch(url)
    .then(response => response.json())
    .then(data => {
      picAvatar.src = data.avatar_url
      Github.href = data.html_url
      userLogin.textContent = data.login
      //bio.textContent = data.bio
      //userName.textContent = data.name
    })
}

getGitHubProfile()
