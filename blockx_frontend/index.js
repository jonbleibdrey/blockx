document.addEventListener("DOMContentLoaded", () => {
    //---subscribers----
    createForm()
    fetchSubscribers()
    // ----rentals----
    fetchRentals()
    rentalForm()
})
    const BASE_URL = "http://localhost:3000"

    // read - fetch subscribers index

    function fetchSubscribers(){
        fetch(`${BASE_URL}/subscribers`)
        .then(resp => resp.json())
        .then(subscribers => {
            for(const subscriber of subscribers){
                let s = new Subscriber (subscriber.id, subscriber.username, subscriber.email, subscriber.photo, subscriber.rental)
                s.renderSubscriber()
                
            }
            
        })
    }

    // create = create a a new subscriber

    function createForm(){
        let subscribersForm = document.getElementById("subscribers-form")
        subscribersForm.innerHTML += 
        `
        <div class="sub-form">
        <h1>
        Create Subscriber:
        </h1>
        <form>
           Your Photo URL: <input type="text" id="photo" class="form">    
           Username: <input type="text" id="username" class="form">   
           Email: <input type="text" id="email"class="form"> 
           <input type="submit" value="Create" > 
        </form> 
        <br>
        </div>
        `
        subscribersForm.addEventListener("submit", subscriberFormSubmission) 
      
    }
    
    function subscriberFormSubmission(){
        event.preventDefault()
        let photo = document.getElementById("photo").value
        let username = document.getElementById("username").value
        let email = document.getElementById("email").value

        let subscriber = {
            photo: photo,
            username: username,
            email: email
        }

        fetch(`${BASE_URL}/subscribers`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
        .then(resp => resp.json())
        .then(subscriber => {
            let s = new Subscriber (subscriber.id, subscriber.username, subscriber.email, subscriber.photo)
            s.renderSubscriber()
        })

    }
    // delete - delete a subscriber
    function deleteSubscriber(){
       let subscriberId = parseInt(event.target.dataset.id)

       fetch(`${BASE_URL}/subscribers/${subscriberId}`, {
           method: 'DELETE'
       })
       this.location.reload()
    }


    
    // read - fetch rentals index
    function fetchRentals(){
        fetch(`${BASE_URL}/rentals`)
        .then(resp => resp.json())
        .then(rentals => {
            for(const rental of rentals){
                let r = new Rental (rental.id, rental.title, rental.poster, rental.description, rental.genre, rental.rental_price, rental.subscriber_id)
                r.renderRental()
            }
            
        })
    }
    
    // create - rentals
    function rentalForm(){
        let rentalsForm = document.getElementById("rentals-form")
        rentalsForm.innerHTML += 
        `
        <div class="rental-form">
        <h1>
        Create rental:
        </h1>
        <form>
           poster: <input type="text" id="poster" class="form">    
           title: <input type="text" id="title" class="form">   
           description: <input type="text" id="description"class="form"> 
           genre: <input type="text" id="genre"class="form"> 
           rental price: <input type="text" id="rentalPrice"class="form"> 
           <input type="submit" value="Create" > 
        </form> 
        <br>
        </div>
        `
        rentalsForm.addEventListener("submit", rentalFormSubmission) 
      
    }
    
    function rentalFormSubmission(){
        event.preventDefault()
        let photo = document.getElementById("poster").value
        let title = document.getElementById("title").value
        let description = document.getElementById("description").value
        let genre = document.getElementById("genre").value
        let rentalPrice = document.getElementById("rentalPrice").value

        let rental = {
            rental: {
            title: title,
            poster: photo,
            description: description,
            genre: genre,
            rental_price: rentalPrice
            }
        }

        fetch(`${BASE_URL}/rentals`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rentals)
        })
        .then(resp => resp.json())
        .then(rentals => {
            let r = new Rental (rentals.poster ,rentals.title, rentals.description, rentals.genre, rentals.rental_price, rental.subscriber_id)
            r.renderRental()
        })

    }






























