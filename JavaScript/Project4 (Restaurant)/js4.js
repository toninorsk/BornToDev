let qrt = prompt("Product Quantity")
let sum = 0

for(var i = 1; i <= qrt; i++)
{
    let item_price = prompt("Product price number " + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "Product price number " + i + " : " + item_price + " Baht " + "<br>"
}

document.getElementById("result").innerHTML = "Total : " + sum + " Baht"