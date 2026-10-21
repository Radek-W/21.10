var obiekt1 = {
    nazwa: "Telefon",
    waga: 193, // gram
    cena: 450  // zł
}

var obiekt2 = {
    nazwa: "Masło",
    waga: 400, //gram
    cena: 5    //zł
}

document.write("Obiekt numer 1 nosi nazwę: " + obiekt1.nazwa +"<br>");
document.write("Obiekt numer 2 nosi nazwę: " + obiekt2.nazwa + "<br>");
document.write("Oba obiekty w sumie ważą: " + (obiekt1.waga+obiekt2.waga) + "<br>");
document.write("Droższym z nich jest obiekt nr: ")
    if(obiekt1.cena > obiekt2.cena){
        document.write("1<br>");
    } else {
        document.write("2<br>");
    }