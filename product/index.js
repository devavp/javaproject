
function viewFunc() {
    document.querySelector("div.form_container").style.display = "block";
    document.querySelector("div.card-cont").style.display="none";
    document.querySelector("div.heading").style.display="none";
}
function closeFunc() {
    document.querySelector("div.form_container").style.display = "none";
    document.querySelector("div.card-cont").style.display="block";
}
const val = document.getElementById("val");



val.addEventListener("click", (e) => {
    e.preventDefault();
    const product = document.getElementById("product");
    const price = document.getElementById("price");
    const desc = document.getElementById("desc");
    const small1 = document.getElementById("product-s");
    const small2 = document.getElementById("price-s");
    const small3 = document.getElementById("desc-s");
    if (product.value == "") {
        product.style.border = "2px solid red";
        small1.innerHTML="please enter a product";
        small1.style.color="red";
        product.focus()
        addEventListener("input",()=>{
            product.style.border = "2px solid green";
            small1.innerHTML="";
        })
    }
    else{
       
        if (price.value == "") {
            price.style.border = "2px solid red";
            small2.innerHTML="please enter a price";
            small2.style.color="red";
            price.focus()
            
            addEventListener("input",()=>{
                if(price.value<=0){
                    price.style.border = "2px solid red";
                small2.innerHTML="please enter a valid price";
                small2.style.color="red";
                price.focus()
                }
                price.style.border = "2px solid green";
                small2.innerHTML="";
            })
        }
        else{
           
            if (desc.value == "") {
                desc.style.border = "2px solid red";
                small3.innerHTML="please enter the desc";
                small3.style.color="red";
                desc.focus()
                addEventListener("input",()=>{
                    desc.style.border = "2px solid green";
                    small3.innerHTML="";
                })
            }
            else{
                const productObj = {
                    product: product.value,
                    price: price.value,
                    description: desc.value
                };
            
                let products = JSON.parse(localStorage.getItem("products")) || [];
                products.push(productObj);
                localStorage.setItem("products", JSON.stringify(products));
            
                // product.value = "";
                // price.value = "";
                // desc.value = "";
                let pform=document.getElementById("p-form");
                pform.reset();
                document.querySelector("div.form_container").style.display = "none";
                document.querySelector("div.card-cont").style.display="block";
               
            
                viewProducts();

               
                // let ls = localStorage.getItem("product");
                // if(ls){

                //     let gt = JSON.parse(ls);
                //     var db = {};
                //     db["product"] = product.value;
                //     db["price"] = price.value;
                //     db["description"] = desc.value;
    
                    
                //     gt.push(db);
                //     localStorage.setItem("product",JSON.stringify(gt));



                // }
                // else{
                //     alert("no value");
                //     var gt = [];

                //     var db = {};
                //     db["product"] = product.value;
                //     db["price"] = price.value;
                //     db["description"] = desc.value;
    
                    
                //     gt.push(db);
                //     localStorage.setItem("product",JSON.stringify(gt));
                // }
                 
                
   


                // product.value = "";
                // price.value = "";
                // desc.value = "";


                // console.log(db);
                // db = JSON.stringify(db);
                // localStorage.setItem("db",db);
                // let a = localStorage.getItem("db");
                // let p = JSON.parse(a);
                // console.log("localStorage"+p);

                // let ls = localStorage.getItem("db");
                // if(ls){

                //     ls.push(db);
                //     localStorage.setItem("db",ls);
                // }
                // else{
                //     localStorage.setItem("db",[])
                // }

            }
        }
    }
});

