const accordionItemEl = document.getElementsByClassName('accordion__item');


const accordion = () => {
    //loopin throgh accoitem, we need accordion__heading inside the loop, and put a click event
    for (let item of accordionItemEl){
        let accHeader = item.firstElementChild;
        console.log(accHeader);
        //when we click accHeader, and this keyword reffers to accHeader
        // and next sibling is accDetails
        accHeader.addEventListener('click', function () {
            let accDetails = this.nextElementSibling;
          //  console.log(accDetails);

          if(accDetails.style.maxHeight){
            accDetails.style.maxHeight = null;
            this.lastElementChild.textContent = "+";
            console.log(this.lastElementChild);
          } else {
              //scrollheight built in, gives a default heigt
              accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
              this.lastElementChild.textContent = "-";
          }

        })
    }
}

accordion()