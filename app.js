const parCont = document.querySelectorAll('.p_img');

// Function to toggle the display of the next sibling text element and change the icon
const toggleNextSiblingTextAndIcon = (cont) => {
    const nextSibling = cont.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains('text')) {
         // Toggle the display property
        if (nextSibling.style.display === 'block') {
            nextSibling.style.display = 'none';
            nextSibling.style.cursor = 'pointer'
        } else {
            nextSibling.style.display = 'block';
        }
    }

    // Find the img element within the more_icon div
        const imgElement = cont.querySelector('.more_icon img');
        if (imgElement) {
            // Get the current src attribute value
            const currentSrc = imgElement.getAttribute('src');

            // Toggle the image source
            if (currentSrc === 'images/icon-plus.svg') {
                imgElement.setAttribute('src', 'images/icon-minus.svg');
            } else {
                imgElement.setAttribute('src', 'images/icon-plus.svg')
            }
        }

};


parCont.forEach(cont => {
    cont.addEventListener('click', e => {
        if(e.target){
            toggleNextSiblingTextAndIcon(cont);
        };
        
    });
});



// Select all elements with the class 'p_img'
// const parCont = document.querySelectorAll('.p_img');

// Function to toggle the display of the next sibling text element and change the icon
// const toggleNextSiblingTextAndIcon = (clickedCont) => {
//     const nextSibling = clickedCont.nextElementSibling;
//     if (nextSibling && nextSibling.classList.contains('text')) {
//         // Toggle the display property
//         if (nextSibling.style.display === 'block') {
//             nextSibling.style.display = 'none';
//         } else {
//             nextSibling.style.display = 'block';
//         }

//         // Find the img element within the more_icon div
//         const imgElement = clickedCont.querySelector('.more_icon img');
//         if (imgElement) {
//             // Get the current src attribute value
//             const currentSrc = imgElement.getAttribute('src');

//             // Toggle the image source
//             if (currentSrc === 'images/icon-plus.svg') {
//                 imgElement.setAttribute('src', 'images/icon-minus.svg');
//             } else {
//                 imgElement.setAttribute('src', 'images/icon-plus.svg');
//             }
//         }
//     }
// };

// Add click event listener to each p_img element
// parCont.forEach(cont => {
//     cont.addEventListener('click', e => {
//         e.preventDefault();
//         toggleNextSiblingTextAndIcon(cont);
//     });
// });
