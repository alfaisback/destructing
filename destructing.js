const bahan = {
    kering: {
        bahan1: 'terigu',
        bahan2: 'ragi',
        bahan3: 'gula',
    },
    basah: 'susu',
    lainnya: 'butter'
    
};
// pemanggilan biasa menggunakan parameter
// function resepDonat(kering, basah, lainnya){
//     console.log(kering, basah, lainnya);
// }
// resepDonat(bahan.kering.bahan1, bahan.basah, bahan.lainnya);

// pemanggilan menggunakan variable object - 
function resepDonat2({kering: { bahan1, bahan2, bahan3}, basah, lainnya}) {
    return ` `
}
console.log(resepDonat2(bahan));


 