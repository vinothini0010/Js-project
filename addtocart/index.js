let cartcount = 0;
const addtocartbutton = document.queryelementbyid('addtocartbutton');
const cartcountelement = document.queryelementbyid('cartcount');


addtocartbutton.addEventListener('click', () => {
    cartcount++;
    cartcountelement.innerhtml = cartcountelement;
}   



const clearcartbutton = document.queryelementbyid('clearcartbutton')
clearcartbutton.addEventListener('click', () => {
    cartcount = 0;
    cartcountelement.innerhtml = cartcount;
}