// Write your JavaScript code here.
// Remember to pay attention to page loading!
function load() {
  const takeOff = document.querySelector("#takeoff");
  const landing = document.querySelector("#landing");
  const missionAbort = document.querySelector("#missionAbort");
  const up = document.querySelector("#up");
  const down = document.querySelector("#down");
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const statuss = document.querySelector("#flightStatus");
  const screen = document.querySelector("#shuttleBackground");
  const height = document.querySelector("#spaceShuttleHeight");

  takeOff.addEventListener("click", () => {
    let isReady = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (isReady) {
      statuss.innerHTML = "Shuttle in flight.";
      screen.style.backgroundColor = "blue";
      height.innerHTML = "10000";
    }
  });

  landing.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    statuss.innerHTML = "The shuttle has landed.";
    screen.style.backgroundColor = "green";
    height.innerHTML = "0";
  });
  //   When the "Abort Mission" button is clicked, the following should happen:

  // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.

  // The flight status should change to "Mission aborted."

  // The background color of the shuttle flight screen should change from blue to green.

  // The shuttle height should go to 0.

  missionAbort.addEventListener("click", () => {
    let isAbort = window.confirm("Confirm that you want to abort the mission.");
    if (isAbort) {
      statuss.innerHTML = "Mission aborted.";
      screen.style.backgroundColor = "green";
      height, (innerHTML = "0");
    }
  });
}

window.addEventListener("load", load);
