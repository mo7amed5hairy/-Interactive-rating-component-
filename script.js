const submitButton = document.querySelector('.submit');
const btns = document.querySelectorAll('.btn');
const form = document.getElementById('form');
const rateNumber = document.querySelector('.rate_no');
const thankYou = document.querySelector('.thank_you');
const Rating = document.querySelector('.rating');
const getNum = document.getElementById('get_num');

btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        
      
        btn.classList.toggle('clicked');
    
        if(btn.classList.contains('clicked')){
        getNum.value = e.target.value;
        }else{
        getNum.value = '';
        }
            
        })

});


function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if(data.get_num !== "")
    {
    rateNumber.innerHTML =  data.get_num;
    thankYou.classList.add('active');
    Rating.classList.add('hide');
    }else{
        alert('please rate from 1 to 5');
    }

}


form.addEventListener("submit", handleSubmit);