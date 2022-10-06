function newFormHandler() {
    document.location.replace('/create-post');
  }

  document.querySelector('create-post-button').addEventListener('submit', newFormHandler);