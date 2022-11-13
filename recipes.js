document.querySelector("#home").addEventListener("click", function myhome() {
    location.href = "index.html"
})

document.querySelector("#b2").addEventListener("click", function mylogin() {
    location.href = "login.html"
})

document.querySelector("#b3").addEventListener("click", function mySign() {
    location.href = "signup.html"
})

document.querySelector("#recipes").addEventListener("click", function myhome() {
    location.href = "recipes.html"
})
document.querySelector("#artical").addEventListener("click", function myhome(){
    location.href = "artical.html"
})



let arr = [
    {
        "createdAt": "2022-11-11T09:37:14.299Z",
        "name": "Khaman Dhokla Recipe",
        "image": "https://www.kindmeal.my/photos/recipe/1039/1039474-58907-m.jpg",
        "catagery": "Snacks",
        "like": 29,
        "id": "1"
    },
    {
        "createdAt": "2022-11-12T07:44:09.184Z",
        "name": "Cheesy Garlic Bread",
        "image": "https://www.kindmeal.my/photos/recipe/104/104395-15521-m.jpg",
        "catagery": "Snacks",
        "like": 85,
        "id": "2"
    },
    {
        "createdAt": "2022-11-11T21:20:00.955Z",
        "name": "Making French Toast-easy",
        "image": "https://www.kindmeal.my/photos/recipe/1039/1039462-58891-m.jpg",
        "catagery": "Breakfast",
        "like": 83,
        "id": "3"
    },
    {
        "createdAt": "2022-11-11T11:58:56.498Z",
        "name": "Cherry Oat Bars",
        "image": "https://www.kindmeal.my/photos/recipe/94/94492-12998-m.jpg",
        "catagery": "Breakfast",
        "like": 67,
        "id": "4"
    },
    {
        "createdAt": "2022-11-12T05:53:26.768Z",
        "name": "Courgette And Feta Cheese Frittata",
        "image": "https://www.kindmeal.my/photos/recipe/113/113525-17486-m.jpg",
        "catagery": "Breakfast",
        "like": 68,
        "id": "5"
    },
    {
        "createdAt": "2022-11-11T23:10:00.353Z",
        "name": "Southern Pecan Pie",
        "image": "https://www.kindmeal.my/photos/recipe/118/118025-18372-m.jpg",
        "catagery": "Desserts",
        "like": 52,
        "id": "6"
    },
    {
        "createdAt": "2022-11-11T13:25:16.061Z",
        "name": "Hokkaido Cheese Tart",
        "image": "https://www.kindmeal.my/photos/recipe/1039/1039472-58905-m.jpg",
        "catagery": "Desserts",
        "like": 84,
        "id": "7"
    },
    {
        "createdAt": "2022-11-12T02:11:25.172Z",
        "name": "Peanut Butter Cups",
        "image": "https://www.kindmeal.my/photos/recipe/1039/1039477-58910-m.jpg",
        "catagery": "Desserts",
        "like": 70,
        "id": "8"
    },
    {
        "createdAt": "2022-11-11T18:46:52.041Z",
        "name": "Chocolate Cake",
        "image": "https://www.kindmeal.my/photos/recipe/1039/1039470-58903-m.jpg",
        "catagery": "Desserts",
        "like": 97,
        "id": "9"
    },
    {
        "createdAt": "2022-11-11T11:45:32.171Z",
        "name": "Nasi Lemak",
        "image": "https://www.kindmeal.my/photos/recipe/1000/1000011-19418-m.jpg",
        "catagery": "Main dish",
        "like": 84,
        "id": "10"
    },
    {
        "createdAt": "2022-11-11T15:22:45.581Z",
        "name": "Southern Macaroni And Cheese",
        "image": "https://www.kindmeal.my/photos/recipe/102/102405-15010-m.jpg",
        "catagery": "Main dish",
        "like": 23,
        "id": "11"
    },
    {
        "createdAt": "2022-11-12T07:30:00.932Z",
        "name": "Spinach And Feta Pizza",
        "image": "https://www.kindmeal.my/photos/recipe/84/84911-10621-m.jpg",
        "catagery": "Main dish",
        "like": 64,
        "id": "12"
    }
]

