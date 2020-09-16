class Subscriber {
  constructor(id, username, email, photo) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.photo = photo;
  }

  renderSubscriber() {
    let subscriberDiv = document.getElementById("subscribers-container");
    subscriberDiv.innerHTML += `
        <div class="sub-info"> 
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
            <h1>--------------------------</h1>
        </ul> 
        <div class="delete-button"> 
        <button class="delete-bttn" data-id=${this.id} onclick="deleteSubscriber()"> Delete Subscriber </button>   
        </div>
        </div>
        
        `;
  }
  // render subscriber instance method
}
