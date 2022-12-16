async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="Post-title"]').value;
    const post_text = document.querySelector('textarea[name="Post-text"]').value;

    const response = await fetch(`/api/Posts`, {
      method: 'Post',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.new-Post-form').addEventListener('submit', newFormHandler);