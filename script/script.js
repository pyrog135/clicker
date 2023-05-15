"use strict";

// // // // const feedback = {
// // // //     good: 5,
// // // //     neutral: 10,
// // // //     bad: 3,
// // // // };

// // // // console.log(Math.min(...Object.values(feedback)));
// // // // console.log(Object.values(feedback).reduce((accum, values) => accum + values)

// // // const a = { a: 1, b: 2 };
// // // const b = { a: 3, c: 4 };
// // // const c = {...a, ...b};
// // // console.log(c);

// // // hasOwnProperty!!!!!!!!!!!!!!!!!!!!!!!!! надо знать

// // showShopList({
// //     names: ["H&M", 'dolce gabbana'],
// //     date: '12-02-2023',
// //     style: {
// //         color: 'red',
// //         fashion: 'casual'
// //     },
// //     minPrice: 150,
// //     bought: true,
// //     deleteName(name){
// //         if(this.name.includes(name)){
// //             this.names.push(name);
            
// //             return true;
// //         }
// //         return false;
// //     },
// //     resetName(oldName, newName){

// // //     }
// // // });

// // // console.log(shop.deleteName('H'), shop.names)

// // // function showShopList({names, date, style: {color, fashion}, minPrice, bought}){
// // //     console.log(names);
// // // }

// // // const hash = () => {
// // //   const data = {};
// // //   Object.defineProperty(data, "add", {
// // //     value(key, value) {
// // //       data[key] = value;
// // //       return data;
// // //     },
// // //   });
// // //   return data;
// // // };
// // // console.dir(hash().add('name', 'Mar').add('city', 'Mar').add('born', 'far'));


// const shopList = {
//   products: [],
//   getProducts(){
//     return this.products; 
//   },
//   addProduct(product){
//       if(this.increaseByOne(product, name)){
//         this.products.push({...product, quantity: 1});
//       }
//   },
//   deleteProduct(nameProduct){
//     const products = this.products;
//     for(const product of products){
//       if(product.name === nameProduct){
//         products.splice(products.indexOf(product), 1);
//         return;
//       }
//     }
//   },
//   clear(){
//     this.products = {};
//   },
//   sumPrice(nameProduct){
//     for(const {name, price, quantity} of this.products){
//       if(name === nameProduct){
//         return price * quantity;
//       }
//     }
//     return 'Нема продукту';
//   },
//   sumPrices(){
//     return this.products.reduce(
//       (accum, {price, quantity}) => accum + price * quantity,
//       0
//      );
//   },
//   increaseByOne(nameProduct){
//     for(const product of this.products){
//       if(item.name === nameProduct){
//         item.quantity += 1;
//         return true;
//       }
//     }
//     return false;
//   },
//   decreaseByOne(nameProduct){
//     for(const product of this.products){
//       if(product.name === nameProduct){
//         if(product.quantity === 0){
//           return;
//         }
//       }
//       item.quantity -= 1;
//         return;
//     }
// },
// }

// const user = {
//   age: 24
// }
// const{age} = user;

// shopList.addProduct({name: "Kiwi", price: 89});
// shopList.addProduct({name: "Chery", price: 289});
// shopList.addProduct({name: "Banana", price: 189});
// shopList.addProduct({name: "Apple", price: 29});
// shopList.addProduct({name: "Kiwi", price: 89});
// console.table(shopList.getProducts());
// console.log(shopList.sumPrice("Kiwi"));
// // shopList



// //{name: "Kiwi", price: 89},
// // {name: "Banana", price: 189},
// // {name: "Chery", price: 289},
// // {name: "Apple", price: 29}

// // console.log(shopList.getProducts());

// // function formatMessage(message, maxLength){
// //   return message.length === maxLength
// //   ? message
// //   :message.slice(0, maxLength);
// // }
// // console.log(formatMessage("hello", 3));

// // const salaries = {
// //   Mango: 100,
// //   Poly: 160,
// //   Ajax: 1470,
// // };
// // let sum = 0;
// // sum = Object.values(salaries).reduce((accum, item) => accum + item, 0);
// // console.log(sum);

// // function updateObject(object, ...arg){
// //   const newObj = {...object};
// //   for(const item of arg){
// //     delete newObj[item];
// //   }
// //   return newObj;
// // };
// // console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));

// // const menu = {
// //   width: 200,
// //   heigth: 300,
// //   title: 'My menu',
// // };

