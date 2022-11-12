function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

//Details stored in the Local storage onto the screen
function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';

if(localStorage.getItem(user.email) !==null){
    removeUserFromScreen(user.email)
}
    const parentNode= document.getElementById('users');
    const childHTML = `<li id='${user.email}'> '${user.name}' - '${user.email}' <button onclick=editUserDetails('${user.email}','${user.name}')>Edit</button><button onclick=deleteUser('${user.email}')>Delete</button></li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

function editUserDetails(email, name){

    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    deleteUser(email)
 }

// delete user abc@gmail.com
function deleteUser(email){
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email){
    const parentNode = document.getElementById("users");
    const childNodeToBeDeleted= document.getElementById(email);
   if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
   }
}
