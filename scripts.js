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
}

window.addEventListener("load", load);