// // function multiplyNumberic(obj){
// //   let sum = 0;
// //   const finalObj ={...obj}
// //   for(const item of Object.entries(menu)){
// //     console.log(item);
// //     if(Number.isInteger(item[1])){
// //         finalObj[item[0]] *= 2; 
// //     };
// //   }
// //   return finalObj;
// // };
// // console.log(multiplyNumberic(menu))

// // const shopList =[
// //   {name: "Kiwi", price: 89},
// // {name: "Banana", price: 189},
// // {name: "Chery", price: 289},
// // {name: "Apple", price: 29}
// // ];

// // const maxPrice = shopList.reduce((accum, item) => {
// //   return item.price > accum ? item.price : accum;
// // }, 0);

// // console.log(maxPrice);

// const numbers = [1,11,15,5,21];
// const callack = function (e, i) {
//   console.log(`${i}:${e}`);
// }
// numbers.forEach(callack);

// // const products = [
// //   { name: "Манго", price: 83 },
// //   { name: "Банан", price: 59 },
// //   { name: "Вишня", price: 37 },
// //   { name: "Ківі", price: 94 },
// // ];
// // const nameProducts = products.map(product => product.name);

// // products.forEach(product => nameProducts.push(product.name));
// // console.log(nameProducts);

// // const products = [
// //   { type: "fruits", name: [['bananas'], 'cheries']},
// //   { tepe: "vegetablel", name: ['potatoes', 'da']},
// // ];
// // const nameProducts = products.flatMap(product => product.name);

// // const product = {
// //   name: 'Apple',
// //   price: 25,
// //   showPrice(){
// //     console.log(this.price);
// //   }
// // };

// // function callAction(action){
// //   // console.log(action);
// //   action();
// // };
// // callAction(product.showPrice); 

// // const showName = function(){
// //   console.log('this', this);
// //     console.log('this.name', this.name);
// // };

// // const user ={
// //   name: 'Andrew',
// // }

// // user.showUserName = showName;
// // user.showUserName();

// // const userA = {
// //   name: 'Olga',
// //   age: 40,

// // };

// // const userB = {
// //   name: 'Olga',
// //   age: 40,

// // };
// // const updateName = function (newName){
// //   this.name = newName;
// // };
// // userB.changeName = updateName;
// // userA.changeName = updateName;

// // console.log(userB);
// // userB.changeName('Masha');
// // console.log(userB);

// // const updateNameUserB = updateName.bind(userB);
// // updateNameUserB('Andrew');
// // console.log(userB);


// // // const createTeacher = function(teacher){
// // //     const teacherLesson = function(lesson){
// // //         console.log(`${teacher} викладає ${lesson}`);
// // //     }
// // //     return teacherLesson;
// // // }

// // // const andrew = createTeacher('Андрій');
// // // andrew('інформатику');
// // // andrew('математику');
// // // const sasha = createTeacher('Саша');
// // // sasha('українську мову');
// // // sasha('українську літературу');

// // // const letters = ['A', 'b', 'a', 'B'];

// // // letters.sort((a,b) => a.localeCompare(b))
// // // console.log(letters);


// // // function makeProduct(name, price, callback){
// // //     const id = Math.floor((Math.random() * 1000));
// // //     const product = {name, price, id};
// // //     callback(product);
// // // };


// // // function showProduct(product){
// // //     console.log(product);
// // // };

// // // makeProduct('Oleg', 1, showProduct);

// // const makeShef = function(shefName){
// //     const makeDish = function(dish){
// //         console.log(`${shefName} is cooking ${dish}`);
// //     }
// //     return makeDish;
// // }

// // const shef = makeShef('Андрій');
// // shef('plov');

// function User({name,age}={}){
//         this.name=name;
//         this.age=age;
//     }
//     User.prototype.changeAge=function(newAge){
//         this.age=newAge
//     }
//     const usreA=new User({name:'Andrew',age:24});
    
//     console.log(usreA);
//     usreA.changeAge(30);
//     console.log(usreA);

//     function Product(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     function Food(name, price) {
//         Product.call(this, name, price);
//         this.category = 'food';
//     }
//     const myFood = new Food('cheese', 5);
//     console.log(myFood);


// class Car{
//     test = 'my test';
//     #storage = 'Artem';
//     static author = 'Andrew';
//     constructor({brand, model, price, color = 'blue'} = {}){
//         console.log('first run')
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//         this.color = color;
//     }

