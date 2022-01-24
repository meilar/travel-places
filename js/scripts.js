function Passport() {
  this.trips = {};
  this.currentId = 0;
}

Passport.prototype.addTrip = function(trip) {
  trip.id = this.assignId();
  this.trips[trip.id] = trip;
}

Passport.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

let userPassport = new Passport();

// BL 4 Trips

function Trip(location, landmark, yearTime, note) {
  this.location = location;
  this.landmark = landmark,
  this.yearTime = yearTime;
  this.note = note;
}

Trip.prototype.tripReport = function() {
  return "I visited " + this.location + ". It was beautiful in " + this.yearTime + ". If you go, make sure to visit " + this.landmark + ". Make sure to remember: " + this.note + "! Have fun!";
}

function listTrip() {
  let index = userPassport.currentId;
  let tripList = userPassport.trips[index].tripReport();
  return tripList;
}

function getTrip() {
  let locationInput = $('#locationId').val();
  let yearTimeInput = $("#yearTimeId").val();
  let landmarkInput = $("#landmarkId").val();
  let noteInput = $("#noteId").val();
  let outputTrip = new Trip(locationInput, yearTimeInput, landmarkInput, noteInput);
  userPassport.addTrip(outputTrip);
  console.log(userPassport);
}

// User Interface

$(document).ready(function() {

  $("#tripInput").submit(function(event){
    event.preventDefault();
    getTrip();
    outputTripList = listTrip();
    $("#output-list").append("<li class='output-item'>" + outputTripList + "</li>");

  })

})

