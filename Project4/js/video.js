const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const video = urlParams.get('video')

document.querySelector("video").src = video
document.querySelector("video source").src = video