//     changePrice(newPrice){
//         this.price = newPrice;
//     }
//     myStorage(){
//         return this.#storage;
//     }
// }
// console.dir(Car)
// const myCarA = new Car({brand:'Audi', model:'Q3', price:35000});
// console.log(myCarA);


// class Car {
//     static marka;
//     #brand;
//     constructor({ brand, model, price, color = "blue" } = {}) {
//         console.log("first run");
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// class Product{
//     constructor({name, price, quantity} = {}) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     get totalPrice(){
//         return this.price * this.quantity;
//     }
// }
// const product = new Product({name: "apple", price: 30, quantity: 2});
// console.log(product);
//
// }
// const productone=new Product({id:"hsdaj",name:"mango",price:50});
// const producttwo=new Product({id:"hfdf",name:"orange",price:30});
// const productthree=new Product({id:"hdfj",name:"apple",price:20});
// // console.log(product.getPriceWithDiscount);
// // console.log(product.getPriceWithTax);
// class Basket{
//     products=[];
//     get getTotalPriceWithTax(){
//         return this.products.reduce((total,product)=> total+product.getPriceWithTax,0);
//     }
//     addProduct(product){
//         this.products.push(product);
//     };
//     get getTotalPriceWithDiscount(){
//         return this.products.reduce((total,product)=> total+product.getPriceWithDiscount,0);
//     }
// }
// const basket=new Basket();
// basket.addProduct(productone);
// basket.addProduct(producttwo);
// basket.addProduct(productthree);
// console.log(basket.getTotalPriceWithDiscount);
// console.log(basket.getTotalPriceWithTax);


// class Warrior{
//     constructor({name, xp, health} = {}){
//         this.name=name;
//         this.xp =xp;
//         this.health = health;
//         this._weapon = "";
//     }
//     get weapon(){
//         return this._weapon;
//     }
//     set weapon(value){
//         this._weapon = value;
//     }
//     gainXp(amout) {
//         console.log(`${this.name} отримує ${amout} досвіду`);
//         this.xp += amout;
//     }
// }
// class Mage{
//     constructor({name, xp, health} = {}){
//         this.name=name;
//         this.xp =xp;
//         this.health = health;
//         this._speals = [];
//     }
//     get speals(){
//         return this._speals;
//     }
//     set speals(value){
//         this._speals.push(value);
//     }
//     gainXp(amout) {
//         console.log(`${this.name} отримує ${amout} досвіду`);
//         this.xp += amout;
//     }
// }
// const values = [
//     { name: "HTML" },
//     { name: "CSS" },
//     { name: "JavaScript" },
//     { name: "Node.js" },
//     { name: "React" },
//     { name: "Vue" },
//     { name: "Next.js" },
//     { name: "Mobx" },
//     { name: "Redux" },
//     { name: "React Router" },
//     { name: "GraphQl" },
//     { name: "PostgreQl" },
//     { name: "MongoDB" },
//   ];
//   const refs={
//     listEl:document.querySelector(".js-list"), 
//     input: document.querySelector(".js-input"),
//     addBtn:document.querySelector(".js-add")
//   }
// // const listEl = document.querySelector('.lessons');
// // const itemEl = document.createElement('li');
// // itemEl.classList.add("lesson");
// // itemEl.textContent = "hi Oleg";

// // const itemElSecond = document.createElement('li');
// // itemElSecond.classList.add("lesson");
// // itemElSecond.textContent = "hi ILUSHA";

// refs.listEl.append(...creatListItems(values));
// refs.addBtn.addEventListener("click",onAddBtnClick);
// refs.input.addEventListener("input", handleInputValue);

// function populateMarkup(markup) {
//   refs.listEl.append(...creatListItems(markup));
// }

// function handleInputValue(event) {
// const filter = event.currentTarget.value;
// const filterArr = values.filter((e) => e.name.includes(filter.toLowerCase())
// );
// refs.listEl.innerHTML = "";
// populateMarkup(filterArr);
// }

// function onAddBtnClick(event){
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("lesson");
//     itemEl.classList.add("js-list");
//     itemEl.textContent = refs.input.value;
//     refs.input.value='';
//     refs.listEl.append(itemEl)
    
// }
// console.log(creatListItems(values))
//   function creatListItems(values){
//     return values.map((value)=>{
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("lesson");
//     itemEl.textContent = value.name;
//     return itemEl;
//   });
//   }

// const refs = {
//     allBtn: document.querySelectorAll(".btn"),
//     btnContainer: document.querySelector(".wrrap-btn"),
// };
// console.dir(refs.allBtn);
// refs.allBtn.forEach((btn) => {
//     btn.addEventListener("click", onClickBtn);
// });

