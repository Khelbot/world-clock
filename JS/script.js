function updateTime() {
  //Milan
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");

  let milanTime = moment().tz("Europe/Vatican");
  milanDateElement.innerHTML = milanTime.format("MMMM do, YYYY");
  milanTimeElement.innerHTML = milanTime.format(
    "h:mm:ss[<small>]:sss A[</small>]"
  );

  //Accra
  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");

  let accraTime = moment().tz("Africa/Accra");
  accraDateElement.innerHTML = accraTime.format("MMMM do, YYYY");
  accraTimeElement.innerHTML = accraTime.format(
    "h:mm:ss[<small>]:sss A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
