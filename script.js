function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send("GPAWorldlink Mail", "template_sggvbr8", templateParams).then(
    ()=> alert("Email sent!").catch(() => alert("Email not sent!!"))

  );
}
