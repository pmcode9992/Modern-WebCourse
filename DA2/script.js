benefit = document.getElementById("benefits");
age = document.getElementById("age");
submitBtn = document.getElementById("submit");
vname = document.getElementById("vname");
phone = document.getElementById("phone");
role = document.getElementById("role");
size = document.getElementById("size");
popup = document.getElementById("popup");


age.addEventListener("input", (event)=>{
    if(event.target.value >18){
        benefit.innerHTML = `
        <h3>Benefits</h3>
        <ul>
            <li>Free T Shirt</li>
            <li>Meal Vouchers</li>
            <li>Festival Passes</li>
        </ul>
        `
    }

    else{
       
        benefit.innerHTML = `
        <h3>Benefits</h3>
        <ul>
            <li>Free T Shirt</li>
            <li>Meal Vouchers</li>
        </ul>
      </div>
        `
    }
    benefit.style.display = 'block'
    benefit.style.animation = "benefits 2s ease-in-out"
    handleBenefits()
})

const onSubmit = ()=>{
    popup.style.display = "block"
    popup.innerHTML = `
    <h3 class="center">Your response has been recorded!</h3>
      Thanks ${vname.value} <br>
      You can expect a call within the next 2 working days. <br>
      You can collect your T shirt and coupons from control room (Near the Main Building) <br>

      <br>
      <u>Your details </u> <br> <br>
      Name : ${vname.value}<br>
      Age : ${age.value}<br>
      Phone Number : ${phone.value}<br>
      


    `
    
}
popup.addEventListener('')

const handleBenefits = ()=>{}