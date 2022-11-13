
document.querySelector("#butt").addEventListener("click", function mySign(){
    location.href = "signup.html"
})

document.querySelector("#b2").addEventListener("click", function mylogin(){
    location.href = "login.html"
})

document.querySelector("#home").addEventListener("click", function myhome(){
    location.href = "index.html"
})

document.querySelector("#recipes").addEventListener("click", function myhome(){
    location.href = "recipes.html"
})

document.querySelector("#artical").addEventListener("click", function myhome(){
    location.href = "artical.html"
})

let arr = [
    {
        img: "https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/deal/6/671-4245-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/deal/3/383-1189-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/deal/7/712-5119-m.jpg"
    }
]

let arrr = [
    {
        img: "https://www.kindmeal.my/photos/shop/4/467-3019-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/shop/1/195-2509-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/shop/4/443-2874-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/shop/5/553-4115-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/shop/5/565-4200-m.jpg"
    },
    {
        img: "https://www.kindmeal.my/photos/shop/5/599-4453-m.jpg"
    }
]

let count = 0;

setInterval(()=>{
    myImg(arr)
    myLogo(arrr)
}, 3000)

function myImg(arr){
    if(count == arr.length){
        count = 0
    }
    
        document.querySelector("#displayImg").innerHTML = null;

        let image = document.createElement("img")
        image.src = arr[count].img;
        image.style = "width: 100%; height: 430px"

        document.querySelector("#displayImg").append(image)
        // count++
    
}

function myLogo(arrr){
    if(count == arrr.length){
        count = 0
    }
    
        document.querySelector("#displayLogo").innerHTML = null;

        let image = document.createElement("img")
        image.src = arrr[count].img;
        image.style = "width: 100%; height: 430px"

        document.querySelector("#displayLogo").append(image)
    count++
}


// let arr = [
//     {img: "https://www.kindmeal.my/photos/deal/7/712-5119-m.jpg"},
//     {img: "https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"},
//     {img: "https://www.kindmeal.my/photos/deal/6/671-4245-m.jpg"},
//     {img: "https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg"},
//     {img: "https://www.kindmeal.my/photos/deal/3/383-1189-m.jpg"},
//     {img: "https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg"},
// ];

// let display = document.querySelector("#displayImg");
// console.log(display)
// arr.forEach((elem) =>{
//     // let x = document.createElement("img")
//     // x.src = elem.src
//     setInterval(function(){
//         // let x = document.createElement("img")
//         // x.src = elem.img
//         // display.append(x)
//         //display = elem.img
//         //console.log(x)
//     }, 1000)
//     // console.log(x.src)
// })

//for(let i=0; i<arr.length; i++){
    
    // setInterval(function(){
    //     display = arr[3].img
    //     //console.log(display)
    // }, 1000)
//}


    // let x = document.createElement("img")
    // x.src = elem.src
    // setInterval(function(){
    //     let display = document.querySelector("#displayImg");
    //     console.log(display)
    //     arr.forEach((elem,index) =>{
    //     let x = document.createElement("img")
    //     x.src = elem.index.img
    //     display.append(x)
        
    //     console.log(x)
    // })
    // }, 1000)
    // console.log(x.src)
