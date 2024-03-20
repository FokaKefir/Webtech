//szelektorokon alapuló elem kiválasztó függvények 

function doIt() {

    let lista = document.querySelectorAll(".szoveg");

    for (let elem of lista){
      elem.style.color = "red";//minden paragrafus piros 
    }
    
    //class tulajdonság szerint
    let p1 = document.querySelector(".elsopara");
    p1.style.color = "green"; //az első zöld

    //id szerint
    document.querySelector("#focim").style.color = "forrestgreen"; //a cím színe

}

