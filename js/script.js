const cardName = document.getElementById("cards")
let cardInfo = cardName.getElementsByClassName("card_item")
let hideShowButton = document.getElementById('hideShowButton')
let exampleArray = [...cardInfo]
//observer animation//

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
        entry.target.classList.add('undoSue');
        } else{
            entry.target.classList.remove('undoSue');
        }
    });
});
const hiddenElements = document.querySelectorAll('.chopSue')
hiddenElements.forEach((el) => observer.observe(el))

//gallery settings//
const overlayClass = document.getElementById("over")
const galleryBlock = document.getElementById("gallery")
let galleryInclude = galleryBlock.querySelectorAll('.first-block')
let someArraySort = [...galleryInclude]
let currentPosition = 0


galleryBlock.addEventListener('click', function (event) {
    currentPosition = event.target.alt - 1
    console.log(someArraySort[currentPosition])
    if (!someArraySort[currentPosition].classList.contains('fullSize')){
        someArraySort[currentPosition].classList.add('fullSize')
    overlayClass.classList.add('overlayOn')
        rightArrow.classList.add('arrow-visible')
        leftArrow.classList.add('arrow-visible')
}
    else {
        someArraySort[currentPosition].classList.remove('fullSize')
        overlayClass.classList.remove('overlayOn')
        rightArrow.classList.remove('arrow-visible')
        leftArrow.classList.remove('arrow-visible')
}
})
overlayClass.addEventListener("click", function (event){
    if(overlayClass.classList.contains('overlayOn') && (someArraySort[currentPosition].classList.contains('fullSize')) ){
        overlayClass.classList.remove('overlayOn')
        someArraySort[currentPosition].classList.remove('fullSize')
        rightArrow.classList.remove('arrow-visible')
        leftArrow.classList.remove('arrow-visible')
    }
})
//console.log(someArraySort)
let rightArrow = document.getElementById('rightArrow')
let leftArrow = document.getElementById('leftArrow')

//arrow settings here//
rightArrow.addEventListener("click", function (){
    if(currentPosition+1 > someArraySort.length-1){
        someArraySort[currentPosition].classList.remove('fullSize')
        currentPosition = 0
        someArraySort[0].classList.add('fullSize')
    }
        else{
        someArraySort[currentPosition].classList.remove('fullSize')
        someArraySort[currentPosition+1].classList.add('fullSize')
        currentPosition += 1
        }
})
leftArrow.addEventListener("click", function (){
    if(currentPosition-1 < 0){
        someArraySort[currentPosition].classList.remove('fullSize')
        currentPosition = someArraySort.length-1
        someArraySort[currentPosition].classList.add('fullSize')
    }
    else{
        someArraySort[currentPosition].classList.remove('fullSize')
        someArraySort[currentPosition-1].classList.add('fullSize')
        currentPosition -= 1
    }
})

//console.log(exampleArray)
hideShowButton.addEventListener("click", function () {
    exampleArray.forEach(element => element.classList.toggle('hideInterface'))
    if(cardInfo[1].classList.contains('hideInterface')){
        hideShowButton.textContent = 'Показать'
    }
    else {
        hideShowButton.textContent = 'Cкрыть'
    }
})
let searchButton = document.getElementById('searchButton')
let resetButton = document.getElementById('resetButton')
let fullFilter = document.getElementById('fullOption')
let halfFilter = document.getElementById('halfOption')
let total = document.getElementById('total-number')

total.value = exampleArray.length;
total.innerHTML = `${exampleArray.length}`;
let  poolEl = ''
let  tryOut = []
let someFunction = function () {
    for (let n = 0; n<exampleArray.length; n++){
        poolEl =  exampleArray[n].querySelectorAll('.card-info__text')
        tryOut = [...poolEl]
        exampleArray[n]['Объем двигателя'] = tryOut[0].innerHTML
        exampleArray[n]['Год'] = tryOut[1].innerHTML
        exampleArray[n]['Пробег'] = tryOut[2].innerHTML
        exampleArray[n]['Привод'] = tryOut[3].innerHTML
        exampleArray[n]['КПП'] = tryOut[4].innerHTML

    }
}

someFunction()
searchButton.addEventListener('click', function () {
    for(let i = 0; i<exampleArray.length; i++){
        if((exampleArray[i]['Type'] !== 'fullOption') && fullFilter.checked === true && halfFilter.checked !== true) {
            exampleArray[i].classList.add('hideInterface')
            total.innerHTML = `${total.value - 1}`
            ;
        }
        else if ((exampleArray[i]['Type'] !== 'halfOption') && halfFilter.checked === true && fullFilter.checked !== true){
            exampleArray[i].classList.add('hideInterface')
            total.innerHTML = `${total.value - i}`;
        }
        else if ( fullFilter.checked === true && halfFilter.checked === true){
            exampleArray[i].classList.remove('hideInterface')
            total.innerHTML = '4';

        }

    }
})
resetButton.addEventListener('click', function() {
    exampleArray.forEach(el => el.classList.remove('hideInterface'))
    total.innerHTML = `${exampleArray.length}`;
} )

exampleArray[0]['Type'] = 'fullOption'
exampleArray[1]['Type'] = 'halfOption'
exampleArray[2]['Type'] = 'fullOption'
exampleArray[3]['Type'] = 'fullOption'
