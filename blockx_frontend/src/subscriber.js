class Subscriber {

  static all = []

  constructor(id, username, email, photo, rentals) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.photo = photo;
    this.rentals = rentals;
    Subscriber.all.push(this) 
  }



  renderSubscriber() {
    let subscriberDiv = document.getElementById("subscribers-container");
      subscriberDiv.innerHTML += `
        <div class="sub-info" id="${this.id}"> 
          <ul>   
            <li class="sub-text">
              subscriber id:${this.id}
            </li>
            <li class="sub-text">
              <img src="${this.photo}">
            </li>
            <li class="sub-text">
              Username: ${this.username} 
            </li>     
            <li class="sub-text">
              Email:${this.email}
            </li> 
          </ul> 
        <ul>
            ${this.rentals.map(
              (rental) =>
                  `
                <h1 class="h1Rental">Rentals</h1>
                  <li>
                    title rented:${rental.title}
                  </li>
                  <li>
                    genre:${rental.genre}
                  </li>
                  <li>
                    rental price:${rental.rental_price}
                  </li>
                  `
              )}
        </ul>
          <div class="delete-button"> 
            <button class="delete-bttn"> Delete Subscriber </button>   
          </div>
        </div>
        
        `;
    const deleteButton = document.getElementsByClassName("delete-bttn");
      for (const button of deleteButton) {
        button.addEventListener("click", this.deleteSubscriber.bind(this));
    }
  }
  // delete - delete a subscriber
  deleteSubscriber() {
    let sId = document.getElementById(this.id);
      fetch(`${BASE_URL}/subscribers/${this.id}`, {
        method: "DELETE",
    });
    sId.remove();
  }
}
