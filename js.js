function qs(s) {
   return document.querySelectorAll(s);
}
var div, inp, btn, psw;
div = qs("div");
inp = qs("input");
btn = qs("button");
psw = qs(".password")[0];

inp[0].focus();
function sbt(params) {
   let error, accept;
   accept = qs("#error")[0];
   for (n = 0; n < 2; n++) {
       if (inp[n].value === "") {
           message = "Boş ola bilməz ";
       } else if (accept.checked == false) {
           message = "Gizlilik şərtlərini qəbul edin";
       }
       error.innerHTML = message;
       error.style.cssText = "padding:9px;background:rgba(240,29,29,.2);" + "color:darkred;font-weight:400;margin:3px 0";
   }
}
