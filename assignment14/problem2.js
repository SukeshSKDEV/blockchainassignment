let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];
// a) Number of Beds > 200
let noOfBeds = hospitals.filter((hospital) => hospital.noOfBeds > 200);
console.log(noOfBeds);
// b) Availability of Beds = Yes
let bedsAvailability = hospitals.filter(
  (hospital) => hospital.availability === "Yes"
);
console.log(bedsAvailability);
// c) Location = Pune
let locationPune = hospitals.filter((hospital) => hospital.location === "Pune");
console.log(locationPune);
