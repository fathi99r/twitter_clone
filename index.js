const addTweetButton = document.getElementById("tweetbtn");
const addTweetText = document.getElementById("tweet-text");
const tweetsWrapper = document.getElementById("post_main_box");
const tweets = [];
addTweetButton.addEventListener("click", (e) => {
  if (addTweetText.value === "") {
    alert("please add text");
    return;
  }
  e.preventDefault();
  tweets.push({ author: "Fathi", tweet: addTweetText.value });
  tweetsWrapper.appendChild(createTweet("Fathi", addTweetText.value));
  addTweetText.value = "";
});
const createTweet = (author, tweet) => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const tweetDiv = document.createElement("div");
  console.log(tweetDiv)
  console.log(minute)
  tweetDiv.classList.add("post_card");

  const content = document.createElement("div");
  content.classList.add("content");
  content.innerHTML = `
  <div class="user_name_time">
  <h5>
    ${author}
    <img src="icon/bluetick.png" alt="" />
    <p>@${author}</p>
  </h5>
  <h6><i class="fa-regular fa-clock"></i>${hour}:${minute}</h6>
</div>
<h3>
  ${tweet}
</h3>`;

  tweetDiv.innerHTML = `
  <div class="post_profile">
    <img src="imges/p1.JPG" alt="" />
  </div>
`;
  tweetDiv.appendChild(content);

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("tweet_card_social_data");

  const retweetButtonWrapper = document.createElement("div");
  retweetButtonWrapper.classList.add("tweet_social_card");
  const retweetButton = document.createElement("button");
  retweetButton.innerHTML = '<i class="fa-solid fa-repeat"></i> ';
  retweetButton.addEventListener("click", (e) => {
    e.preventDefault();
    tweets.push({ author, tweet });
    tweetsWrapper.appendChild(createTweet(author, tweet));
  });

  retweetButtonWrapper.append(retweetButton);
  const likeButtonWrapper = document.createElement("div");
  likeButtonWrapper.classList.add("tweet_social_card");
  const likeButton = document.createElement("button");
  likeButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
  likeButton.addEventListener("click", (e) => {
    if (tweetDiv.style.color === "black") {
      tweetDiv.style.color = "red";
    } else {
      tweetDiv.style.color = "black";
    }
  });
  likeButtonWrapper.appendChild(likeButton);

  buttonsWrapper.append(retweetButtonWrapper, likeButtonWrapper);
  content.appendChild(buttonsWrapper);
  return tweetDiv;
};
