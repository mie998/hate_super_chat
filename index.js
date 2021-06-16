const superChatTicketRenderer = document.getElementsByClassName(
    "yt-live-chat-ticker-renderer"
);
const liveChatSuperChatRenderer = document.getElementsByClassName(
    "yt-live-chat-item-list-renderer"
);
const chipBadges = document.getElementById("chip-badges");
const member = document.getElementsByClassName("member");
const paidMessages = document.getElementsByClassName(
    "yt-live-chat-paid-message-renderer"
);

const elementDiscards = [
    superChatTicketRenderer,
    liveChatSuperChatRenderer,
    chipBadges,
];
const StyleChanges = [member, paidMessages];

elementDiscards.map((e) => {
    e.style.display = "none";
});
