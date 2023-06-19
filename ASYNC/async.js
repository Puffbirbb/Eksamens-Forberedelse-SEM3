// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getUsers() {
    try {
        const users = await get(userUrl);
        document.getElementById('users').innerHTML = users.map(user => `<tr><td>${user.name}</td><td>${user.id}</td></tr>`).join('');
    } catch (e) {
        console.log(e.message);
    }
}

getUsers();

async function getPosts(id) {
    try {
        const posts = await get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        document.getElementById('posts').innerHTML = posts.map(post => `<tr><td>${post.title}</td><td>${post.body}</td></tr>`).join('');
    } catch (e) {
        console.log(e.message);
    }
}

document.getElementById('users').addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        getPosts(e.target.textContent);
    }
});