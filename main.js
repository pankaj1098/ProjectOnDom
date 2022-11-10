function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const obj = {
        name,
        email,
    }
    localStorage.setItem(email, JSON.stringify(obj));
}