// refs.btnContainer.addEventListener("click", onClickBtn);

// function onClickBtn(event){
//     if(event.target.nodeName !== "BUTTON") {
//         return;
//     }
//     const bgValue = event.target.dataset.value
//     changeBodyBg(bgValue)
//     console.log("click");
// }

// function changeBodyBg(colorBg) {
//     document.body.style.backgroundColor = colorBg;
// }



// const refs={
//     boxsContainer: document.querySelector(".parent"),
//     createBtn:document.querySelector("[data-create]"),
//     input: document.querySelector(".quantityBoxs")
//   }
//   let boxSize=30;
//   refs.createBtn.addEventListener("click",onClickBtn)
//   function onClickBtn(event){
//     const inputValue=refs.input.value;
//     refs.boxsContainer.append(...createBoxs(inputValue));
//   }

//   function createBoxs(inputValue) {
//     const boxEl = [];
//     for(let i=0; i<inputValue;i+=1){
//         const box=document.createElement("div");
//         box.style.width=`${boxSize}px`;
//         box.style.height=`${boxSize}px`;
//         boxSize+=10;
//         box.style.backgroundColor=getRandomHexColor();
//         boxEl.push(box);
//       }
//       return boxEl;
//   }

//   function getRandomHexColor() {
//     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
//   }

// const refs = {
//     input: document.querySelector(".input"),
//     createBtn:document.querySelector("[data-create]"),
// };

// refs.createBtn.addEventListener("click", handleInputValue);

// const quantity = refs.input.length;
// function handleInputValue(event){
//     const inputEl = event.currentTarget;
//     if(inputEl.value.length === 6) {
//         inputEl.classList.add('validate');
//         inputEl.classList.remove('no-validate')
//         return;
//     }
//     if(!inputEl.classList.contains('no-validate')){
//         inputEl.classList.add('no-validate');
//         if(inputEl.classList.contains('no-validate')){
//             inputEl.classList.remove('validate');
//         }
//     }
// }


// 3 input
// const refs = {
//     wrapper: document.querySelector(".wrapper"),
//     sumbitBtn: document.querySelector(".js-btn-sumbit")
// }
// refs.wrapper.addEventListener("click", blockInput)
// function blockInput(event){
//     if(event.target.nodeName !== "BUTTON"){
//         return
//     }
//     event.target.previousElementSibling.toggleAttribute("disabled")
// }
// refs.sumbitBtn.addEventListener("click", sumbitInputText)
// function sumbitInputText(event){
//     const formData = new FormData(refs.wrapper);
//     const obj = {}
//     for(let [key, value] of formData){
//         obj[key] = value;
//     }
//     console.log(obj)
// }




// modal
// const refs = {
// openBtn: document.querySelector("[data-modal-open]"),
// closeBtn: document.querySelector("[data-modal-close]"),
// modal: document.querySelector("[data-modal]"),
// smallModal: document.querySelector(".modal")
// };
// document.addEventListener("click", closeModalByClickOutModal)
// refs.openBtn.addEventListener("click", addModal);
// refs.closeBtn.addEventListener("click", removeModal);
// function addModal() {
// refs.modal.classList.remove("is-hidden");
// document.addEventListener("keyup", closeModalbyEscape);
// }
// function removeModal() {
// refs.modal.classList.add("is-hidden");
// }
// function closeModalbyEscape(event){
// if(event.code === "Escape"){
// refs.modal.classList.add("is-hidden");
// document.removeEventListener("keyup", closeModalbyEscape);
// }
// }
// function closeModalByClickOutModal(event) {
// if (!event.target.closest('.modal') && event.target !== refs.openBtn) {
// refs.modal.classList.add('is-hidden');
// }
// }



const refs = {
    rabotniki: document.querySelector(".btn-container")
}

refs.rabotniki.addEventListener("click", TapOnOleg);
const mySet = new Set();
mySet.add(4)

function TapOnOleg(e){
    const btnEl = e.target;
    if (btnEl.nodeName !== "BUTTON") {
        return;
    }

    btnEl.classList.toogle("active");
    if(btnEl.classList.contains('active')){
        selectorTags.add(btnEl.dataset.value);
    } else {
        selectorTags.delete(btnEl.dataset.value);
    }

console.log(selectorTags);    // e.onclick = showOleg;
}

// function showOleg(){
//     console.log(e);
// }