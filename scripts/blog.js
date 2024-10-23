function get() {
    try {    
        fetch('https://www.googleapis.com/blogger/v3/blogs/7484429055984700683/posts?key=AIzaSyCIDuDGGA6P1Ew32cCw6wMxqgm367Hq2b0')
        .then(res => res.json())
        .then(
            res => whitePosts(res.items) 
    );
    } catch {

    }
}
//get()
function whitePosts(posts){
   let contentBlog = document.getElementById("footer")

   contentBlog.innerHTML = posts[0].content;
}