function viewProducts() {
    const cart = document.getElementById("cart");
    cart.innerHTML = "";

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const inlineStyle = document.createElement("div");
        inlineStyle.classList.add("inline-style");

        const productDiv = document.createElement("div");
        const productName = document.createElement("h2");
        productName.classList.add("product");
        productName.textContent = "Product";
        const productValue = document.createElement("h3");
        productValue.classList.add("productValue");
        productValue.textContent = product.product;
        productDiv.appendChild(productName);
        productDiv.appendChild(productValue);

        const priceDiv = document.createElement("div");
        const priceName = document.createElement("h2");
        priceName.classList.add("price");
        priceName.textContent = "Price";
        const priceValue = document.createElement("h3");
        priceValue.classList.add("priceValue");
        priceValue.textContent = product.price;
        priceDiv.appendChild(priceName);
        priceDiv.appendChild(priceValue);

        const descDiv = document.createElement("div");
        const descName = document.createElement("h4");
        descName.classList.add("desc");
        descName.textContent = "Description";
        const descValue = document.createElement("h5");
        descValue.classList.add("descValue");
        descValue.textContent = product.description;
        descDiv.appendChild(descName);
        descDiv.appendChild(descValue);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#10060;";
        deleteBtn.onclick = () => {
            deleteProduct(index);
        };

        inlineStyle.appendChild(productDiv);
        inlineStyle.appendChild(document.createElement("hr"));
        inlineStyle.appendChild(priceDiv);
        inlineStyle.appendChild(document.createElement("hr"));
        inlineStyle.appendChild(descDiv);
        inlineStyle.appendChild(deleteBtn);

        card.appendChild(inlineStyle);
        cart.appendChild(card);
  
//         const card = `
//         <div class="card">
//      <div class="inline-style">
//          <div>
//              <h2 class="product">product</h2>
//              <h3 class="productValue">${p.product}</h3>
//          </div>
//          <hr>
//          <div>
//              <h2 class="price">price</h2>
//              <h3 class="priceValue">${p.price}</h3>
//          </div>
//          <hr>
//         <div> <h4 class="desc">Description</h4>
//          <h5 class="descValue">${product.description}</h5></div>
//          <button onclick="deleteProduct(${index})">&#10060;</button>
//      </div>
     
//          </div>
//  </div>
//     `;
//     cart.innerHTML += card;
});
}


function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    viewProducts();
}

window.addEventListener("load", viewProducts);


// window.addEventListener("load",function(){

//     var ls = this.localStorage.getItem("product");
   

//         var cart = this.document.getElementById("cart");
//         var db = JSON.parse(ls)
//         const products=JSON.parse(this.localStorage.getItem("products"))||[];
//         products.forEach((product, index) => {
//             const card =` <div class="card">
//         <div class="inline-style">
//             <div>
//                 <h2 class="product">product</h2>
//                 <h3 class="productValue">${product.product}</h3>
//             </div>
//             <hr>
//             <div>
//                 <h2 class="price">price</h2>
//                 <h3 class="priceValue">${product.price}</h3>
//             </div>
//             <hr>
//            <div> <h4 class="desc">Description</h4>
//             <h5 class="descValue">${product.description}</h5></div>
//         </div>
//         <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
//             </div>
//     </div>`
//     cart.appendChild(card);
//         });
        



        // console.log(db)
        // db.map((e)=>{

        //     var card = this.document.createElement("div");
        //     card.setAttribute("class","card");
        //     var product = this.document.createElement("h2");
        //     product.setAttribute("class","product");
        //     product.innerHTML="Product";
        //     var productValue = this.document.createElement("h3");
        //     productValue.setAttribute("class","productValue");
        //     productValue.innerHTML = e.product;
        //     var price = this.document.createElement("h4");
        //     price.setAttribute("class","price");
        //     price.innerHTML="Price";
        //     var priceValue = this.document.createElement("h5");
        //     priceValue.setAttribute("class","priceValue");
        //     priceValue.innerHTML = e.price;
        //     var desc = this.document.createElement("p");
        //     desc.setAttribute("class","desc");
        //     desc.innerHTML = "Description";
        //     var descValue = this.document.createElement("p");
        //     descValue.setAttribute("class","descValue");
        //     descValue.innerHTML = e.description;


        //     card.appendChild(product);
        //     card.appendChild(productValue);
        //     card.appendChild(price);
        //     card.appendChild(priceValue);
        //     card.appendChild(desc);
        //     card.appendChild(descValue);

        //     cart.appendChild(card);
    

        // })


    


// });