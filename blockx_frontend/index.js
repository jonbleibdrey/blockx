document.addEventListener("DOMContentLoaded", () => {
  //---subscribers----
  fetchSubscribers();
  createForm();
  // ----rentals----
  fetchRentals();
});
const BASE_URL = "http://localhost:3000";

// read - fetch subscribers index

function fetchSubscribers() {
  fetch(`${BASE_URL}/subscribers`)
    .then((resp) => resp.json())
    .then((subscribers) => {
      for (const subscriber of subscribers) {
        let s = new Subscriber(
          subscriber.id,
          subscriber.username,
          subscriber.email,
          subscriber.photo,
          subscriber.rentals
        );
        s.renderSubscriber();
      }
      Rental.rentalForm();
    });
}

// create = create a a new subscriber

function createForm() {
  let subscribersForm = document.getElementById("subscribers-form");
    subscribersForm.innerHTML += `
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
        `;
  subscribersForm.addEventListener("submit", subscriberFormSubmission);
}

function subscriberFormSubmission() {
    event.preventDefault();
      let photo = document.getElementById("photo").value;
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;

      let subscriber = {
        photo: photo,
        username: username,
        email: email,
  };

  fetch(`${BASE_URL}/subscribers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subscriber),
  })
    .then((resp) => resp.json())
    .then((subscriber) => {
      let s = new Subscriber(
        subscriber.id,
        subscriber.username,
        subscriber.email,
        subscriber.photo,
        subscriber.rentals
      );
        s.renderSubscriber();
        document.querySelector("#rentals-form").innerHTML = "";
        Rental.rentalForm();
    });
}

// read - fetch rentals index
function fetchRentals() {
  fetch(`${BASE_URL}/rentals`)
    .then((resp) => resp.json())
    .then((rentals) => {
      for (const rental of rentals) {
        let r = new Rental(
          rental.id,
          rental.title,
          rental.poster,
          rental.description,
          rental.genre,
          rental.rental_price,
          rental.subscriber_id
        );
        r.renderRental();
      }
    });
}
