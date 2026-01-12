document.getElementById("validateBtn").addEventListener("click", validateEmail);
document.getElementById("clearBtn").addEventListener("click", clearResults);

function validateEmail() {
  const emailInput = document.getElementById("email").value;

  if (emailInput.trim() === "") {
    alert("Wprowadź adres e-mail!");
    return;
  }

  const trimmed = emailInput.trim();
  document.getElementById("trimmed").textContent = trimmed;

  const hasAt = trimmed.includes("@");
  document.getElementById("hasAt").textContent = hasAt ? "TAK" : "NIE";
  document.getElementById("hasAt").className = hasAt ? "valid" : "invalid";

  if (!hasAt) {
    document.getElementById("startsLetter").textContent = "-";
    document.getElementById("endsDomain").textContent = "-";
    document.getElementById("localPart").textContent = "-";
    document.getElementById("domainPart").textContent = "-";
    document.getElementById("domainReplaced").textContent = "-";
    document.getElementById("results").style.display = "block";
    return;
  }

  const firstChar = trimmed.charAt(0);
  const isLetter =
    (firstChar >= "a" && firstChar <= "z") ||
    (firstChar >= "A" && firstChar <= "Z");

  document.getElementById("startsLetter").textContent = isLetter ? "TAK" : "NIE";
  document.getElementById("startsLetter").className = isLetter ? "valid" : "invalid";

  const endsCorrect = trimmed.endsWith(".pl") || trimmed.endsWith(".com");
  document.getElementById("endsDomain").textContent = endsCorrect ? "TAK" : "NIE";
  document.getElementById("endsDomain").className = endsCorrect ? "valid" : "invalid";

  const parts = trimmed.split("@");
  const local = parts[0];
  const domain = parts[1];

  document.getElementById("localPart").textContent = local;
  document.getElementById("domainPart").textContent = domain;

  const domainReplaced = domain.split(".").join("-");
  document.getElementById("domainReplaced").textContent = domainReplaced;

  document.getElementById("results").style.display = "block";
}

function clearResults() {
  document.getElementById("email").value = "";
  document.getElementById("results").style.display = "none";
}