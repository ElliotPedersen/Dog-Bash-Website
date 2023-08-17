function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: document.getElementById("email").value,
    Subject: "New message",
    Body: document.getElementById("message").value,
  }).then((message) => alert(message));
}
