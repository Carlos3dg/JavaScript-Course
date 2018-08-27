
let amount, total, subtotal, price=[8500, 1600, 700], id;

document.getElementById('laptop').onclick=newPurchase
document.getElementById('speaker').onclick=newPurchase
document.getElementById('pneumatic_tire').onclick=newPurchase

function newPurchase(){
    id=prompt('Please type the ID product');
    amount=prompt('Type the amount to be bought');
    subtotal= (price[id])*amount;
    total=subtotal*1.16;
    update();
}

function update(){
    document.getElementById(id).innerHTML= `<ul>
                                                <li> Price: ${price[id]} </li>
                                                <li> Amount: ${amount} </li>
                                                <li> Subtotal: ${subtotal} </li>
                                                <li> Total (Included IVA): ${Math.round(total)}</li> 
                                            </ul>    

                                                        `;
}
