
//Ctrl + kattintás
function ctrlKey(para){
    let div=$("#bal");
    let ps = div.getElementsByTagName("P");
    let N = ps.length;
    let psa = Array.from(ps);
    let ix = psa.findIndex(e => e === para);
    let ix1=ix-1;
    if (ix1<0) ix1=N-1;
    
    let tmp = ps[ix].innerHTML;
    ps[ix].innerHTML = ps[ix1].innerHTML;
    ps[ix1].innerHTML = tmp;
}

//Shift + kattintás
function shiftKey(para)
{
    //itt megoldani
    console.log("nincs megoldva");

}


//Ctrl + Shift + kattintás
function ctrlShiftKey(para)
{
    para.contentEditable = "true";
    para.style.backgroundColor="lightgray";
    para.focus();
    //itt folytatni
    //tegyünk egy olyan "blur" eseménykezelőt a paragrafusra
    //amelyik a visszaállítja a két megváltoztatott tulajdonságot
    //és utána leveszi saját magát a paragrafusról

}

//click eseménykezelő
function click(e) {
    let para=e.target;
    
    if(e.ctrlKey && !e.shiftKey){
        ctrlKey(para);
        return;
    }
    if(!e.ctrlKey && e.shiftKey){
        shiftKey(para);
        return;
    }
    if(e.ctrlKey && e.shiftKey){
        ctrlShiftKey(para);
        return;
    }
    console.log("csak egy click");
}


window.onload=function(){
    let div=$("#bal");
    div.addEventListener("click",click,false);
}