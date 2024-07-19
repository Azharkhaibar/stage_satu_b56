// latihan 1 

function paramater_hitung(params, params2){
    let hitung2 = (5*2) 
    return hitung2 + (params + hitung2) / 2
}

let nilai_baru = paramater_hitung(10, 0);
console.log(`nilai paramater_hitung : ${nilai_baru}`);


// latihan 2 

function paramter_hitung_kedua(params3,...params4) {

    function generate_nama_acak(array) {
        let pemicu_nama_acak = Math.floor(Math.random () * array.length);
        return array[pemicu_nama_acak]; 
    }

    let dict_ask = []
    let name_random = ['azhar', 'raka']
    dict_fill = {
        name: function() {
            if (typeof(params3) === 'string'){
                let random_name = generate_nama_acak(name_random);
                console.log(random_name)
                return true;
            }
            return false;
        },
        umur: function () {
            let nilai_baru = 100;
            return nilai_baru - params4.reduce((a, b) => a + b, 0); // nilai total params4 dikurangi 100
        },
        tempat_tinggal: function () {
            if (this.umur() != null && typeof params3 === 'string') {
                console.log("jakarta")
                return true;
            }
            return false;
        }
    };

    // memanggil fungsi dalam dict_fill
    // cek hasil
    function jika_berhasil(){
        if (dict_fill.name() && dict_fill.umur() != null && dict_fill.tempat_tinggal()) {
            dict_fill.name();
            console.log(`umur : ${dict_fill.umur()}`);
            dict_fill.tempat_tinggal();
        }
    }
    console.log("\n", "code succeded")
    jika_berhasil();

}

paramter_hitung_kedua("string ternyata", 20,40,15);