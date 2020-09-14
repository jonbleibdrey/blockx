class Subscriber{
    constructor(id, username, email, photo){
    this.id = id
    this.username = username
    this.email = email
    this.photo = photo
 
    }


    renderSubscriber(){
        let subscriberDiv = document.getElementById("subscribers-container")
        subscriberDiv.innerHTML += 
        `
        <ul>   
            <li>
            subscriber id:${this.id}
            </li>
            <li>
            photo url:${this.photo}
            </li>
            <li>
            Username: ${this.username} 
            </li>   
            <li>
            Email:${this.email}
            </li>    
        </ul> 
        <button class="delete-bttn" data-id=${this.id} onclick="deleteSubscriber()"> Delete Subscriber </button>   
        `
    }
    // render subscriber instance method 
}