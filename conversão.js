function botao() {
  texto = document.getElementById("texto").value;
  textoUpperCase = texto.toUpperCase();

  var resultadoEspaco = textoUpperCase.split("");

  decodificado = [];

  resultadoEspaco.forEach((e) => {
    switch (e) {
      case "A":
        decodificado.push("N");
        break;
      case "B":
        decodificado.push("O");
        break;
      case "C":
        decodificado.push("P");
        break;
      case "D":
        decodificado.push("Q");
        break;
      case "E":
        decodificado.push("R");
        break;
      case "F":
        decodificado.push("S");
        break;
      case "G":
        decodificado.push("T");
        break;
      case "H":
        decodificado.push("U");
        break;
      case "I":
        decodificado.push("V");
        break;
      case "J":
        decodificado.push("W");
        break;
      case "K":
        decodificado.push("X");
        break;
      case "L":
        decodificado.push("Y");
        break;
      case "M":
        decodificado.push("Z");
        break;
      case "N":
        decodificado.push("A");
        break;
      case "O":
        decodificado.push("B");
        break;
      case "P":
        decodificado.push("C");
        break;
      case "Q":
        decodificado.push("D");
        break;
      case "R":
        decodificado.push("E");
        break;
      case "S":
        decodificado.push("F");
        break;
      case "T":
        decodificado.push("G");
        break;
      case "U":
        decodificado.push("H");
        break;
      case "V":
        decodificado.push("I");
        break;
      case "W":
        decodificado.push("J");
        break;
      case "X":
        decodificado.push("K");
        break;
      case "Y":
        decodificado.push("L");
        break;
      case "Z":
        decodificado.push("M");
        break;
      case " ":
        decodificado.push(" ");
        break;
      default:
        console.log("ERRO NA DECODIFICAÇÃO");
    }
  });

  textoFinal = decodificado.join("");

  body = document.getElementById("template");
  body.innerHTML = `<p class="retornoConversor">` + textoFinal + `</p>`;
}
