let Schedule = [{
  Time:9,
  task:""
},{
  Time:10,
  task:""
},{
  Time:11,
  task:""
},{
  Time:12,
  task:""
},{
  Time:13,//1
  task:""
},{
  Time:14,//1
  task:""
},{
  Time:15,//1
  task:"feed"
},{
  Time:16,//1
  task:""
},{
  Time:17,//5
  task:""
}]


let date = moment().format('MM,Do,YY')
console.log(date)
let hour = moment().format('H')
console.log(hour)
let saveIconHtml = `<i class="fa fa-save"></i>`

Schedule.forEach(e =>{
  let rowColor = "red"
  if(e.Time > hour){rowColor = "green"}
  if(e.Time < hour){rowColor = "gray"}

 
  console.log(`current hour:${hour} vs ${e.Time}`)
  let rowDiv = $('<div>')
  rowDiv.attr("class","row")

  let hourDiv = $('<div>')
  hourDiv.attr('class','hour col-lg-2')
  hourDiv.text(moment(e.Time,'H').format('h'))

  let taskDiv = $('<div>')
  taskDiv.text(e.task)
  taskDiv.attr('class',"description col-lg-8")
  taskDiv.css("background-color", rowColor);

  let iconDiv = $('<div>')
  iconDiv.attr('class','saveBtn col-lg-2')
  iconDiv.html(saveIconHtml)

rowDiv.append(hourDiv,taskDiv,iconDiv)
$('.container').append(rowDiv)
  
})