document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url ="js/tblmenu.json"
    fetch(url)
    .then(function  (res) {
        return res.json();
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>harga</th><th>Stok</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.stok}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML= output;
    })
    
}

// let tblmenu = [
//     {

//     "idmenu" : 8,
//     "idkategori" : 1,
//     "menu" : "burger",
//     "harga" :  12000,
//     "stok" : true,
//     "keterangan" : null
//     },
//     {

//     "idmenu" : 9,
//     "idkategori" : 1,
//     "menu" : "Jagung bakar",
//     "harga" :  12000,
//     "stok" : true,
//     "keterangan" : null
//     }
// ]

// console.log(tblmenu[1]);




// {
//     'idmenu' : 8,
//     "idkategori": 1,
//     "menu" : "Burger",
//     "harga" :  12000,
//     "stok" : true,
//     "keterangan" : null
// },
// {
//     "idmenu" : 9,
//     "idkategori": 1,
//     "menu" : "jagung bakar",
//     "harga" :  12000,
//     "stok" : false,
//     "keterangan" : null
// },