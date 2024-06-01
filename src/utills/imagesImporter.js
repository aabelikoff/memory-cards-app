function importAll(r) {
  return r.keys().map(r);
}

function importMinionsImages() {
  return importAll(require.context("../images/minions_bg_free", false, /\.(png|jpe?g|svg)$/));
}

export { importAll, importMinionsImages };
