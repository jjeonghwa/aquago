// js/user.js

let bookingInfo = {
    productName: '',
    peopleCount: 1
};

// 1. 메인 상품 예약 클릭 시 다음 창 세팅
function selectProduct(name) {
    bookingInfo.productName = name;
    document.getElementById('selected-product-display').innerText = name;

    document.getElementById('user-page-1').classList.add('hidden');
    document.getElementById('user-page-2').classList.remove('hidden');
}

// 2. 인원 수 증감 카운터 컨트롤
function changeCount(amount) {
    let current = bookingInfo.peopleCount + amount;
    if (current >= 1 && current <= 6) {
        bookingInfo.peopleCount = current;
        document.getElementById('people-count').innerText = current;
    }
}

// 3. 발권하기 최종 클릭 처리
function submitReservation() {
    document.getElementById('ticket-product').innerText = bookingInfo.productName;
    document.getElementById('ticket-people').innerText = bookingInfo.peopleCount + "명";

    document.getElementById('user-page-2').classList.add('hidden');
    document.getElementById('user-page-3').classList.remove('hidden');
}

// 4. 뒤로가기 제어
function goBack(targetPage) {
    document.getElementById('user-page-1').classList.add('hidden');
    document.getElementById('user-page-2').classList.add('hidden');
    document.getElementById('user-page-3').classList.add('hidden');

    document.getElementById('user-page-' + targetPage).classList.remove('hidden');

    if(targetPage === 1) {
        bookingInfo.peopleCount = 1;
        document.getElementById('people-count').innerText = 1;
    }
}