const img=['img.jpg','img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg']
const array_length=img.length
let i=0
let set=setInterval(slider,5000)

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src =`image_prac/${img[i]}`
}

function prev(){
i--
if(i<0){
    i=array_length-1
}
document.getElementById('image').src =`image_prac/${img[i]}`
}

function next(){
i++
i=i%array_length
document.getElementById('image').src =`image_prac/${img[i]}`
}