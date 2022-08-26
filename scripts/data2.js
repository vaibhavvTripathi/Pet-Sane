
const servicesArray = [
    {
        title: "Pet-Vaccinations",
        images: "img/Vaccine_pets.svg"
    },
    {
        title: "Diet-Analysis",
        images: "img/diet.svg"
    },
    {
        title: "Pet Adoption",
        images: "img/adoption.svg"
    },
    {
        title: "Pet-Training",
        images: "img/train.svg"
    }
]

const carouselData = [
    {carouselState: "carousel-item active",
     heading : "Book Your Appointment",
     button: "Book Now",
     backgroundColor: "#7A0BC0",
     width: "800px",
     source: "img/new_header_img.svg",
     id: "one"
    },
    
    {carouselState: "carousel-item",
    heading : "Explore our Products",
    button: "Buy Now",
    backgroundColor: "#6C63FF",
    width: "626px",
    source: "img/buyNow.svg",
    id:"two"
},
   
    {carouselState: "carousel-item",
    heading : "Donate For a cause",
    button: "Donate",
    backgroundColor: "#FF6863",
    width: "648px",
    source: "img/donate.svg",
    id: "three"
}
]

const BrandMain = [
    {
    carouselState: "carousel-item active",
    Name: "Purina Pro Plan",
    img: "brands/ppp.jpg",
    price : 20
    ,id:"one",
    display: "hi"
},
{carouselState: "carousel-item",
Name: "Hill's Colgate Palmolive",
img: "brands/hcp.jpg",
price : 30
,id:"two",
display: "hi"

},
{carouselState: "carousel-item",
Name: "General Mills",
 img: "brands/drolls.jpg",
 price : 10
 ,id:"three",
 display: "hi"
},
{carouselState: "carousel-item",
Name: "Royal Canin",
img: "brands/rc.jpg",
price : 40
,id:"four",
display: "hi"

},
{carouselState: "carousel-item",
Name: "The Clorox Company",
img: "brands/kittyfood.jpg",
price : 55
,id:"five",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Purina Tidy Cats",
img: "brands/ptc.jpg",
price : 60
,id:"six",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Purina Fancy Feast",
img: "brands/pff.jpg",
price : 75
,id:"seven",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Milk Bone",
img: "brands/milkbone.jpg",
price : 15
,id:"eight",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Friskies",
img: "brands/friskies.jpg",
price : 100
,id:"nine",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Pedigree",
img: "brands/pedigri.jpg",
price : 25
,id:"ten",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Drolls",
img: "brands/drolls.jpg",
price : 21
,id:"eleven",
display: "hi"
},
{carouselState: "carousel-item",
Name: "Catty Matty",
img: "brands/ppp.jpg",
price : 25
,id:"twelve",
display: "hi"
}
]

accordionData = [
    {
        no: "1",
        question: "What is petSane?"
    },
    {
        no: "2",
        question: "What do we exactly do?"
    },
    {
        no: "3",
        question: "What is petSane?"
    },
    {
        no: "4",
        question: "Are we budget-friendly?"
    },
    {
        no: "5",
        question: "Why to choose us?"
    }
]

let basket = JSON.parse(localStorage.getItem("data"))||[]
  
//   BrandLand.forEach((x) => {
//     otherArray.innerHTML += `
//     <div class= "col-12 col-md-6 col-lg-3">
//      <div class="card card-wrapper px-lg-2 pt-2 pb-1" >
//        <img class="card-img-top width-adjust" src="${x.img}" style = "height: 200px" alt="Card image cap">
//        <div class="card-body">
//          <h5 class="card-title">${x.Name}</h5>
//          <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//          <div class="button-card" >
//             <button class="card-btn btn text-light" style="background-color:#7A0BC0; float: right;">Explore</button>
//          </div>
//        </div>
//       </div>  
//     </div>                                        
//     `
//   });