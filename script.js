let Data = [
    
{
    feedback :" ipsum dolor Lorem ipsum dolor sit amet consectetur adipis paras more pas more paras moreConsequatur autem consectetur quos expedita, quia exercitationem fugit tempora nulla enim, aliq",
    img : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    name:"Paras ",
    role:"SDE1"
},
  
{
    feedback :" ipsum dolor Lorem ipsum dolor sit amet consectetur adautem consectetur quos expedita, quia exercitationem fugit tempora nulla enim, aliq",
    img : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    name:"More Name",
    role:"SDE5"
},
  
{
    feedback :" ipsum dolor Lorem ipsum dolor sitgwdsssssssssssssssssssssssssssssss amet consectetur adipisicing elit. Asperiores quisquam aliquam architecto quas excepturi perspiciatis provident iste molestias aut obcaecati. Consequatur autem consectetur quos expedita, quia exercitationem fugit tempora nulla enim, aliq",
    img : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    name:"HELLO Name",
    role:"SDE4"
},
  
{
    feedback :" ipsum dolor Lorem fk;ml,ed'f,',d',fipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam aliquam architecto quas excepturi perspiciatis provident iste molestias aut obcaecati. Consequatur autem consectetur quos expedita, quia exercitationem fugit tempora nulla enim, aliq",
    img : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    name:"WORLD Name",
    role:"SDE3"
}

]


var main_div = document.getElementById("main");

function ShowData(d){
    main_div.innerHTML ="";

    console.log(d);

    let div = document.createElement('div');

    div.innerHTML =
    // div.id="main"
    `<div id="feedback">
    <span>${d.feedback}</span>
</div>

<div id="image_div">

    <img src="${d.img}">

    <div id="proj">
        <h5 id="name">${d.name}</h5>
        <p  id="role">${d.role}</p>
    </div>

</div>
    
    `
    main_div.append(div);

}



let x = 0;
setInterval(()=>{
    for(let i = x ; i <=x ; i++){
        console.log(Data[x].role);
        ShowData(Data[x]);
    }   
    if(x < Data.length-1){
        x++
    }else{
        x = 0;
    }
   
},2000)