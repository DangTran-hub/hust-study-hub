document.getElementById("searchInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        alert("Chức năng tìm kiếm sẽ được phát triển sớm!");
    }
});

document.querySelectorAll(".btn").forEach((btn) => {
    if (btn.textContent.includes("Đăng nhập") || btn.textContent.includes("Đăng ký")) {
        btn.addEventListener("click", () => alert("Chức năng tài khoản đang được phát triển!"));
    }
    if (btn.textContent.includes("Đăng tải")) {
        btn.addEventListener("click", () => alert("Trang đăng tải đang được phát triển!"));
    }
    if (btn.textContent.includes("Tải xuống")) {
        btn.addEventListener("click", () => alert("Tính năng tải xuống đang được phát triển!"));
    }
});
