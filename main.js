menuListArray = [
"Pizza Vegetariana",
"Pizza de frango",
"Pizza portuguesa",
"Pizza quatro queijos",
"Pizza de calabresa",
"Pizza de mussarela"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;    
}

function addItem(){
var htmldata;
var imgtags='<img id = "im1" src="images/pizzaImg.png"/>';
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0; i<menuListArray.lenght;i++)
document.getElementById("displayAddedMenu").innerHTML + htmldata;}

function addTop(){
    var item=document.getElementById("addItem").value;
    addItem();  

}