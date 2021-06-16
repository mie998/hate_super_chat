const main = () => {
    const jsLoaded = () => {
        const superChatTicker = document.getElementById("ticker");
        const superChatTicketsContainer = document.querySelector(
            ".style-scope.yt-live-chat-ticker-renderer"
        );
        console.log(superChatTicketsContainer);
        const liveChatSuperChatRenderer = document.getElementsByClassName(
            "style-scope yt-live-chat-item-list-renderer"
        );
        const test = document.querySelector(".ytd-video-owner-renderer");
        const chipBadges = document.getElementById("chip-badges");
        const member = document.getElementsByClassName("member");
        const paidMessages = document.getElementsByClassName(
            "yt-live-chat-paid-message-renderer"
        );

        superChatTicker.style.display = "none !important";
        superChatTicketsContainer.style.display = "none !important";
        test.style.display = "none";
    };
    setTimeout(jsLoaded, 300);
};

window.addEventListener("load", main, false);
