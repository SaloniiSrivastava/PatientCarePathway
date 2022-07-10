// const openPopup = document.querySelectorAll('[data-popup-target]');
// const closePopup = document.querySelectorAll('[data-popup-close]');
// const overlay = document.getElementById('overlay');

// openPopup.forEach(button => {
//     button.addEventListener('click',()=> {
//         const popup = document.querySelector(button.dataset.popupTarget )
//         openPopup(popup);
        
//     })
// })

// closePopup.forEach(button => {
//     button.addEventListener('click',()=> {
//         const popup = button.closest('.popup')
//         closePopup(popup);
//     })
// })

// function openPopup(popup){
//     if (popup == null) return 
//     popup.classList.add('active');
//     overlay.classList.add('active')
// }

// function closePopup(popup){
//     if (popup == null) return 
//     popup.classList.remove('active');
//     overlay.classList.remove('active')
// }

 const openPopBtn = document.getElementsByClassName('firstPopup');
     const overlay = document.getElementById('overlay');
     const popup = document.getElementById('popup1');

     

     function openPopup() {
        openPopBtn.addEventListener('click',() => {
            popup.classList.add('active');
            overlay.classList.add('active');
        })
        
     }