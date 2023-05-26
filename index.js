var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};
var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};
var users = {};
users["user1"]=user1;
users["user2"]=user2;

const urlParams = new URLSearchParams(window.location.search);
var user = urlParams.get("user");
var followers = (users[user].followerCount/1000000);

var verifiedBadge = `<img class="verified-badge"
                     src="assets/Twitter_Verified_Badge.svg.png" />`;
var displayName = users[user].displayName + verifiedBadge;
var tweetButtons = `
    <div>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">
    <g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0
    8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054
    4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317
    0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138
    6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13
    3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>&nbsp;&nbsp;
    5.2K</div>

    <div>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
    r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5
    7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432
    9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4
    4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46
    2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>&nbsp;&nbsp;
    7.7K </div>

    <div>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
    r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89
    2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304
    5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479
    4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64
    7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187
    7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79
    2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45
    3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846
    4.17-.514 6.67z"></path></g></svg>&nbsp;&nbsp;
    65.2K</div>
    
    <div>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9
    r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr
    r-1hdv0qi"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13
    6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0
    1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0
    .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
    </div>
`;

function calculateTimeElapsed(dateTimeString) {
  var startTime = new Date(dateTimeString);
  var currentTime = new Date();
  var timeElapsed = currentTime - startTime;
  
  var minute = 60 * 1000;
  var hour = 60 * minute;
  var day = 24 * hour;
  var week = 7 * day;
  var month = 30 * day;
  var year = 365 * day;
  
  if (timeElapsed >= year) {
    return Math.floor(timeElapsed / year) + 'y';
  } else if (timeElapsed >= month) {
    return Math.floor(timeElapsed / month) + 'mo';
  } else if (timeElapsed >= week) {
    return Math.floor(timeElapsed / week) + 'w';
  } else if (timeElapsed >= day) {
    return Math.floor(timeElapsed / day) + 'd';
  } else if (timeElapsed >= hour) {
    return Math.floor(timeElapsed / hour) + 'h';
  } else {
    return Math.floor(timeElapsed / minute) + 'm';
  }
}

$(".display-name-box").html(`
    <div class="display-name">${displayName}</div>
    <div class="tweet-count">${users[user].tweets.length} Tweets</div>
`);
$("#cover").css("background-image", `url(${users[user].coverPhotoURL})`);
$(".profile-photo").css("background-image", `url(${users[user].avatarURL})`)
$(".user-details").html(`
    <p class="display-name">${displayName}</p>
    <p class="username">${users[user].userName}</p>
    <p class="joined">
      <svg viewBox="0 0 24 24" class="cal-icon">
        <g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21
        6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3
        18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27
        0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28
        0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0
        6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z">
        </path></g>
      </svg> Joined ${users[user].joinedDate}
    </p>
    <p class="follow-stats">
        <span class="bold">${users[user].followingCount}</span> Following&nbsp;&nbsp;
        <span class="bold">${followers}M</span> Followers
    </p>
`);
$.each(users[user].tweets, function(index, value) {
    $(".tweet-feed").append(`
        <div class="tweet-container">
          <div class="tweet-profile-photo"></div>
          <div class="tweet-box">
            <div>
                <span class="display-name">${displayName}</span>
                <span class="timestamp">${users[user].userName} ${calculateTimeElapsed(value["timestamp"])}</span>
            </div>
            <div>${value["text"]}</div>
            <div class="tweet-btns">${tweetButtons}</div>
          </div>
        </div>
    `);
});
$(".tweet-profile-photo").css("background-image", `url(${users[user].avatarURL})`);


