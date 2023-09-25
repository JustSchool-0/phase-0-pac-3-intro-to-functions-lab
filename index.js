
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) { // This doesn't cover the case of only part of `string` being capitalized...?
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
    return "YES INDEED!";
}

console.log(sayHiToHeadphonedRoommate("Testing"));