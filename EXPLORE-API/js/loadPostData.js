
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(posts) {
    //loop ar vitor dile bar bar khoje niye ashbe, bar bar dorkar nai,tai loop ar baire dilam r ki
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const postDiv = document.createElement('div');
        // create class(post) in js
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPost();