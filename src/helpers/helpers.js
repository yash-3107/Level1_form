export function Validate(flag){
    const name = document.getElementById("name")
    const age = document.getElementById("Age")
    const guestName = document.getElementById("GuestName")
    const email = document.getElementById("email")
    const GuestName = document.getElementById("GuestName")

    if(name.value==''){
        window.alert("Name is required.")
        return false
    }
        
    else if(Age.value == 0){
        alert("Age must be greater than zero");
        return false
    }
        
    if (email.value === '') {
        alert("Email cannot be blank.");
        return false
    } 
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        alert("Email entered is invalid.");
                return false}

    if(flag){
            if(GuestName.value==''){
                alert("Fill out the Guest Name")
                return false
            }
            }
        return true
}


