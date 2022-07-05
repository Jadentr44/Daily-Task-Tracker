//getting the schedule from the local storage
let storedScheduleArr = JSON.parse(localStorage.getItem("storedSchedule"))
//getting the current date
var date = moment().format('MM,Do,YY')
//if the local stoarage is empty or the date is different, it will give a new one
if(storedScheduleArr == null || storedScheduleArr[0] != date){
let Schedule = [date,[
  {
  Time:9,
  task:""},{
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
  task:""
},{
  Time:16,//1
  task:""
},{
  Time:17,//5
  task:""
}
  ]]
  localStorage.setItem("storedSchedule",JSON.stringify(Schedule))
}