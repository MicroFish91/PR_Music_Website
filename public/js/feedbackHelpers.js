function appendFeedback(reviewData){
  const reviewContainer = document.querySelector('.review');
  const reviewNum = (reviewData.length > 4 && 4) || reviewData.length;
  let newReviews = '';
  
  for(let i = 0; i < reviewNum; i++) {
    newReviews += `<div id="${reviewData[i].id}"><li class="review-title">"${reviewData[i].username}" wrote (for: ${reviewData[i].album.trim()}):</li> <br> `;
    newReviews += `<div class="review-message">${reviewData[i].message}</div> <br>`;
    newReviews += `<div><i id="b${reviewData[i].id}" class="gg-close-o delete-button">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRemove</i></div> <br> <br> </div>`;
  }

  console.log(reviewData);

  reviewContainer.innerHTML = newReviews;
}

function deleteReview(id){
  const reviewItem = document.getElementById(id);
  let reviewContainer;
  reviewItem.remove();
  reviewContainer = document.querySelector('.review>div');
  (reviewContainer === null) && fetchReviews();
}

async function fetchReviews(){
  const feedbackJSON = await fetch('/api');
  const feedbackData = await feedbackJSON.json();
  appendFeedback(feedbackData.albumFeedback);
}

export { appendFeedback, deleteReview };

