document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display data when the DOM is fully loaded
});
document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Function to fetch posts from the API
  async function fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const posts = await response.json();

      // Display the posts on the page
      displayPosts(posts);
    } catch (error) {
      contentDiv.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
    }
  }

  // Function to dynamically update the DOM
  function displayPosts(posts) {
    contentDiv.innerHTML = ""; // Clear previous content
    posts.slice(0, 5).forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `
                <h2>${post.userId}</h2>
                <h2>${post.id}</h2>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
      contentDiv.appendChild(postDiv);
    });
  }

  // Fetch and display posts
  fetchPosts();
});
