// 1. 이모티콘 메뉴 토글 함수
function toggleMenu(index) {
    const lists = document.querySelectorAll('.list-item');

    lists.forEach((list, i) => {
        if (i === index) {
            list.classList.toggle('active');
        } else {
            list.classList.remove('active');
        }
    });
}

// 2. 상메 클릭 시 프로필 사진 토글 함수
function toggleProfile() {
    const profile = document.getElementById('profile-section');
    profile.classList.toggle('collapsed');
}
