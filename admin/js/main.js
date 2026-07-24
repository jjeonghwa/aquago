// admin/js/main.js

// 하단 고정 탭 바를 눌러 내부 본문 화면을 교체하는 함수
function switchTab(tabId) {
    // 1. 모든 메인 콘텐츠 섹션 숨기기
    document.getElementById('page-dashboard').classList.add('hidden');
    document.getElementById('page-calendar').classList.add('hidden');
    document.getElementById('page-settings').classList.add('hidden');

    // 2. 누른 탭에 해당하는 섹션만 활성화
    document.getElementById('page-' + tabId).classList.remove('hidden');

    // 3. 하단 탭 버튼들 아이콘 색상 초기화 및 하이라이트 반영
    const tabs = ['dashboard', 'calendar', 'settings'];
    tabs.forEach(t => {
        const btn = document.getElementById('btn-' + t);
        if (t === tabId) {
            btn.classList.add('text-blue-600');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('text-blue-600');
            btn.classList.add('text-gray-400');
        }
    });
}

// 대시보드 상단 로그아웃 버튼용 함수
function logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
        location.href = 'login.html';
    }
}