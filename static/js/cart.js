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
            console.log('User Logged in, Sending Data...');
        }
    })
}