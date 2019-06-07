// Intro background
var img_list = ['images/intro_background1.jpg', 'images/intro_background2.jpg', 'images/intro_background3.jpg'];
var intro = document.querySelector('.intro');
intro.style.backgroundImage = "url(" + img_list[parseInt(Math.random()*3 % 3)]; + ")";

// Intro 슬라이드 코드
var now = 0;
var slides = document.querySelectorAll('.intro .slide-area .slide');
var nextBtn = document.querySelector('.intro .slide-area .swiper-button-next');
var prevBtn = document.querySelector('.intro .slide-area .swiper-button-prev');
var paginations = document.querySelectorAll('.intro .slide-area .swiper-pagination-bullet');
function showSlide(n) { // n, n+1 번째 슬라이드를 보여줌
    now = n;
    pos = -(263 + 12) * n; // 263: Image Width, 12: Right Margin
    for (var i=0;i<slides.length;++i) {
        slides[i].style.left = pos + 'px';
        pos += 263 + 12;
    }
    if (now == 7) nextBtn.style.display = "none";
    else nextBtn.style.display = "block";
    if (now == 0) prevBtn.style.display = "none";
    else prevBtn.style.display = "block";

    for (var i=0;i<5;++i) {
        if (i == parseInt((n+1)/2)) paginations[i].classList.add('swiper-pagination-bullet-active');
        else paginations[i].classList.remove('swiper-pagination-bullet-active');
    }
}
function showNext() {
    if (now >= 7) return;
    else if (now == 6) showSlide(7);
    else showSlide(now + 2);
}
function showPrev() {
    if (now <= 1) return;
    else if (now == 7) showSlide(6);
    else {
        showSlide(now - 2);
    }
}
showSlide(0);

// Intro 슬라이드 자세히 보기 기능 코드
function toggleStory(obj) {
    obj.parentNode.parentNode.classList.toggle("show-story");
}

// Modal Window 띄우고 닫는 코드
var modal_document = document.querySelector('.modal-document');
var modal_window = document.querySelector('.modal-window');
var modal_fee = document.querySelector('.modal-fee');
var modal_term = document.querySelector('.modal-term');

var modals = document.querySelectorAll('.modal');
function closeAllModal() {
    for (var i=0;i<modals.length;++i) {
        modals[i].style.display = "none";
    }
}

function showModal_document() {
    modal_document.style.display = "block";
}

function showModal_window() {
    modal_window.style.display = "block";
}

function showModal_fee() {
    modal_fee.style.display = "block";
}

function showModal_term() {
    modal_term.style.display = "block";
}

// window.onclick = function(event) {
//     closeAllModal();
// }

// Document Modal window의 탭 변경하는 코드
var modal_document_tablist = document.querySelectorAll('.modal-document .modal-body .tab li');
var modal_document_contents = document.querySelectorAll('.modal-document .modal-body .content');
function modal_document_show(n) {
    for (var i=0;i<3;++i) {
        if (i == n) {
            modal_document_tablist[i].classList.add('active');
            modal_document_contents[i].style.display = 'block';
        }
        else {
            modal_document_tablist[i].classList.remove('active');
            modal_document_contents[i].style.display = 'none';
        }
    }
}
modal_document_show(1);

// Window Modal Window의 탭 변경하는 코드.
var modal_window_tablist = document.querySelectorAll('.modal-window .modal-body .tab li');
var modal_window_contents = document.querySelectorAll('.modal-window .modal-body .content');
function modal_window_show(n) {
    for (var i=0;i<10;++i) {
        if (i == n) {
            modal_window_tablist[i].classList.add('active');
            modal_window_contents[i].style.display = 'block';
        }
        else {
            modal_window_tablist[i].classList.remove('active');
            modal_window_contents[i].style.display = 'none';
        }
    }
}
modal_window_show(0);

// Intro tip-area
var tip_btn = document.querySelector('.intro .tip-area a');
var tip_span = document.querySelector('.intro .tip-area .tip-detail');
var x = parseInt(Math.random() * 6 % 6) + 1;

if (x == 1) tip_btn.onclick = showModal_document;
if (x == 2) tip_btn.onclick = showModal_window;
if (x == 3) tip_btn.onclick = showModal_fee;
if (x == 4) tip_btn.onclick = function() { window.open('https://sell.smartstore.naver.com/#/home/about/popup/downloadEscrowDocument'); };
if (x == 5) tip_btn.onclick = function() { window.open('https://sell.smartstore.naver.com/#/login'); }
if (x == 6) tip_btn.onclick = function() { window.open('http://edu.shopping.naver.com/redirect.html'); };

tip_span.classList.add("detail0" + x);

// Use 슬라이드 코드
var slides2 = document.querySelectorAll('.use .swiper-container .slide');
var paginations2 = document.querySelectorAll('.use .slidenav .swiper-slide a');
var now2 = 1;
function showSlide2(n) {
    if (n == 8) n = 0;
    if (n == -1) n = 7;
    now2 = n;
    pos = -1029 * n;
    for (var i=0;i<slides2.length;++i) {
        slides2[i].style.left = pos + 'px';
        pos += 1029;
    }
    for (var i=0;i<paginations2.length;++i) {
        if (i == n) paginations2[i].classList.add('active');
        else paginations2[i].classList.remove('active');
    }
}
function showNext2() {
    showSlide2(now2 + 1);
}
function showPrev2() {
    showSlide2(now2 - 1);
}
showSlide2(1);