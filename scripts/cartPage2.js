const cartContent = document.querySelector('.empty-cart')
const itemsContent = document.querySelector('.items-content')
const totalItems = document.querySelector(".cart-count")
const price = document.querySelector('.price-details')
const totalPrice = document.querySelector('.total-price-details')

console.log(basket)
let generatePage=((basket)=>{
  

    console.log(basket)
    if(basket=== undefined ) {
        cartContent.innerHTML = `
       <h1 class="border-bottom pb-4 ">Your Cart is empty</h1>
            <div class="section-2 d-flex justify-content-between align-item-center border-bottom py-5">
                <p class="text-muted ">Please take me back to <a href="" class="text-success lead" style="text-decoration:none;">petsane.com</a></p>
                <a href="productPage.html" class="btn btn-success w-25 ">Go back to cart</a>
            </div>
            <div class="pre-footer d-flex flex-column text-center">
               <p class="fw-bold mt-3">New Customer?</p>
               <button class="bg-dark text-light w-25 mx-auto" data-bs-toggle="modal" data-bs-target="#signin">Sign In</button>
            </div>
            
    
    `
    }
   
   else if(basket.length=== 0 ) {

      cartContent.innerHTML = `
     <h1 class="border-bottom pb-4 ">Your Cart is empty</h1>
          <div class="section-2 d-flex justify-content-between align-item-center border-bottom py-5">
              <p class="text-muted ">Please take me back to <a href="" class="text-success lead" style="text-decoration:none;">petsane.com</a></p>
              <a href="productPage.html" class="btn btn-success w-25 ">Go back to cart</a>
          </div>
          <div class="pre-footer d-flex flex-column text-center">
             <p class="fw-bold mt-3">New Customer?</p>
             <button class="bg-dark text-light w-25 mx-auto" data-bs-toggle="modal" data-bs-target="#signin">Sign In</button>
          </div>
  `
  }
    
    else{
     
        basket.forEach(x => {
            let search = BrandMain.find((y)=>{
                return y.id === x.id
            })
            
            if(search !== undefined) {
                itemsContent.innerHTML += `
            <div class="card card-wrapper px-lg-2 pt-2 pb-1 border-bottom pb-2 d-flex flex-column flex-lg-row mb-2 align-items-center" >
                <img class="card-img-top width-adjust border-lg-end pe-lg-1 " src="${search.img}" style = "height: 200px; max-width:300px; min-width:200px;"  alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${search.Name}</h5>
                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6 class="text-muted h6 py-1 pb-2">$${search.price}</h6>
                <div class="button-card d-flex justify-content-between flex-column" >
                    <div class="wrap-decrement d-flex align-item-center mb-1">
                    <div  class = "totalUnits border px-2 py-1 shadow-sm w-75 ">Total Units: <span id="${x.id}" >${x.item}</span></div>
                    <i onclick = "decrement(${x.id})" class="bi bi-dash-lg border pt-1 px-4 w-25" style="cursor:pointer"></i>
                </div>
                    <button onclick = "increment(${x.id})"  class="card-btn btn  bg-success text-white ">+ Add one more item</button>
                </div>
                </div>            
            </div>        
                    `
            }
        });
    }
}) 

let increment = (id)=>{
    let trueId = id.id
    let search = basket.find((x)=>{
          return trueId === x.id
    })
    if(search) {
      search.item += 1;
    }
    else{
      basket.push({
        id : trueId,
        item : 1
      })
    }
    updateItems(trueId)
    updateCart(basket)
    generatePrice()
  }

let decrement = (id)=>{
    let trueId = id.id
    let search = basket.find((x)=>{
          return trueId === x.id
    })
    
   
    if(search===undefined) return
    else if(search.item>0) {
      search.item -= 1;
    }
    
    updateItems(trueId)
    updateCart(basket)
    generatePrice()
  }

let updateCart = ((basket)=>{
    
 
  let count = 0
   basket.forEach((x)=>{
      count += x.item
   })
  totalItems.innerHTML = count
  if(count===0) {
    basket = []
    generatePage()
    localStorage.setItem("data",JSON.stringify(basket)) 
   
   return
  }
 })
 updateCart(basket)

let updateItems = (trueId)=>{
    let items = document.getElementById(trueId)
    let search = basket.find((x)=>{
      return x.id === trueId
    })
    items.innerHTML = search.item
 }

 
// pricing section
let generatePrice = (()=>{
    let count = 0
   basket.forEach((x)=>{
       let search = BrandMain.find((y)=>{
        return x.id === y.id
       })
       
       if(search !== undefined) {
         count += x.item*search.price
       }
       price.innerHTML ='$'+count
      
       if(count === 0){
          totalPrice.innerHTML = '$0'
       } 
       else if(count <40) totalPrice.innerHTML = '$'+ (count+10)
       else{
        totalPrice.innerHTML = '$'+ (count)
       }
   })
})
generatePrice()

generatePage(basket)



let clearCart = ()=>{
    basket = []
    generatePage()
    localStorage.setItem("data",JSON.stringify(basket)) 
   updateCart(basket)
  }