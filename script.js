const urlParameters = new URLSearchParams(location.search);
var projectID = urlParameters.get("id");

if (projectID) {
  console.log(projectID);
}
