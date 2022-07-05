//getting the local stoarage schedule
let pulledSchedule = JSON.parse(localStorage.getItem("storedSchedule"));

//setting the displayed date
$("#currentDay").text(moment().format("MMMM,Do,YYYY"))
//getting the hour in Military time
let hour = moment().format('H')

let saveIconHtml = `<i class="saveIcon fa fa-save"></i>`

// going through each of the task and creating them
pulledSchedule[1].forEach(e =>{
  //deciding if the task is current,past,or future. using military time to decide 
  let rowColor = "red"
  if(e.Time > hour){rowColor = "green"}
  if(e.Time < hour){rowColor = "lightgray"}

  //deciding if it should use am or pm
 let AMPM = "am";
 if(e.Time > 11){AMPM = "pm"}

  // creating the row the info will go in
  let rowDiv = $('<div>')
  rowDiv.attr("class","row")

  //creating the hour div and all of its properties
  let hourDiv = $('<div>')
  hourDiv.attr('data-Mhour',e.Time)
  hourDiv.attr('class','hour col-lg-2')
  hourDiv.text(moment(e.Time,'H').format('h')+AMPM)

  // creating the task div, and its prperties
  let taskDiv = $('<div>')
  taskDiv.text(e.task)
  taskDiv.attr('class',"description col-lg-8")
  taskDiv.css("background-color", rowColor);
  taskDiv.attr("contentEditable","true")

  // creating the icon div and all of its properties
  let iconDiv = $('<div>')
  iconDiv.attr('class','saveBtn col-lg-2')
  iconDiv.html(saveIconHtml)

  //putting it all toghether on the page
rowDiv.append(hourDiv,taskDiv,iconDiv)
$('.container').append(rowDiv)

})

//when the save icon is pressed
$('.saveIcon').on('click',saveTask)


function saveTask(e){ 
  //getting the rows info, based on the saved icon pressed
  let slecectedRow = $(e.target).parent().parent()
  let selectedTask = slecectedRow.children().eq(1).text()
  let selectedHour = slecectedRow.children().eq(0).attr("data-Mhour");

  // going through the scedule and updating it, based on the hour of the row
  pulledSchedule[1].forEach(e =>{
    if(e.Time == selectedHour){
      console.log("they match")
      e.task = selectedTask
    }
  })
  //setting the task to the local storage
  localStorage.setItem("storedSchedule",JSON.stringify(pulledSchedule))
}