let saveSchedule = [];
const listForm = document.querySelector("#listForm");
const listInput = listForm.querySelector("input");
const shceduleList = document.querySelector("#scheduleList");

function submitDel(event){
  const parent = event.target.parentNode;
  saveSchedule=saveSchedule.filter((element)=>element.id!=parent.id);
  parent.remove();

  localStorage.setItem("schedule",JSON.stringify(saveSchedule));
}
function addSchedule(information){
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  newButton.style = "border:none";
  newSpan.style = "background-color:white; padding : 5px";
  newButton.addEventListener("click",submitDel);

  newDiv.id = information.id;


  newButton.innerText = "삭제";
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newButton);

  newDiv.style = "margin : 10px; text-align : center";
  newSpan.innerText=information.datas;

  scheduleList.appendChild(newDiv);

}
function submitForm(event){
  event.preventDefault();
  const schedule = listInput.value;
  const forSave = {
    id : Date.now(),
    datas : schedule
  }
  listInput.value= "";
  saveSchedule.push(forSave);
  localStorage.setItem("schedule",JSON.stringify(saveSchedule));
  addSchedule(forSave);
}
listForm.addEventListener("submit",submitForm);

const existList = localStorage.getItem("schedule");
if(existList!==null){
  saveSchedule = JSON.parse(existList);
  saveSchedule.forEach(addSchedule);
}
