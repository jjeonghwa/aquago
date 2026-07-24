/**
 * 왼쪽 사이드바 메뉴 전환 함수
 * @param {string} tabName - 'dashboard' | 'calendar' | 'settings'
 */
function switchTab(tabName) {
    const pages = {
        dashboard: document.getElementById('page-dashboard'),
        calendar: document.getElementById('page-calendar'),
        settings: document.getElementById('page-settings')
    };

    const buttons = {
        dashboard: document.getElementById('btn-dashboard'),
        calendar: document.getElementById('btn-calendar'),
        settings: document.getElementById('btn-settings')
    };

    // 전체 숨김 및 스타일 초기화 (기본 상태로)
    Object.keys(pages).forEach(key => {
        if (pages[key]) pages[key].classList.add('hidden');
        if (buttons[key]) {
            buttons[key].classList.remove('bg-blue-700', 'text-white', 'font-bold');
            buttons[key].classList.add('text-blue-100', 'hover:bg-blue-700', 'hover:text-white');
        }
    });

    // 선택한 메뉴 활성화 스타일 적용
    if (pages[tabName]) pages[tabName].classList.remove('hidden');
    if (buttons[tabName]) {
        buttons[tabName].classList.remove('text-blue-100', 'hover:bg-blue-700');
        buttons[tabName].classList.add('bg-blue-700', 'text-white', 'font-bold');
    }
}

function logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
        alert('성공적으로 로그아웃되었습니다.');
    }
}