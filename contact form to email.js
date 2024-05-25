function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tdsamaraweera0@gmail.com",
        Password : "BA2F353843A079E899701E601DE0A2D6B9A4",
        To : 'dilshantharinda2323@gmail.com',
        From : "tdsamaraweera0@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}