console.log("workin homie");

$(document).ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();
    console.log("clicked button");

    var email = $(".email").val();
    var name = $(".name").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      statusElm.append("<div>Email is not valid</div>");
    }

    if (name.length > 2) {
      statusElm.append("<div>name is valid</div>");
    } else {
      statusElm.append("<div>name is not valid</div>");
    }

    if (message.length > 20) {
      statusElm.append("<div>message is valid</div>");
    } else {
      statusElm.append("<div>message is too short !</div>");
    }
  });
});
