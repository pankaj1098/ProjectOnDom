function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const obj = {
        name,
        email,
    }
    localStorage.setItem(email, JSON.stringify(obj));
    showNewUserOnScreen(obj)
}
//Details stored in the Local storage onto the screen
function showNewUserOnScreen(user){
    const parentNode= document.getElementById('users');
    const childHTML = `<li> Name:-${user.name} ,Email:-${user.email} </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
