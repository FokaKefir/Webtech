
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

//Shift + kattintás (ellentetesen, mint a ctrl katt)
function shiftKey(para){
    let div=$("#bal");
    let ps = div.getElementsByTagName("P");
    let N = ps.length;
    let psa = Array.from(ps);
    let ix = psa.findIndex(e => e === para);
    let ix1=ix+1;
    if (ix1>=N) ix1=0;
    
    let tmp = ps[ix].innerHTML;
    ps[ix].innerHTML = ps[ix1].innerHTML;
    ps[ix1].innerHTML = tmp;

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

    para.onblur = function() {
        para.contentEditable = "false"
        para.style.backgroundColor = "";
        para.onblur = null;
    }

    para.onmouseout = function() {
        if (para.contentEditable === "true") {
            para.blur()
        }
        para.onmouseout = null;
    }

}

function altKey(para) {
    if (confirm("Biztosan törölni szeretné ezt a bekezdést?")) {
        para.remove();
    }
}

function altShiftKey(para) {
    // Create a new empty paragraph element
    let newPara = document.createElement("p");
    // Insert the new paragraph before the clicked paragraph
    para.parentNode.insertBefore(newPara, para);
    // Make the new paragraph editable and set its background color
    newPara.contentEditable = "true";
    newPara.style.backgroundColor = "lightyellow";
    // Focus on the new paragraph to enable text input
    newPara.focus();

    // Add blur event listener to stop editing when the paragraph loses focus
    newPara.onblur = function () {
        newPara.contentEditable = "false";
        newPara.style.backgroundColor = "";
        newPara.onblur = null;
    };
}

//click eseménykezelő
function click(e) {
    let para=e.target;
    
    if (e.altKey && e.shiftKey && !e.ctrlKey) {
        altShiftKey(para);
        return;
    }
    if (e.altKey && !e.shiftKey && !e.ctrlKey) {
        altKey(para);
        return;
    }
    if (e.ctrlKey && !e.shiftKey && !e.altKey) {
        ctrlKey(para);
        return;
    }
    if (!e.ctrlKey && e.shiftKey && !e.altKey) {
        shiftKey(para);
        return;
    }
    if (e.ctrlKey && e.shiftKey && !e.altKey) {
        ctrlShiftKey(para);
        return;
    }
    console.log("csak egy click");
}


window.onload=function(){
    let div=$("#bal");
    div.addEventListener("click",click,false);
}