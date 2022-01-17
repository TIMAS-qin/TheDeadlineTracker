
//-----------what happens when the add component button is clicked-------------------------------------------
var i = 0;
var inputboxes = `<div class="row"> <div class="col"> <input type="text" class="form-control CompName"  style="width: 135%;">
</div> <div class="col"> <input type="text" class="form-control CompNum" style="margin-left: 43%;"> </div>
<div class="col"> <input type="text" class="form-control CompWeight" style=" width: 90%;"> </div> </div> <h6><br></h6>`

let el = document.getElementById("addcomp")
if(el){
    el.addEventListener("click", function() {

        if (i < 5) {
    
            function createinputrow() {
                let div = document.createElement("div");
                div.innerHTML = inputboxes;
                return div;
            }
            const row = document.getElementById("inputrows");
            row.appendChild(createinputrow());
            i = i+1;
          } else {
            alert("Currently only supports 6 components");
          }
      });
}

//-----------end of what happens when the add component button is clicked-------------------------------------------




let Compinfo = [];
const Cinfo = {}
let CourseName = "hi"

document.getElementById("AddClass").addEventListener("click", function() {
    alert("Add another class or press done");

    CourseName = document.getElementById("CourseName").value;
    

try {
    for (let n = 0; n < 5; n++) {
        let CompName = document.getElementsByClassName("CompName")[n].value;
        let CompNum = document.getElementsByClassName("CompNum")[n].value;
        let CompWeight = document.getElementsByClassName("CompWeight")[n].value;
        Compinfo.push([CompName, CompNum, CompWeight]);
  };
}
catch(e){
    true;
}

  Cinfo[CourseName] = Compinfo;
  localStorage.setItem(CourseName, JSON.stringify(Compinfo));
   
 //   var CompNum = document.getElementsByClassName("CompNum").value;
 //   var CompWeight = document.getElementsByClassName("CompWeight").value;


  });

document.getElementById("DoneAddingCourses").addEventListener("click", function() {
    CourseName = document.getElementById("CourseName").value;
    

try {
    for (let n = 0; n < 5; n++) {
        let CompName = document.getElementsByClassName("CompName")[n].value;
        let CompNum = document.getElementsByClassName("CompNum")[n].value;
        let CompWeight = document.getElementsByClassName("CompWeight")[n].value;
        Compinfo.push([CompName, CompNum, CompWeight]);
  };
}
catch(e){
    true;
}

  Cinfo[CourseName] = Compinfo;
  localStorage.setItem(CourseName, JSON.stringify(Compinfo));
   
});

