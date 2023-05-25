let image = document.getElementById("img");
let meno = document.getElementById("name");
let job = document.getElementById("job");
let paragraf = document.getElementById("paragraf");
let previous_button = document.getElementById("previous_button")
let next_button = document.getElementById("next_button")
let suprise_button = document.getElementById("suprise_button")

let names = ["Anna Johnson","Peter Jones","Bill Anderson","Susan Smith"]
let jobs = ["web designer","intern","the boss","web developer"] 
let paragrafs = ["Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"]
let img = ["./img/person-2_np9x5l.jpg","./img/person-3_ipa0mj.jpg","./img/person-4_t9nxjt.jpg","./img/person-1_rfzshl.jpg"]

let number = 0
suprise_button.onclick = function(){
    number = Math.floor(Math.random() * 4);

  image.src = img[number]
  job.innerHTML = jobs[number]
  meno.innerHTML = names[number]  
  paragraf.innerHTML = paragrafs[number]
}

previous_button.onclick = function(){
if(number < 0){
  number = 3
  image.src = img[number]
  job.innerHTML = jobs[number]
  meno.innerHTML = names[number]  
  paragraf.innerHTML = paragrafs[number]
} else if (number <= 3){
  image.src = img[number]
  job.innerHTML = jobs[number]
  meno.innerHTML = names[number]  
  paragraf.innerHTML = paragrafs[number]
  number--
}
 }

next_button.onclick = function(){
  if(number <= 3){
    image.src = img[number]
    job.innerHTML = jobs[number]
    meno.innerHTML = names[number]  
    paragraf.innerHTML = paragrafs[number]
    number++
  } else if (number >= 4 ){
    number = 0
    image.src = img[number]
    job.innerHTML = jobs[number]
    meno.innerHTML = names[number]  
    paragraf.innerHTML = paragrafs[number]
  }
    
  
  }