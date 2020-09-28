class Rental {
  constructor(
    id,
    title,
    poster,
    description,
    genre,
    rental_price,
    subscriber_id) 
    
    {
    this.id = id;
    this.title = title;
    this.poster = poster;
    this.description = description;
    this.genre = genre;
    this.rental_price = rental_price;
    this.subscriber_id = subscriber_id;
  }


  renderRental() {
    let rentalDiv = document.getElementById("rentals-container");
    rentalDiv.innerHTML += `
        <ul> 
        <div class="rent-info"> 
        <li class="rent-text"> 
        subscriber id: ${this.subscriber_id}  
        </li>
        <li class="rent-text">
        <img src="${this.poster}" class="rent-image">
        </li>
        <li class="rent-text">
        title:${this.title}
        </li>
        <li class="rent-text">
        description:${this.description}
        </li>    
        <li class="rent-text">
        genre:${this.genre}
        </li>    
        <li class="rent-text">
        rental price:${this.rental_price}
        </li>    
        </ul> 
        </div> 

        `;
  }


   static rentalForm(){
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
       username: <select id="subscriber_id">
       <select/>
       <input type="submit" value="Create" >
       </form>
       <br>
       </div>
       `
       let select = document.getElementById('subscriber_id')
       for(const subscriber of Subscriber.all){
         const option = document.createElement("option")
         option.value = subscriber.id
         option.innerHTML = subscriber.username
         select.appendChild(option)
       }

       
    rentalsForm.addEventListener("submit", this.rentalFormSubmission)

}

static rentalFormSubmission(event){
    event.preventDefault()
    let photo = document.getElementById("poster").value
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let genre = document.getElementById("genre").value
    let rentalPrice = document.getElementById("rentalPrice").value
    let subscriberId = document.getElementById("subscriber_id").value

    let rental = {
      title: title,
      poster: photo,
        description: description,
        genre: genre,
        rental_price: rentalPrice,
        subscriber_id: subscriberId
      }


    fetch(`${BASE_URL}/rentals`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rental)
    })
    .then(resp => resp.json())
    .then(rentals => {
        let r = new Rental (rentals.id ,rentals.title, rentals.poster, rentals.description, rental.genre, rentals.rental_price, rentals.subscriber_id)
      
        r.renderRental()
    })

}

}
