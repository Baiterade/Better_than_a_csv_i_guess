const submitPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#post-body').value.trim();

  const response = await fetch('/api/users/newPost', {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to post.');
  }

};

document.querySelector('#submitPost').addEventListener('click', submitPost);
