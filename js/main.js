document.addEventListener("DOMContentLoaded", function () {
    // 1. 화면 전환용 DOM 요소 제어 변수 선언
    const btnDashboard = document.getElementById("btn-dashboard");
    const btnSales = document.getElementById("btn-sales");
    const sectionDashboard = document.getElementById("section-dashboard");
    const sectionSales = document.getElementById("section-sales");

    let salesChart = null; // 차트 중복 생성을 막기 위한 변수

    // 2. 대시보드 메뉴 이벤트 바인딩
    btnDashboard.addEventListener("click", function (e) {
        e.preventDefault();
        btnSales.classList.remove("active");
        btnDashboard.classList.add("active");
        
        sectionSales.style.display = "none";      // 매출통계 가리기
        sectionDashboard.style.display = "block"; // 대시보드 홈 보여주기
    });

    // 3. 매출통계 메뉴 이벤트 바인딩
    btnSales.addEventListener("click", function (e) {
        e.preventDefault();
        btnDashboard.classList.remove("active");
        btnSales.classList.add("active");
        
        sectionDashboard.style.display = "none";  // 대시보드 홈 가리기
        sectionSales.style.display = "block";     // 매출통계 보여주기

        // 최초 클릭 시에만 차트를 그리고, 이미 그려져 있다면 다시 그리지 않음
        if (!salesChart) {
            initChart();
        }
    });

    // 4. Chart.js 이쁜 차트 생성 함수 구현
    function initChart() {
        const ctx = document.getElementById('salesChart').getContext('2d');
        
        // 차트 곡선 하단을 채워줄 미려한 보라빛 그라데이션 커스텀
        const gradient = ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.25)'); // 상단 파란 투명
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');  // 하단 완전 투명

        salesChart = new Chart(ctx, {
            type: 'line', // 고급스러운 곡선형 라인 차트
            data: {
                labels: ['3월', '4월', '5월', '6월', '7월', '8월'], // 최근 6달 기준 축
                datasets: [{
                    label: '월간 매출 실적',
                    data:, // 가짜 데이터
                    borderColor: '#2563EB', // 메인 브랜드 칼라 (블루)
                    borderWidth: 3,
                    backgroundColor: gradient,
                    fill: true, // 선 하단 영역 색상 채움 활성화
                    tension: 0.4, // 꺾은선 곡선화 처리 가중치
                    pointBackgroundColor: '#2563EB',
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false } // 깔끔한 구성을 위해 상단 항목 배지 제거
                },
                scales: {
                    y: {
                        grid: { color: '#F1F5F9' },
                        ticks: {
                            // 금액 숫자에 원화(₩) 마크 및 천단위 콤마 포맷 변환 자동화
                            callback: function(value) { return '₩' + value.toLocaleString(); }
                        }
                    },
                    x: {
                        grid: { display: false } // x축 격자는 지워서 심플하게 처리
                    }
                }
            }
        });
    }
});