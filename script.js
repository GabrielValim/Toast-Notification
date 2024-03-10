let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-check"></i> Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    switch(true) {
        case msg.includes('error'):
            toast.classList.add('error')
            break;
        case msg.includes('Invalid'):
            toast.classList.add('invalid')
            break;
    }

    setTimeout(() => {
        toast.remove();
     }, 6000);
}