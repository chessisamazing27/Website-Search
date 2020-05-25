function init() {
    var submit_button = document.getElementById("submit_button")
    submit_button.onclick = function() {
        chrome.tabs.create({
            url:'chrome://extensions/configureCommands'
        })
    }

    var google_search_button = document.getElementById("google_search_button")
    google_search_button.onclick = function() {
        var search_query = document.getElementById("google_search_query").value
        if (search_query) {
            var newURL = "https://www.google.com/search?q=" + search_query
            chrome.tabs.create({ url: newURL })
        }
    }
    var amazon_search_button = document.getElementById("amazon_search_button")
    amazon_search_button.onclick = function() {
        var search_query = document.getElementById("amazon_search_query").value
        if (search_query) {
            var newURL = "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + search_query
            chrome.tabs.create({ url: newURL })
        }
    }
    var youtube_search_button = document.getElementById("youtube_search_button")
    youtube_search_button.onclick = function() {
        var search_query = document.getElementById("youtube_search_query").value
        if (search_query) {
            var newURL = "https://www.youtube.com/results?search_query=" + search_query
            chrome.tabs.create({ url: newURL })
        }
    }
    var reddit_search_button = document.getElementById("reddit_search_button")
    reddit_search_button.onclick = function() {
        var search_query = document.getElementById("reddit_search_query").value
        if (search_query) {
            var newURL = "https://www.reddit.com/search/?q=" + search_query
            chrome.tabs.create({ url: newURL })
        }
    }
    var google_image_search_button = document.getElementById("google_image_search_button")
    google_image_search_button.onclick = function() {
        var search_query = document.getElementById("google_image_search_query").value
        if (search_query) {
            var newURL = "https://www.google.com/search?tbm=isch&q=" + search_query
            chrome.tabs.create({ url: newURL })
        }
    }




}
window.onload = init

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {


    }
);