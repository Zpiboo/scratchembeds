const urlParameters = new URLSearchParams(location.search);
var projectID = urlParameters.get("id");
const apiEndpoint = "https://api.scratch.mit.edu";

fetch(`${apiEndpoint}/projects/${projectID}`, {mode:"cors"})
  .then(function () {
    if (this.readyState == 4) {
      document.body.innerText = projectRequest.responseText;
    }
  });