/**
 * 왼쪽 사이드바 메뉴 탭 전환 함수
 * @param {string} tabName - 'dashboard' | 'calendar' | 'settings'
 */
function switchTab(tabName) {
    // [100% 정답수정] 대시보드 클릭 시에는 자바스크립트 전환 대신 실제 index.html 페이지로 이동시킵니다.
    if (tabName === 'dashboard') {
        location.href = 'index.html';
        return;
    }

    // 1. 제어할 메인 페이지 본문 배열
    const pages = {
        dashboard: document.getElementById('page-dashboard'),
        calendar: document.getElementById('page-calendar'),
        settings: document.getElementById('page-settings')
    };

    // 2. 왼쪽 사이드바 메뉴 버튼 배열 (a 태그와 button 태그 모두 정상 호출)
    const buttons = {
        dashboard: document.getElementById('btn-dashboard'),
        calendar: document.getElementById('btn-calendar'),
        settings: document.getElementById('btn-settings')
    };

    // 3. 전체 초기화 (페이지 숨김 및 버튼 무채색 변경)
    Object.keys(pages).forEach(key => {
        if (pages[key]) {
            pages[key].classList.add('hidden');
        }
        if (buttons[key]) {
            // 활성화 배경 클래스 제거 후 기본 텍스트 색상 부여
            buttons[key].classList.remove('bg-blue-700', 'text-white', 'font-bold');
            buttons[key].classList.add('text-blue-100');
        }
    });

    // 4. 선택된 탭 활성화 (본문 노출 및 버튼 파란색 배경 부여)
    if (pages[tabName]) {
        pages[tabName].classList.remove('hidden');
    }
    if (buttons[tabName]) {
        buttons[tabName].classList.remove('text-blue-100');
        buttons[tabName].classList.add('bg-blue-700', 'text-white', 'font-bold');
    }
}

/**
 * 관리자 로그아웃 함수
 */
function logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
        alert('성공적으로 로그아웃되었습니다.');
        // [100% 정답수정] 알림창 확인 후 로그인 화면인 login.html로 페이지를 이동시킵니다.
        location.href = 'login.html';
    }
}