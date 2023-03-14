//alert("halu");

// fetch() method in Javascript is used to send request in the server and load the received response in the webpage/s. The request and response is in JSON formant.

/*
	Syntax:
		fetch("url", {options})
	url - this is the address which the request is to be made and source where the response will come from (endpoint)
			options - array or properties that contains the HTTP method, body of request and headers.

*/

// Get post data / retrieve function
// Get Post Data / Retrieve Function
fetch("https://jsonplaceholder.typicode.com/posts")
	.then(response => response.json())
	.then(data => showPosts(data));

// VIEW POST - used to display each post from JSON placeholder.
const showPosts = (posts) => {
	//Create a variable that will contain all the posts
	let postEntries = "";

	// To iterate each posts from the API 
	posts.forEach((post) => {
		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onClick="editPost('${post.id}')">Edit</button>
				<button onClick="deletePost('${post.id}')">Delete</button
			</div>
		`
	});

	// To check what is stored in the postEntries variables.
	console.log(postEntries);

	// To assign the value of postEntries to the element with "div-post-entries" id.
	document.querySelector("#div-post-entries").innerHTML = postEntries;
}

fetch("https://jsonplaceholder.typicode.com/posts/50")
	.then(response => response.json())
	.then(data => showPosts(data));

document.querySelector("#form-add-post").addEventListener("submit", e => {
	e.preventDefault();
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: document.querySelector("#txt-title").value,
			body: document.querySelector("#txt-body").value,
			userId: 1
		}),
		headers: {
			"content-Type": "application/json"
		}
	}).then(response => response.json())
	.then(data => {
		console.log(data);
		alert("post successfully added");
	});
	document.querySelector("#txt-title").value = null;
	document.querySelector("#txt-body").value = null;
});

// EDIT Post Data
const editPost = (id) => {
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector("#txt-edit-id").value = id;
	document.querySelector("#txt-edit-title").value = title;
	document.querySelector("#txt-edit-body").value = body;

	document.querySelector("#btn-submit-update").removeAttribute("disabled");
};

document.querySelector("#form-edit-post").addEventListener("submit", e => {
	e.preventDefault();
	let id = document.querySelector("#txt-edit-id").value

	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: "put",
		body: JSON.stringify({
			id: id,
			title: document.querySelector("#txt-edit-title").value,
			body: document.querySelector("#txt-edit-body").value,
			userId: 1
		}),
		headers: {
			"content-Type": "application/json"
		}
	}).then(res => res.json())
		.then(data => {
			console.log(data);
			alert("Post successfully Updated")
		});

		document.querySelector("#txt-edit-title").value = null;
		document.querySelector("#txt-edit-body").value = null;

		document.querySelector("#btn-submit-update").setAttribute("disabled", true);
});