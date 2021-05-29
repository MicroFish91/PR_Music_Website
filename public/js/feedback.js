import { appendFeedback, deleteReview } from './helpers/feedbackHelpers.js';

const feedbackForm = document.querySelector('.feedback-form');
const formContainer = document.querySelector('.album-feedback');

// Deletes Data
formContainer.addEventListener('click', e => {
  if(e.target.id[0] === 'b'){
    const id = e.target.id.slice(1);
    fetch(`/api/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       }
    })
    .then(res => console.log(`id: ${id} deleted`))
    deleteReview(id);
  }
});

// Posts Form Data
feedbackForm.addEventListener('submit', async e => {
  e.preventDefault();
  
  const formObj = {
    username: document.querySelector('#form-username').value,
    album: document.querySelector('#form-album').value,
    message: document.querySelector('#form-message').value
  }

  const postJSON = await fetch('/api', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formObj)
  });
  const postData = await postJSON.json();

  appendFeedback(postData);
});