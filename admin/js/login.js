// admin/js/login.js

function checkLogin() {
    const id = document.getElementById('adminId').value;
    const pw = document.getElementById('adminPw').value;

    // 가상 시뮬레이션용 계정 정보 체크
    if (id === "admin" && pw === "1234") {
        alert('반갑습니다, 관리자님!');
        location.href = 'index.html';
    } else {
        alert('아이디 또는 비밀번호가 틀렸습니다. (기본값: admin / 1234)');
    }
}