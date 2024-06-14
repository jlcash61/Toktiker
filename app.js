document.getElementById('tiktok-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tiktokUrl = document.getElementById('tiktok-url').value;
    const strippedUrl = stripTikTokUrl(tiktokUrl);
    displayStrippedUrl(strippedUrl);
});

function stripTikTokUrl(url) {
    const urlObj = new URL(url);
    const strippedPath = urlObj.origin + urlObj.pathname;
    return strippedPath;
}

function displayStrippedUrl(strippedUrl) {
    const embedUrl = getEmbedUrl(strippedUrl);

    document.getElementById('video-url').textContent = strippedUrl;
    document.getElementById('video-url').href = strippedUrl;
    document.getElementById('video-preview').src = embedUrl;
    document.getElementById('result').style.display = 'block';
}

function getEmbedUrl(url) {
    const urlParts = url.split('/');
    const videoId = urlParts[urlParts.length - 1];
    return `https://www.tiktok.com/embed/v2/${videoId}`;
}
