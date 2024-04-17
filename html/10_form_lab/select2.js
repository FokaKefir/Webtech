//nevek és színek a változatokhoz
let valtozatok = {
    red: {
        Crimson: "#DC143C",
        IndianRed: "#CD5C5C",
        LightCoral: "#F08080"
    },
    blue: {
        DarkCyan: "#008B8B",
        DeepSkyBlue: "#00BFFF",
        LightSkyBlue: "#87CEFA"
    },
    green: {
        ForestGreen: "#228B22",
        LightGreen: "#90EE90",
        SeaGreen: "#2E8B57"
    }
}

function updateOptions(selectElement, options) {
    selectElement.innerHTML = '';

    let defaultOption = document.createElement('option');
    defaultOption.value = "valaszt";
    defaultOption.textContent = "Valtozatok";
    defaultOption.selected = true;
    
    selectElement.appendChild(defaultOption);

    for (let name in options) {
        let option = document.createElement('option');
        option.value = options[name];
        option.textContent = name;
        selectElement.appendChild(option);
    }
}


function color(e) {
    var shadeList = valtozatok[e.target.value];
    updateOptions($('#valtozat'), shadeList);
}

function shade(e) {
    $('#szin').value = e.target.value
}


window.onload = () => {

    $('#szinek').addEventListener('change', color)
    $('#valtozat').addEventListener('change', shade)
}