const image=["OIP.jpg","2.jpg","3.jpg","4.jpg"]
let imagelength=image.length
let i=0
set = setInterval(slider,2000)
function slider(){
    i++
    // i=i%imagelength
    if(i<5){
    document.getElementById("image").src=`images/${image[i-1]}`
    console.log(i-1)
    }
    else{
        i=0
    }
       
    
}
function next(){
i++
i=i%imagelength
document.getElementById("image").src=`images/${image[i]}`
console.log(i)
}
function prev(){
    i--
    // if(i<0){i=imagelength-1} optional

    if(i>=0){
        document.getElementById("image").src=`images/${image[i]}`
        console.log(i)
    }
    else{
        i=imagelength-1
    }
}
function stops(){
    clearInterval(set)
    document.getElementById("image").setAttribute("transform","scale(1.5)")

}
function starts(){
    set = setInterval(slider,2000)

}
