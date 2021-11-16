import { searching } from './cart.js'
import { products } from './product.js'
import { showProduct } from './script.js'

const search = document.querySelector('#buttonSch');
search.addEventListener('click', searching);
// สำหรับแสดง searchBar
const searchBtn = document.querySelector('#Simg');
searchBtn.addEventListener('click', myClick, false)
let ClickCount = 0;
function myClick() {
    ClickCount++;
    if (ClickCount % 2 == 0) {
        divWrap.setAttribute('style', 'display: none;');
    } else {
        divWrap.setAttribute('style', 'display: inline;');
    }
}

//function for check Product available
const btn = document.querySelector('#checkAvailable');
btn.addEventListener('click', queryProduct);
function queryProduct() {
    let productList = [] // สร้าง Array ว่างๆ
    let divProduct = document.querySelector('#products'); 
    if (btn.checked == true) { // ถ้าปุ่ม Product avaliable เป็นจริง
        divProduct.innerHTML = ''; //ลบ ParentNode ทั้งหมดของ #products
        products.forEach(products => { //ใช้ forEach ในการวน loop
            if (products.stock > 0) { // ถ้ามีสินค้าที่ Stock > 0 ให้ push ลงใน Array ที่สร้างไว้
                productList.push({
                    id: products.id,
                    name: products.name,
                    desc: products.desc,
                    price: products.price,
                    stock: products.stock,
                    img: products.img
                })
            }
        })
    } else { // ถ้าปุ่ม Product avaliable เป็นเท็จ
        divProduct.innerHTML = ''; //ลบ ParentNode ทั้งหมดของ #products
        products.forEach(products => { // ทำการ push สินค้าทั้งหมดลงใน Array
            productList.push({
                id: products.id,
                name: products.name,
                desc: products.desc,
                price: products.price,
                stock: products.stock,
                img: products.img
            })
        })
    }
    showProduct(productList); // เอา Array ที่สร้างไว้เป็น parameter เพื่อให้ function showProduct ทำงาน 
    localStorage.setItem('queryProduct', JSON.stringify(productList)); // เก็บข้อมูลใน Array ทั้งหมดลงใน localStorage
    localStorage.setItem('Checkbox', JSON.stringify(btn.checked)); // เก็บ button status ลงใน localStorage
}

function onloadQuery() {
    let divProduct = document.querySelector('#products'); 
    let getProduct = JSON.parse(localStorage.getItem('queryProduct')); // ดึง queryProduct จากใน localStorage และแปลงค่ากลับมา
    let getBtnCheck = JSON.parse(localStorage.getItem('Checkbox')) // ดึง Checkbox จากใน localStorage และแปลงค่ากลับมา
    if (getBtnCheck == true) { //ถ้า Button เป็น True
        divProduct.innerHTML = ''; //ลบ ParentNode ทั้งหมดของ #products
        document.querySelector('#checkAvailable').checked = getBtnCheck; //ตั้งสถานะของปุ่มให้เป็น True
        showProduct(getProduct); //แสดง Product ทั้งหมดที่ดึงค่ากลับมาจาก localStorage
    }
}
onloadQuery();


