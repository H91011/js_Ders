console.log("ders0.js dosyası")

var btnToplama = document.getElementById("toplama")
var btnCıkarma = document.getElementById("cıkarma")
var btnCarpma = document.getElementById("carpma")

function calcButton(e){
    console.log(e.target.id)
    var s1 = parseInt(document.getElementById("ilkSayi").value)
    var s2 = parseInt(document.getElementById("ikinciSayi").value)
    var sonuc = calculator(s1, s2, e.target.id)
    console.log(sonuc)

    var sonucp = document.getElementById("sonuc")
    sonucp.innerText ="işlem sonucu: " +sonuc
    // alert("Butona Tıklandı")
}


btnToplama.onclick = calcButton
btnCıkarma.onclick = calcButton
btnCarpma.onclick = calcButton


function calculator(sayi1, sayi2, islem){
    if(islem === "toplama"){
        return sayi1 + sayi2
    } else if (islem ==="cıkarma") {
        return sayi1 - sayi2
    } else if( islem ==="carpma") {
        return sayi1 * sayi2
    }
}
