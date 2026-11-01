const fs = require("fs");
const f = __dirname + "/../quiz-pt-br/js/script.js";
let s = fs.readFileSync(f, "utf8");
const a = s.indexOf("  function bindEmail(s) {");
const b = s.indexOf("  // ---------------------------------------------------------------- telas \"custom\"");
const novo = `  function bindEmail(s) {
    var input = qs("input[type=email]");
    var btn = qs("#qz-button-continue");
    var clear = qs(".icon-close");
    if (!input || !btn) return;
    var holder = input.closest(".relative.w-full.z-40") || input.parentElement.parentElement;
    var errEl = null;
    input.value = state.vars.email || "";
    function valid() { return EMAIL_RE.test(input.value.trim()); }
    function showError(on) {
      input.classList.toggle("--invalid", on);
      if (on && !errEl) {
        errEl = document.createElement("p");
        errEl.className = "ml-7 mt-2 w-full text-left text-xs text-token-danger-700-3";
        errEl.textContent = "O e-mail deve ser válido";
        holder.appendChild(errEl);
      } else if (!on && errEl) { errEl.remove(); errEl = null; }
    }
    function sync() {
      if (errEl && valid()) showError(false);
    }
    function submit() {
      if (!valid()) return showError(true);
      setVar("email", input.value.trim());
      navigate(s.next);
    }
    input.addEventListener("input", sync);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    if (clear) clear.addEventListener("click", function () { input.value = ""; sync(); input.focus(); });
    btn.addEventListener("click", submit);
    sync();
  }

`;
s = s.slice(0, a) + novo + s.slice(b);
fs.writeFileSync(f, s);
console.log("ok");
