
const logIn = document.querySelector('.js-login')      //khởi tạo biến trỏ đến đăng nhập 
const modal = document.querySelector('.modal')          //khởi tạo biến troe đến modal
const closeBtn = document.querySelector('.modal-close')  //khởi tạo biến trỏ đến nút close
const modalContainer = document.querySelector('.modal-container')   //khởi tạo biến trỏ đến modal-container
const btnLogin = document.querySelector('.btn-login')        //khởi tạo biến trỏ đến btn Đăng nhập
const logInofSignUp = document.querySelector('.js-login--1')
const logInofSignUp2 = document.querySelector('.js-login--2')
const logInofSignUp3 = document.querySelector('.js-login-3')

function ShowLogIn(){
    modalNumber.classList.remove('open')
    modal.classList.add('open')
    subModal.classList.remove('open')
}

function HideLogIn(){
    modalNumber.classList.remove('open')
    subModal.classList.remove('open')
    modal.classList.remove('open')
}

modal.addEventListener('click', HideLogIn)
btnLogin.addEventListener('click', HideLogIn)       
logIn.addEventListener('click', ShowLogIn)
logInofSignUp.addEventListener('click', ShowLogIn)
logInofSignUp2.addEventListener('click', ShowLogIn)
logInofSignUp3.addEventListener('click', ShowLogIn)
closeBtn.addEventListener('click', HideLogIn)
modalContainer.addEventListener('click', function (event){
        event.stopPropagation()
})




// SIGN-UP NUMBER-PHONE
const signUp = document.querySelector('.js-signup')  
const modalNumber = document.querySelector('.sub--modal-number')
const modalContainerNumber = document.querySelector('.js-sub-container-number')
const closenumberBtn = document.querySelector('.js-close-number')
const signUpofLogin = document.querySelector('.js-signup--1')
const signUpofLogin3 = document.querySelector('.js-signup-3')

function ShowNumber() {
    modalNumber.classList.add('open')
    modal.classList.remove('open')
    subModal.classList.remove('open')
}

function HideNummber() {
    modalNumber.classList.remove('open')
    modal.classList.remove('open')
    subModal.classList.remove('open')
}

signUp.addEventListener('click', ShowNumber)
signUpofLogin.addEventListener('click', ShowNumber)
signUpofLogin3.addEventListener('click', ShowNumber)
modalNumber.addEventListener('click', HideNummber)
closenumberBtn.addEventListener('click', HideNummber)
modalContainerNumber.addEventListener('click', function(event) {
    event.stopPropagation()
})






// SIGN-UP 
const btnNext = document.querySelector('.js-next')
const subModal = document.querySelector('.sub--modal')
const submodalContainer = document.querySelector('.js-sub-container')
const subModalClose = document.querySelector('.js-sub-close')
const btnSubmodal = document.querySelector('.js-sub-btn')

function ShowSignUp() {
    subModal.classList.add('open')
    modal.classList.remove('open')
    modalNumber.classList.remove('open')
}

function HideSignUp() {
    modalNumber.classList.remove('open')
    subModal.classList.remove('open')
    modal.classList.remove('open')
}

btnNext.addEventListener('click', ShowSignUp)
subModal.addEventListener('click', HideSignUp)
btnSubmodal.addEventListener('click', HideSignUp)
subModalClose.addEventListener('click', HideSignUp)
submodalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})





