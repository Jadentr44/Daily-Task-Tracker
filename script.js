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
  Time:1,
  task:""
},{
  Time:2,
  task:""
},{
  Time:3,
  task:""
},{
  Time:4,
  task:""
},{
  Time:5,
  task:""
}]


let date = moment().format('MM,Do,YY')
console.log(date)
let hour = moment().format('h')
console.log(hour)
let saveIconHtml

Schedule.forEach(e =>{
  let rowDiv = $('<div>')
  rowDiv.attr("class","row")

  let AMPM = "pm"
  if(e.Time < 12){AMPM = 'am'}
  
  rowDiv.html(`<div class="hour col-lg-2"><h3>${e.Time}${AMPM}</h3></div>
  <div class="description col-lg-8">${e.task}</div>
  <div class="saveBtn col-lg-2"><i class="fa-solid fa-floppy-disk"></i></div>
</div>`)
$('.container').append(rowDiv)
})