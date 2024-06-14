document.getElementById('tiktok-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tiktokUrl = document.getElementById('tiktok-url').value;
    const strippedUrl = stripTikTokUrl(tiktokUrl);
    displayStrippedUrl(strippedUrl);
});

function stripTikTokUrl(url) {
    // Create a URL object
    const urlObj = new URL(url);
    // Extract the pathname (the part before any query parameters)
    const strippedPath = urlObj.origin + urlObj.pathname;
    return strippedPath;
}

function displayStrippedUrl(strippedUrl) {
    document.getElementById('video-url').textContent = strippedUrl;
    document.getElementById('video-url').href = strippedUrl;
    document.getElementById('result').style.display = 'block';
}
