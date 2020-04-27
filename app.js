const checkboxes = document.querySelectorAll('.content input[type="checkbox"]');
// console.log(checkbox);


let lastchked;
function handlecheck(e){
    let inBetween = false;
    if(e.shiftkey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastchked){
                inBetween = !inBetween;
                console.log("test text goes here...")
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastchked = this;
    // console.log(e);
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handlecheck));