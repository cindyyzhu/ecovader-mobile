//continuous animation loops
timedLoop(1000, function() {
  hideElement("authenticatingHeading");
  showElement("authenticatingAnimation");
});
setTimeout(function() {
  timedLoop(1000, function() {
    showElement("authenticatingHeading");
    hideElement("authenticatingAnimation");
  });
}, 500);

onEvent("continuePress", "click", function( ) {
  var userEmail = getProperty("emailAddress", "value");
  console.log(userEmail);
  if (userEmail == "") {
    setScreen("homeScreen");
  } else {
    setScreen("loadingScreen");
    setTimeout(function() {
      setScreen("selectRegion");
    }, 3000);
  }
  createRecord("userEmailList", {emails:userEmail}, function() {
    setProperty("emailAddress", "text", "");
  });
});
onEvent("termsAndConditions", "click", function( ) {
  open("https://www.ecovader.biz/");
});
onEvent("privatePolicy", "click", function( ) {
  open("https://www.ecovader.biz/");
});
onEvent("torontoOption", "click", function( ) {
  setScreen("communityToronto");
});
onEvent("saugaOption", "click", function( ) {
  setScreen("communityToronto");
});
onEvent("vaughanOption", "click", function( ) {
  setScreen("communityToronto");
});
onEvent("backButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("backButton2", "click", function( ) {
  setScreen("selectRegion");
});
