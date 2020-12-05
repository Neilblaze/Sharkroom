if ("webkitSpeechRecognition" in window) {
  var speechRecognizer = new webkitSpeechRecognition();
  speechRecognizer.continuous = true;
  speechRecognizer.interimResults = true;
  speechRecognizer.lang = "en-US";
  speechRecognizer.start();
  var finalTranscripts = "";

  speechRecognizer.onresult = function (e) {
    var interimTranscripts = "";

    for (var i = e.resultIndex; i < e.results.length; i++) {
      var transcript = e.results[i][0].transcript;

      if (e.results[i].isFinal) {
        finalTranscripts += transcript;
      } else {
        interimTranscripts += transcript;
      }
    }

    console.log(finalTranscripts + interimTranscripts);
    document.querySelector(".speech2text").innerText = finalTranscripts + interimTranscripts;
  };
}
