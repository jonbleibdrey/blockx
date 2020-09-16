class Rental {
  constructor(
    id,
    title,
    poster,
    description,
    genre,
    rental_price,
    subscriber_id
  ) {
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
        <img src="${this.poster}">
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
        <h1>---------------------------</h1>
        </div> 

        `;
  }
  // <button class="delete-bttn" data-id=${this.id} onclick="deleteRental()"> Delete Rental </button>
  // render subscriber instance method
}
