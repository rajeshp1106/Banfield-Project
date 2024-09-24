document.getElementById('subscribeForm').addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    if(email){
        alert(`Thank you for subscribing with: ${email}`)
        document.getElementById('email').value = '';
    }
    else{
        alert('Please enter your email address');
    }
})