let pulledSchedule = JSON.parse(localStorage.getItem("storedSchedule"));

let hour = moment().format('H')
console.log(hour)
let saveIconHtml = `<i class="saveIcon fa fa-save"></i>`

pulledSchedule[1].forEach(e =>{
  let rowColor = "red"
  if(e.Time > hour){rowColor = "green"}
  if(e.Time < hour){rowColor = "lightgray"}

 let AMPM = "am";
 if(e.Time > 11){AMPM = "pm"}
  let rowDiv = $('<div>')
  rowDiv.attr("class","row")

  let hourDiv = $('<div>')
  hourDiv.attr('data-Mhour',e.Time)
  hourDiv.attr('class','hour col-lg-2')
  hourDiv.text(moment(e.Time,'H').format('h')+AMPM)

  let taskDiv = $('<div>')
  taskDiv.text(e.task)
  taskDiv.attr('class',"description col-lg-8")
  taskDiv.css("background-color", rowColor);
  taskDiv.attr("contentEditable","true")

  let iconDiv = $('<div>')
  iconDiv.attr('class','saveBtn col-lg-2')
  iconDiv.html(saveIconHtml)

rowDiv.append(hourDiv,taskDiv,iconDiv)
$('.container').append(rowDiv)

})

$('.saveIcon').on('click',saveTask)

function saveTask(e){ 
  let slecectedRow = $(e.target).parent().parent()
  let selectedTask = slecectedRow.children().eq(1).text()
  let selectedHour = slecectedRow.children().eq(0).attr("data-Mhour");
  console.log(selectedTask)
  pulledSchedule[1].forEach(e =>{
    if(e.Time == selectedHour){
      console.log("they match")
      e.task = selectedTask
    }
  })
  localStorage.setItem("storedSchedule",JSON.stringify(pulledSchedule))
}