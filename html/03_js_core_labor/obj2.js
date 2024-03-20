
//miért van szükség a [] operátorra is objektum
//tulajdonságok elérésében

let cim = {
    cim1: "Marosvásárhely",
    cim2: "Karinthy utca",
    cim3: "24",
    cim4: "740567",
    cim5: "Maros"
};

//tulajdonságok bejárása:
for (let i = 1; i < 6; i++) {
    console.log(cim["cim" + i] + "\n");
}
