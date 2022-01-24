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