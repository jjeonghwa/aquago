// js/user.js

let bookingInfo = {
    productName: '',
    bookingDate: '',
    peopleCount: 1
};

// 1. 메인 상품 예약 클릭 시 -> [날짜 선택 창]으로 이동
function selectProduct(name) {
    bookingInfo.productName = name;
    document.getElementById('date-page-product-display').innerText = name;

    // 오늘 날짜를 기본값으로 세팅해주는 센스
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('booking-date').value = today;

    hideAllPages();
    document.getElementById('user-page-date').classList.remove('hidden');
}

// 2. 날짜 선택 후 다음 단계 클릭 시 -> [인원 선택 창]으로 이동
function selectDateNext() {
    const dateInput = document.getElementById('booking-date').value;
    
    if(!dateInput) {
        alert('날짜를 정확히 선택해 주세요.');
        return;
    }
    
    bookingInfo.bookingDate = dateInput;
    // 인원 선택 페이지의 요약 텍스트 결합
    document.getElementById('selected-product-display').innerHTML = `[${bookingInfo.bookingDate}]<br>${bookingInfo.productName}`;

    hideAllPages();
    document.getElementById('user-page-2').classList.remove('hidden');
}

// 인원 페이지에서 뒤로가기 할 때 날짜 페이지로 백
function goToDatePage() {
    hideAllPages();
    document.getElementById('user-page-date').classList.remove('hidden');
}

// 3. 인원 수 증감 카운터 컨트롤
function changeCount(amount) {
    let current = bookingInfo.peopleCount + amount;
    if (current >= 1 && current <= 6) {
        bookingInfo.peopleCount = current;
        document.getElementById('people-count').innerText = current;
    }
}

// 4. 발권하기 최종 클릭 처리 -> [티켓 발행 창]
function submitReservation() {
    document.getElementById('ticket-date').innerText = bookingInfo.bookingDate;
    document.getElementById('ticket-product').innerText = bookingInfo.productName;
    document.getElementById('ticket-people').innerText = bookingInfo.peopleCount + "명";

    hideAllPages();
    document.getElementById('user-page-3').classList.remove('hidden');
}

// 5. 전체 페이지 숨기기 공통 유틸 함수
function hideAllPages() {
    document.getElementById('user-page-1').classList.add('hidden');
    document.getElementById('user-page-date').classList.add('hidden');
    document.getElementById('user-page-2').classList.add('hidden');
    document.getElementById('user-page-3').classList.add('hidden');
}

// 6. 처음으로 돌아가기 제어
function goBack(targetPage) {
    hideAllPages();
    document.getElementById('user-page-' + targetPage).classList.remove('hidden');

    if(targetPage === 1) {
        bookingInfo.peopleCount = 1;
        document.getElementById('people-count').innerText = 1;
    }
}