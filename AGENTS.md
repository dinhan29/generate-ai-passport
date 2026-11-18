# Hướng dẫn cho AI

## Khi bắt đầu session

- Đọc `README.md` để hiểu tổng quan, cấu trúc file, luồng dữ liệu và cách chạy dự án.
- Đọc các file liên quan trước khi sửa; kiểm tra thay đổi hiện có và không ghi đè công việc của người dùng.
- Chỉ thực hiện trong phạm vi yêu cầu; giữ cách triển khai đơn giản và nhất quán với code hiện tại.

## Quy tắc code

- Dùng HTML và JavaScript thuần; không tự thêm framework, backend, cơ sở dữ liệu hoặc tính năng ngoài yêu cầu.
- Dùng Tailwind và Lucide qua CDN. Không cài Tailwind bằng npm, lưu CSS Tailwind cục bộ hoặc thêm bước build CSS.
- Ưu tiên utility class có sẵn của Tailwind; hạn chế class CSS mới và CSS riêng.
- Đặt tên biến, hàm rõ nghĩa. Giữ phần dữ liệu trong `datas/`, logic tương tác trong `js/app.js`, markup trong `index.html`.
- Giữ bố cục tối giản hiện có trừ khi người dùng yêu cầu đổi. Các nút cần nhãn chữ hoặc tên truy cập; hiệu ứng phải tôn trọng `prefers-reduced-motion`.

## Khi sửa dữ liệu

- Giữ luồng CSV trong `docs/` → mảng JS riêng cho mỗi section trong `datas/` → giao diện; không đọc CSV khi trang chạy.
- Mỗi file dữ liệu tự đăng ký section vào `sections`. Chỉ khai báo đường dẫn trong `sectionFiles` ở `datas/sections.js`; không thêm từng script vào HTML. Giữ cơ chế tải tuần tự và chờ tải xong trước khi khởi tạo giao diện.
- Giữ nguyên nội dung, ID và Unicode của CSV; xử lý đúng dấu phẩy, dấu ngoặc kép. Không tự dịch hay bịa dữ liệu thiếu, kể cả `answerVi`.
- Khi CSV thay đổi, cập nhật file JS tương ứng và đối chiếu số thẻ, nội dung.

## Trước khi hoàn tất

- Kiểm tra phù hợp với phần đã sửa; với giao diện hoặc logic, thử chọn section, lật/chuyển thẻ, JP/VN và mở/đóng giải thích.
- Kiểm tra thẻ đầu/cuối, nội dung dài, desktop/mobile và lỗi JavaScript khi thay đổi có liên quan.
- Cập nhật `README.md` khi thay đổi cấu trúc, cách chạy hoặc cách thêm dữ liệu; giữ `AGENTS.md` ngắn và tập trung vào chỉ dẫn làm việc.
- Nêu ngắn gọn thay đổi, kết quả kiểm tra và giới hạn còn lại; không khẳng định đã kiểm tra những gì chưa thực hiện.
