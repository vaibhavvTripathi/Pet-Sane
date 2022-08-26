const productArray = document.querySelector(".insert-food-product")
const totalItems = document.querySelector(".cart-count")


BrandMain.forEach((x) => {
   let search = basket.find((y)=>{
       return y.id === x.id
   })
    productArray.innerHTML += `
    <div class= "col-12 col-md-6 col-lg-3">
     <div class="card card-wrapper px-lg-2 pt-2 pb-1 w-md-25" >
       <img class="card-img-top width-adjust" src="${x.img}" style = "height: 200px;  " alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">${x.Name} <span class="text-muted h6" style="float:right">$${x.price}</span></h5>
        
         <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div class="button-card d-flex justify-content-between flex-column" >
            <div class="wrap-decrement d-flex align-item-center mb-1">
              <div  class = "totalUnits border px-2 py-1 shadow-sm w-75 ">Total Units: <span id="${x.id}">${search===undefined?0:search.item}</span></div>
              <i onclick ="decrement(${x.id})" class="bi bi-dash-lg border pt-1 px-4 w-25" style="cursor:pointer"></i>
          </div>
            <button onclick ="increment(${x.id})"  class="card-btn btn  bg-success text-white "><i class="bi bi-cart4"></i> Add to Cart</button>
         </div>
       </div>
      </div>  
    </div>                                        
    `
  });

  
  const increment = (id)=>{
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
  }

  const decrement = (id)=>{
    let trueId = id.id
    let search = basket.find((x)=>{
          return trueId === x.id
    })
    if(search===undefined) return
    else if(search.item>0) {
      search.item -= 1;
    }
    else{
     return;
    }
    updateItems(trueId)
    updateCart(basket)
  }

 const updateCart = ((basket)=>{
  localStorage.setItem("data",JSON.stringify(basket))
  let count = 0
   basket.forEach((x)=>{
      count += x.item
   })
  totalItems.innerHTML = count
 })
 updateCart(basket)

 const updateItems = (trueId)=>{
    let items = document.getElementById(trueId)
    let search = basket.find((x)=>{
      return x.id === trueId
    })
    items.innerHTML = search.item
 }

 console.log(basket)