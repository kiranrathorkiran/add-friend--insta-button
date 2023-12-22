
var sti = document.querySelector("h5")

var btn = document.querySelector("#add")
var check=0



btn.addEventListener("click",function(){
    if(check == 0){
sti.innerHTML = "FRIEND"
sti.style.color="green"
btn.innerHTML="remove friend"
check=1  }
else{

   
    sti.innerHTML = "stanger"
    sti.style.color="red"
    btn.innerHTML="Add friend"
    check=0
        }
}
)



