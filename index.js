function val(num)
{
    document.getElementById("disp").value+=num
}
function sol()
{
    let x=document.getElementById("disp").value
    let y = eval(x)
    document.getElementById("disp").value = y
}
function clr()
{
    document.getElementById("disp").value=""
//     // navigator.userAgent()
//   let x=  navigator.geolocation.getCurrentPosition()
//   document.getElementById("location").value=x

}