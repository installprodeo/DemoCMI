var request = require("supertest");
var app = require("./server.js");

describe("GET /", function () {
<<<<<<< HEAD
  it('displays "Hello World! Prueba Opsgenie"', function (done) {
=======
  it('displays "Hello World! V3.0"', function (done) {
>>>>>>> 6f575d36629a50f9817e6dc9d427a2f97e716102
    // The line below is the core test of our app.
    request(app).get("/").expect("Hello World!", done);
  });
});