const transparency = document.getElementById("transparency");
const bias = document.getElementById("bias");

const transparencyVal = document.getElementById("transparencyVal");
const biasVal = document.getElementById("biasVal");

const healthcare = document.getElementById("healthcare");
const transit = document.getElementById("transit");

function updateSimulation() {
  const t = parseInt(transparency.value);
  const b = parseInt(bias.value);

  transparencyVal.textContent = t;
  biasVal.textContent = b;

  const healthcareScore = Math.round((t * 0.6 + (100 - b) * 0.4));
  const transitScore = Math.round((t * 0.4 + (100 - b) * 0.6));

  healthcare.textContent = `Healthcare Access: ${healthcareScore}%`;
  transit.textContent = `Transit Fairness: ${transitScore}%`;
}

transparency.addEventListener("input", updateSimulation);
bias.addEventListener("input", updateSimulation);

updateSimulation(); // Initial run
