let nilai = [
    {nama:"budi", ipa:90, bahasa:70, matematika:80},
    {nama:"toji", ipa:90, bahasa:70, matematika:80},
    {nama:"toni", ipa:90, bahasa:70, matematika:80},
    {nama:"mas-asep", ipa:90, bahasa:70, matematika:90},
    {nama:"ppk", ipa:20, bahasa:70, matematika:80},
];  

let nama = ["budi","toji","toni","ppk"];
// nama.push("ani", "kang-asep"); 


// console.log(nama.shift());

// nama.unshift("maritza","fia");

// console.log(nama.slice(0, 3));
let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(['ips','pkn','rpl']));

//   console.log( nama.splice(3, 4));

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// })

// console.log(nilai);

//  nilai.filter((a) => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama
// });

// let siswa = nilai.map((a) => [a.ipa, a.nama, a.matematika] )

// console.log(siswa);

// mapel.sort();
// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a =  a + b.ipa); 
// }, 0);

let hasil = nilai.reduce((a, b) => (a += b.matematika), 0);

console.log(hasil);
