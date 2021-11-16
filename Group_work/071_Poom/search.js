import {products} from "./prod2.js";
import {displayProduct,divProducts} from "./script.js";

let searchIcon = document.querySelector('#searchIcon');
searchIcon.addEventListener('click',toggleSearchBar);
let showBar = false;

function toggleSearchBar() {
    if(showBar){
        document.getElementById('divWarp').setAttribute('style','display:none');
    }else{
        document.getElementById('divWarp').setAttribute('style','display:inline');
    }
    showBar = !showBar;
}

let searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e) => {
    if(e.target.value == ''){
        divProducts.innerHTML = '';
        displayProduct(products);
    }else{
        divProducts.innerHTML = '';
        const textSearch = e.target.value.toLowerCase();
        const filterProducts = products.filter((product) => {
            return (
                product.name.toLowerCase().includes(textSearch) ||
                product.id.toLowerCase().includes(textSearch)
            );
        });
        displayProduct(filterProducts);
    }
});

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',() => {
    divProducts.innerHTML = '';
    const textSearch = searchBar.value.toLowerCase();
    const filterProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(textSearch) ||
            product.id.toLowerCase().includes(textSearch)
        );
    });
    displayProduct(filterProducts);
});