let data = []
let flag = true;
let url;
function handel() {

    let x = document.querySelector("#selec").value;

    if (x == "pizza") {
        let urll = `https://gunter-food-api.herokuapp.com/pizza`
        url = urll
    }
    if (x == "pasta") {
        let urll = `https://gunter-food-api.herokuapp.com/pasta`
        url = urll
    }
    if (x == "salads") {
        let urll = `https://gunter-food-api.herokuapp.com/salads`
        url = urll
    }
    if (x == "dessert") {
        let urll = `https://gunter-food-api.herokuapp.com/dessert`
        url = urll
    }
    if (x == "drinks") {
        let urll = `https://gunter-food-api.herokuapp.com/drinks`
        url = urll
    }
    if (x == "sauces") {
        let urll = `https://gunter-food-api.herokuapp.com/sauces`
        url = urll
    }
    if (x == "sides") {
        let urll = `https://gunter-food-api.herokuapp.com/sides`
        url = urll
    }
    if (x == "all") {
        flag = false

    }

    if (flag == false) {
        document.querySelector("#mid").innerHTML = ""
        arr.forEach((elem) => {
            let div = document.createElement("div")

            let name = document.createElement("h2")
            name.innerHTML = elem.name

            let img = document.createElement("img")
            img.src = elem.image
            img.style = "width:100%:"

            let catagery = document.createElement("h4")
            catagery.innerHTML = elem.catagery

            let like = document.createElement("p")
            like.innerHTML = "❤️" + elem.like

            div.append(name, img, catagery, like)

            document.querySelector("#mid").append(div)
        })
    }
    else {
        async function getDate() {
            try {
                let res = await fetch(url)
                let out = await res.json()

                data = out

                display(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getDate()

        function display(data) {
            document.querySelector("#mid").innerHTML = ""
            data.forEach((elem) => {

                let div = document.createElement("div")

                let name = document.createElement("h2")
                name.innerHTML = elem.name
                name.style = "color: teal"

                let img = document.createElement("img")
                img.src = elem.image
                img.style = "width:100%; border:1px solid black; border-radius:11px; border-color: dimgray"

                let catagery = document.createElement("h4")
                catagery.innerHTML = "Vegetarian  -  " + elem.vegetarian

                let like = document.createElement("p")
                like.innerHTML = "❤️" + elem.price

                div.append(name, img, catagery, like)

                document.querySelector("#mid").append(div)
            })
        }
    }


}



document.querySelector("form").addEventListener("submit", function myfunction(event) {
    event.preventDefault();
    let a = document.querySelector("#searchV").value
    let b = a.toLowerCase()
    console.log(typeof a.toLowerCase())
    data = []
    let flag = true;
    let url;



    if (b == "pizza") {
        let urll = `https://gunter-food-api.herokuapp.com/pizza`
        url = urll
    }
    if (b == "pasta") {
        let urll = `https://gunter-food-api.herokuapp.com/pasta`
        url = urll
    }
    if (b == "salads") {
        let urll = `https://gunter-food-api.herokuapp.com/salads`
        url = urll
    }
    if (b == "dessert") {
        let urll = `https://gunter-food-api.herokuapp.com/dessert`
        url = urll
    }
    if (b == "drinks") {
        let urll = `https://gunter-food-api.herokuapp.com/drinks`
        url = urll
    }
    if (b == "sauces") {
        let urll = `https://gunter-food-api.herokuapp.com/sauces`
        url = urll
    }
    if (b == "sides") {
        let urll = `https://gunter-food-api.herokuapp.com/sides`
        url = urll
    }
    if (b == "all") {
        flag = false

    }


    async function getDate() {
        try {
            let res = await fetch(url)
            let out = await res.json()
            // console.log(typeof out)
            data = out
            //console.log(data)
            display(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    getDate()

    function display(data) {
        document.querySelector("#mid").innerHTML = ""
        data.forEach((elem) => {

            let div = document.createElement("div")

            let name = document.createElement("h2")
            name.innerHTML = elem.name
            name.style = "color: teal"

            let img = document.createElement("img")
            img.src = elem.image
            img.style = "width:100%; border:1px solid black; border-radius:11px; border-color: dimgray"

            let catagery = document.createElement("h4")
            catagery.innerHTML = "Vegetarian  -  " + elem.vegetarian

            let like = document.createElement("p")
            like.innerHTML = "❤️" + elem.price

            div.append(name, img, catagery, like)

            document.querySelector("#mid").append(div)
        })
    }

})




arr.forEach((elem) => {
    let div = document.createElement("div")

    let name = document.createElement("h2")
    name.innerHTML = elem.name

    let img = document.createElement("img")
    img.src = elem.image
    img.style = "width:100%:"

    let catagery = document.createElement("h4")
    catagery.innerHTML = elem.catagery

    let like = document.createElement("p")
    like.innerHTML = "❤️" + elem.like

    div.append(name, img, catagery, like)

    document.querySelector("#mid").append(div)
})
