const ytdl = require("youtube-dl");
const fs = require("fs");
const url = "https://www.youtube.com/watch?v=XXXXXXXXXXX";
const options = ["--extract-audio", "--audio-format=mp3"];

ytdl.exec(url, options, {}, function(err, output) {
  if (err) throw err;
  console.log(output.join("\n"));
  const file = output[output.length - 1];
  fs.rename(file, file.replace(/\.\w+$/, ".mp3"), function(err) {
    if (err) throw err;
    console.log("File renamed");
  });
});
