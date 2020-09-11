document.addEventListener("DOMContentLoaded", () => {
    fetchSubscribers()
})
    const BASE_URL = "http://localhost:3000"

    // read - fetch subscribers index

    function fetchSubscribers(){
        fetch(`${BASE_URL}/subscribers`)
        .then(resp => resp.json())
        .then(subscribers => {
            for(const subscriber of subscribers){
                let s = new Subscriber(subscriber.id, subscriber.username, subscriber.email, subscriber.photo )
            }
            
        })
    }

    // create = create a anew subscriber

    // delete - delete a subscriber
