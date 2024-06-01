function importAll(r) {
  return r.keys().map(r);
}

function importFailSounds() {
  return importAll(require.context("../sounds/fail", false, /\.(mp3)$/));
}
function importGuessSounds() {
  return importAll(require.context("../sounds/guess", false, /\.(mp3)$/));
}
function importHappyEndSounds() {
  return importAll(require.context("../sounds/happy", false, /\.(mp3)$/));
}

export { importFailSounds, importGuessSounds, importHappyEndSounds };
