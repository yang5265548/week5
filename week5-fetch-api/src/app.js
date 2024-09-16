// app.js

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const blog = {
    title: 'New Blog',
    body: 'This is the content of the new blog.',
    userId: 1,
};

const blogId = 1;

const addBlog = async () => {

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Failed to add a new blog");
        }
        const json = await response.json();
        console.log('New Blog added:', json);
    } catch (error) {
        console.error("Error adding blog:", error.message);
    }
};

// Example Usage
addBlog();

const fetchBlogs = async () => {
   try {
     const response = await fetch(apiUrl);
     const data = await response.json();
     console.log('All Blogs:', data);
   } catch (error) {
    console.error("Error fetching blogs:", error.message);
   }
};

// Example Usage
fetchBlogs();


const fetchBlog = async (id) => {
  try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      console.log('Single Blog:', data);
  } catch (error) {
    console.error("Error fetching a blog:", error.message);
  }
};

// Example Usage
fetchBlog(blogId);

const blogIdToUpdate = 1; // Replace with the desired blog ID for testing
const updatedData = { title: 'Updated Blog', body: 'This blog has been updated.' };

const updateBlog = async (blogId, updatedData) => {
    try {
        const response = await fetch(`${apiUrl}/${blogId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error("Failed to update the blog");
          }
    
        const updatedBlog = await response.json();
        console.log('Blog updated:', updatedBlog);
    } catch (error) {
        console.error("Error updating blog:", error.message);
    }
};

// Example Usage
updateBlog(blogIdToUpdate, updatedData);


const blogIdToDelete = 1; // Replace with the desired blog ID for testing

const deleteBlog = async (blogId) => {

try {
       const response= await fetch(`${apiUrl}/${blogId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Failed to delete the blog");
          }
    
        console.log('Blog deleted successfully');
} catch (error) {
    console.error("Error deleting blog:", error.message);
}
};

// Example Usage
deleteBlog(blogIdToDelete);