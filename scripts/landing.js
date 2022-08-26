
const cardArray = document.querySelector(".card-array")
const carouselArray = document.querySelector(".insert-carousel")

const otherArray = document.querySelector(".insert-cloth-product")
const accordion = document.querySelector(".generate-accordion")
const SignUp = document.getElementsByClassName("custom-modal")


//services component
servicesArray.forEach((x) => {
    cardArray.innerHTML += `
    <div class= "col-12 col-md-6 col-lg-3">
     <div class="card card-wrapper px-lg-2 pt-2 pb-1" >
       <img class="card-img-top width-adjust" src="${x.images}" style = "height: 200px" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">${x.title}</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div class="button-card" >
            <button class="card-btn btn text-light" data-bs-toggle="modal" data-bs-target="#explore" style="background-color:#7A0BC0; float: right;">Explore</button>
         </div>
       </div>
      </div>  
    </div>                                        
    `
});

//carousel component
carouselData.forEach((x)=>{
     carouselArray.innerHTML += `
     <div class="${x.carouselState}" data-bs-interval="10000">
        <div class="container-sm  d-md-flex justify-content-around align-items-center mx-auto text-left p-5 bg-light" >
        <div class="info-section">
            <h1 class="text-left">${x.heading}</h1>
            <p class="lead my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident?
            </p>
            <button class="btn showcase-btn text-light" id="${x.id}" style = "background-color: ${x.backgroundColor}" >${x.button}</button>
        </div>
        <img class = "showcase-img d-none d-sm-block img-fluid " style = "width: ${x.width};" src="${x.source}" alt="">
        
        </div>            
     </div>
     `
})

//accordion component
accordionData.forEach((x)=>{
  accordion.innerHTML += `
  <div class="accordion-item">
      <h2 class="accordion-header" id="ques-${x.no}">
        <button class="accordion-button h1" type="button" data-bs-toggle="collapse" data-bs-target="#ans-${x.no}" aria-expanded="true" aria-controls="ans-${x.no}">${x.question}</button>
      </h2>
      <div id="ans-${x.no}" class="accordion-collapse collapse " aria-labelledby="ques-${x.no}" data-bs-paernt="#faqs">
      <div class="accordion-body">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias corporis beatae earum quam quis error doloribus distinctio, blanditiis animi!
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, recusandae.
      </div>
      </div>        
  </div>
  ` 
})

//regex section
const form = document.querySelector('.email-section') 
const password = document.querySelector('.password-section')

form.addEventListener('keyup',e=>{
  e.preventDefault()

  const email = form.email.value
  const pattern = /@gmail.com/

  if(pattern.test(email)) {
    document.querySelector('.email-message').innerHTML = 'This email is valid.'
    document.querySelector('.email-border').classList.add('border-success')
  }
  else{
    document.querySelector('.email-message').innerHTML = 'This email is invalid.'
  }

})

password.addEventListener('keyup',e=>{
  e.preventDefault()

  const key = password.password.value
  const pattrn = /^[a-zA-Z1-9]{10,20}$/

  if(pattrn.test(key)) {
    document.querySelector('.password-message').innerHTML = 'This password is valid.'
    document.querySelector('.password-border').classList.add('border-success')
  }
  else{
    document.querySelector('.password-message').innerHTML = 'This password is invalid.'
  }

})
