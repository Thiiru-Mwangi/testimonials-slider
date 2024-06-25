const testimonials = [
{
    name: "Tareq Lung'aho",
    imgSrc: "./img-asets/4s1.jpg",
    text: "I recently purchased the Elegance Pro Pen, and it has completely transformed my writing experience. Whether I’m jotting down quick notes or drafting lengthy documents, this pen never falters."
},
{
    name: "Kamau Ndumberi",
    imgSrc: "./img-asets/4s3.jpg",
    text: "The sleek design and perfect weight make it a joy to hold, while the smooth ink flow ensures every word glides effortlessly across the page. Whether I’m jotting down quick notes or drafting lengthy documents, this pen never falters."
},
{
    name: "Musyoka Muia",
    imgSrc: "./img-asets/4s4.jpg",
    text: "Its reliability and superior craftsmanship are evident in every detail. The Elegance Pro Pen is not just a writing instrument; it’s a statement of style and precision"
},
{
    name: "Kipchoge Langat",
    imgSrc: "./img-asets/4s5.jpg",
    text: "I highly recommend it to anyone seeking both functionality and sophistication in their everyday writing tools."
},
{
    name: "Epitas Mudavadi",
    imgSrc: "./img-asets/4s6.jpg",
    text: "The pen’s stylish look and premium materials make it a standout on my desk. I also appreciate its durability and the ease with which it can be refilled."
}
];

const imgEl = document.querySelector("img")
const usernameEl = document.querySelector(".username")
const textEl = document.querySelector(".text")

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, imgSrc, text} = testimonials[idx]
    imgEl.src = imgSrc;
    usernameEl.innerText = name;
    textEl.innerText = text;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000)
}