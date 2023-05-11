let horas= new Date()
document.write(horas.getHours());
document.write("<br><br>");

let minutos = new Date()
document.write(minutos.getMinutes());
document.write("<br><br>");

let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>");

let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours());
document.write("<br><br>");
document.write(horas1.toLocaleString())
document.write("<br><br>");

function BemVindo(){
    alert("Ola, Tudo Bem?")
}
setTimeout(BemVindo,2000)


