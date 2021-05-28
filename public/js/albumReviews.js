const feedbackForm = document.querySelector('.feedback-form');

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
})

function appendFeedback(reviewData){
  const reviewContainer = document.querySelector('.review');
  const reviewNum = (reviewData.length > 4 && 4) || reviewData.length;
  let newReviews = '';
  
  for(let i = 0; i < reviewNum; i++) {
    newReviews += `<li class="review-title">"${reviewData[i].username}" wrote (for ${reviewData[i].album.trim()}):</li> <br> `;
    newReviews += `<div class="review-message">${reviewData[i].message}</div> <br>`;
    newReviews += `<div><i class="gg-close-o">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRemove</i></div> <br> <br> `;
  }

  reviewContainer.innerHTML = newReviews;
}