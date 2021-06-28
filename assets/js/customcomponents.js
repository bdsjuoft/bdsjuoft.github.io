function peopleTabClick(evt, peopleGroup) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("card-people");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("vertical-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show people with the given tag , and add an "active" class to the button that opened the tab
    // document.getElementById(cityName).style.display = "block";
    let pplTag = "card-people-".concat(peopleGroup);
    let pplCards = document.getElementsByClassName(pplTag);
    for(i = 0; i < pplCards.length; i++) {
        pplCards[i].style.display = "block";
    }
    evt.currentTarget.className += " active";
}

