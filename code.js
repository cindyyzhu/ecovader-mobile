//global variables
var likedPost = false;
var likes = 8;
var copiedPost = false;

var likedPost2 = false;
var likes2 = 11;
var copiedPost2 = false;

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
onEvent("heart", "click", function( ) {
  if (likedPost == false) {
    likedPost = true;
    showElement("greenHeart");
    likes ++;
    setText("likesNumber", likes);
  } else if (likedPost == true) {
    hideElement("greenHeart");
    likedPost = false;
    likes --;
    setText("likesNumber", likes);
  }
});
onEvent("copyButton", "click", function( ) {
  if (copiedPost == false) {
    copiedPost = true;
    showElement("copiedButton");
  }
});
onEvent("shareButton", "click", function ( ) {
  console.log("hi");
  showElement("sharePopUp");
  showElement("exitPopUp");
  showElement("copyButton");
  if (copiedPost == true) {
    showElement("copiedButton");
  }
});
onEvent("exitPopUp", "click", function ( ) {
  hideElement("sharePopUp");
  hideElement("exitPopUp");
  hideElement("copyButton");
  hideElement("copiedButton");
});
onEvent("backButton3", "click", function( ) {
  setScreen("communityToronto");
});
onEvent("uploadPhoto", "click", function( ) {
  open("https://www.google.com/imghp");
});
onEvent("communityTorontoSearch", "click", function( ) {
  setScreen("searchScreen");
});
onEvent("ecoVaderSearchButton", "click", function( ) {
  var searchInput = getProperty("ecoSearchInput", "value");
  console.log(searchInput);
  if (searchInput == "") {
    setScreen("searchScreen");
  } else {
    showElement("searchLoadingGIF");
    hideElement("ecoVaderSearchButton");
    setTimeout(function() {
      if (searchInput == "Garlic Mustard" || searchInput == "garlic mustard" || searchInput == "Garlic mustard") {
        setScreen("garlicMustardSearchResults");
        setText("garlicMustardSearchInput", searchInput);
        setText("showingResultsGM", "Showing results for '" + searchInput + "'");
        showElement("ecoVaderSearchButton");
        hideElement("searchLoadingGIF");
      } else if (searchInput == "tellima grandiflora" || searchInput == "Tellima Grandiflora" || searchInput == "tellima grandiflora") {
        setScreen("grandifloraSearchResults");
        setText("grandifloraSearchInput", searchInput);
        setText("showingResultsTG", "Showing results for '" + searchInput + "'");
        showElement("ecoVaderSearchButton");
        hideElement("searchLoadingGIF");
      } else {
        setScreen("searchResults");
        setText("searchResultsInput", searchInput);
        showElement("ecoVaderSearchButton");
        hideElement("searchLoadingGIF");
      }
    }, 5000);
  }
  createRecord("userSearchHistory", {searches:searchInput}, function() {
    setTimeout(function() {
      setProperty("ecoSearchInput", "text", "");
    }, 5000);
  });
});
onEvent("backButton4", "click", function( ) {
  setScreen("searchScreen");
});
onEvent("backButton5", "click", function( ) {
  setScreen("searchScreen");
});
onEvent("backButton6", "click", function( ) {
  setScreen("searchScreen");
});
onEvent("backButton7", "click", function( ) {
  setScreen("communityToronto");
});
onEvent("nowInTorontoButton", "click", function( ) {
  setScreen("nowInToronto");
});

//----

onEvent("heart", "click", function( ) {
  if (likedPost == false) {
    likedPost = true;
    showElement("greenHeart");
    likes ++;
    setText("likesNumber", likes);
  } else if (likedPost == true) {
    hideElement("greenHeart");
    likedPost = false;
    likes --;
    setText("likesNumber", likes);
  }
});
onEvent("copyButton", "click", function( ) {
  if (copiedPost == false) {
    copiedPost = true;
    showElement("copiedButton");
  }
});
onEvent("shareButton", "click", function ( ) {
  console.log("hi");
  showElement("sharePopUp");
  showElement("exitPopUp");
  showElement("copyButton");
  if (copiedPost == true) {
    showElement("copiedButton");
  }
});


