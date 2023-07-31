let updateBtns = document.getElementsByClassName('update-cart');

// iterate through the Btn's
for(i=0; i < updateBtns.length; i++){
    // queryset with i
    updateBtns[i].addEventListener('click', function(){
        // query out the cutome attributes
        let productId = this.dataset.product
        let action = this.dataset.action

        console.log('productId:', productId, 'Action:', action)


        console.log('USER:', user);

        if(user === 'AnonymousUser'){
            console.log('Not Logged In');
        }else{
            updateUserOrder(productId, action)
        }
        
    })

}

function updateUserOrder(productId, action){
    
    console.log('User Logged in, Sending Data...');
    // send the data
    let url = '/updateItem/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,

        },
        // to send data to backend I shld send as string
        body: JSON.stringify({'productId':productId, 'action':action})
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        location.reload()
    })
}