function tempCalculator() {
  const temp = document.getElementById("temp").value;
  const selectedTempOp = document.getElementById("allTempOpt");
  const value = allTempOpt.options[selectedTempOp.selectedIndex].value;

  function celToFah(cel) {
    const fah = Math.round(cel * 1.8 + 32);
    return fah;
  }

  function fahToCel(fah) {
    const cel = Math.round(fah - 32 * 0.5556);
    return cel;
  }

  let result;

  if (value == "celcius") {
    result = celToFah(temp);
    document.getElementById("output").innerHTML = `= ${result} °Fahrenheit`;
  } else {
    result = fahToCel(temp);
    document.getElementById("output").innerHTML = `= ${result} °Celcius`;
  }
}
