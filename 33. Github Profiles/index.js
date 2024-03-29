const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// get user form api
async function getUser(username){
    try {
        const {data} = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)

    }catch(err){
        if(err.response.status == 404){
            createErrorCard('No profile with that username found')
        }
    }
}

// get repo
async function getRepos(username) {
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)

    }catch(err){
        createErrorCard('Oops! something went wrong!')
    }
}

function createUserCard(user){
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
            
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repositories</strong></li>
                </ul>

                <div id="repos">
                </div>

            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h2> ${msg} </h2>
        </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoLink = document.createElement('a')
            repoLink.classList.add('repo')
            repoLink.href = repo.html_url
            repoLink.target ='_blank'
            repoLink.innerText = repo.name

            reposEl.appendChild(repoLink)
        })
}

// on submit get user
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user){
        getUser(user)

        search.value =''
    }
})