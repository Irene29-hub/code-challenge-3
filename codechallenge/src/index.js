function displayMessage() {
    const message = "Hello, welcome to the code challenge!";
    console.log(message);
//
fetch("http://localhost:3000/posts")
 
    .then(response => response.json())
    .then(data => {
        console.log("Fetched posts:", data);
    })
    .then(post => {
        console.log("Post:", post);
        const postlist = document.getElementById("post-list");
        postlist.innerHTML = "";

        data.forEach(post => {
            const postItem = document.createElement("li");
            postItem.className = "post-item";

            const postTitle = document.createElement("h3");
            postTitle.textContent = post.title;

            const postContent = document.createElement("p");
            postContent.textContent = post.content;
            postItem.appendChild(postTitle);
            postItem.appendChild(postContent);
            postlist.appendChild(postItem);
        });
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
    });
}
    