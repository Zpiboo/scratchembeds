const urlParameters = new URLSearchParams(location.search);
var projectID = urlParameters.get("id");
const apiEndpoint = "https://api.scratch.mit.edu";

var projectRequest = new XMLHttpRequest();
projectRequest.onreadystatechange = function () {
  if (this.readyState == 4) {
    document.body.innerText = projectRequest.responseText;
  }
};

projectRequest.open("GET", `${apiEndpoint}/projects/${projectID}`);
projectRequest.setRequestHeader("Access-Control-Allow-Origin", "https://zpiboo.github.io/");
projectRequest.send();
