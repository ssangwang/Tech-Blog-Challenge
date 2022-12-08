var createPost = async (event) => {
    event.preventDefault();
  
    const post = document.querySelector('#add-post').value;
    const title = document.querySelector('#add-title').value;

    if (post) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ post, title }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to post');
      }
    }
  };

  document
  .querySelector('.post-form')
  .addEventListener('submit', createPost);