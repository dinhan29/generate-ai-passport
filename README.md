# AI Passport Flashcards

Ứng dụng flashcard giúp ôn tập kiến thức AI bằng tiếng Nhật và tiếng Việt, chia theo từng section. Được xây dựng bằng HTML, JavaScript thuần, Tailwind CSS và Lucide qua CDN, không cần backend hoặc bước build.

## Tính năng

- Chọn section, lật thẻ và chuyển giữa các câu hỏi; hiển thị tiến độ trong bộ thẻ.
- Chuyển JP/VN cho câu hỏi và phần giải thích; mở giải thích khi cần qua nút dấu hỏi.
- Phân biệt mặt câu hỏi bằng nền trắng và icon câu hỏi; mặt đáp án bằng nền xanh nhạt và dấu tích.
- Hỗ trợ điện thoại, máy tính, thao tác bàn phím và tùy chọn giảm chuyển động.

Dữ liệu hiện có: **AIの基礎と歴史** — 71 thẻ. Đáp án giữ nguyên tiếng Nhật vì dữ liệu nguồn chưa có bản dịch đáp án.

## Bắt đầu

**Mở trực tiếp:** mở `index.html` trong trình duyệt hiện đại. Cần kết nối Internet để tải Tailwind và Lucide.

**Chạy server cục bộ:** nếu đã cài Node.js và npm, chạy tại thư mục dự án:

```sh
npm run dev
```

Mở [http://127.0.0.1:5173](http://127.0.0.1:5173). Nhấn `Ctrl+C` để dừng server.

Không cần `npm install`: dự án chưa có dependency npm; lệnh trên chỉ chạy server Node.js có sẵn trong `scripts/serve.mjs`. Sau khi sửa HTML/JS, tải lại trang để xem thay đổi.

## Sử dụng

Chọn section, nhấn vào thẻ hoặc nút **Lật thẻ** để xem đáp án. Dùng **Trước / Tiếp** để chuyển thẻ và **JP / VN** để đổi ngôn ngữ. Nút dấu hỏi mở phần giải thích theo ngôn ngữ đang chọn.

Giải thích mở trong popup ở giữa màn hình, tự co theo nội dung và giới hạn chiều cao theo màn hình. Nội dung dài cuộn riêng; tiêu đề, JP/VN và nút đóng luôn hiển thị. Đóng bằng nút ×, phím `Esc` hoặc nhấn vùng nền bên ngoài; thẻ vẫn giữ nguyên vị trí và mặt đang xem.

Khi chuyển thẻ hoặc section, giao diện trở về mặt câu hỏi, đóng giải thích và giữ ngôn ngữ đã chọn. Các nút chuyển thẻ dừng tại đầu và cuối bộ.

**Phím tắt:** `←` / `→` chuyển thẻ, `Space` lật thẻ. Phím tắt tạm ngưng trong popup, ô nhập liệu hoặc dropdown section; nút và liên kết giữ thao tác Space mặc định khi được focus. Giữ phím không làm chuyển hoặc lật thẻ liên tục.

Trên điện thoại, giao diện học vừa chiều cao màn hình, chỉ hiển thị hướng dẫn chạm để lật. Nếu câu hỏi hoặc đáp án quá dài, cuộn bên trong thẻ để đọc; các nút điều hướng vẫn ở trong màn hình.

## Cấu trúc dự án

| Đường dẫn | Vai trò |
| --- | --- |
| `index.html` | Giao diện và các thư viện CDN |
| `js/app.js` | Trạng thái và tương tác flashcard |
| `datas/section_*.js` | Tên section và mảng dữ liệu thẻ |
| `datas/sections.js` | Danh sách file section và cơ chế tải tuần tự |
| `docs/*.csv` | Dữ liệu nguồn |
| `scripts/serve.mjs` | Server preview cục bộ |
| `AGENTS.md` | Quy tắc làm việc dành cho AI |

## Quản lý dữ liệu

Luồng dữ liệu: **CSV trong `docs/` → mảng JS trong `datas/` → giao diện**. Trang không đọc CSV khi chạy; mỗi lần sửa CSV cần cập nhật file JS tương ứng, giữ nguyên ID và nội dung tiếng Nhật/Việt.

### Thêm section

1. Đặt CSV nguồn vào `docs/`, ví dụ `section_2.csv`.
2. Chuyển toàn bộ dữ liệu sang `datas/section_2.js` theo mẫu dưới đây. Dùng tên biến riêng cho mỗi section và đăng ký bằng `sections.push(...)` ở cuối file.

```js
const section2Name = "Tên section";
const section2Data = [
  {
    id: 1,                    // STT
    questionJa: "…",          // Câu hỏi (Tiếng Nhật)
    answerJa: "…",            // Câu trả lời (Tiếng Nhật)
    explanationJa: "…",       // Giải thích (Tiếng Nhật)
    questionVi: "…",          // Dịch câu hỏi (Tiếng Việt)
    explanationVi: "…",       // Dịch giải thích (Tiếng Việt)
  },
];

sections.push({ id: "section_2", name: section2Name, cards: section2Data });
```

3. Thêm `"datas/section_2.js"` vào mảng `sectionFiles` trong `datas/sections.js`. Không cần sửa HTML.
4. Tải lại trang và kiểm tra tên section, số thẻ, câu hỏi, đáp án và giải thích.

Các file được tải tuần tự theo `sectionFiles`; đây cũng là thứ tự hiển thị trong dropdown. Giao diện chỉ khởi tạo sau khi tải xong toàn bộ dữ liệu.

## Kiểm tra và xử lý sự cố

Sau khi thay đổi giao diện hoặc logic, kiểm tra chọn section, lật thẻ, JP/VN, giải thích và giới hạn thẻ đầu/cuối trên desktop/mobile. Dự án hiện chưa có bộ kiểm thử tự động được lưu trong repository.

- **Trang thiếu định dạng hoặc icon:** kiểm tra kết nối mạng và khả năng truy cập CDN.
- **Thông báo lỗi dữ liệu section:** kiểm tra đường dẫn trong `sectionFiles`, cú pháp file JS, lệnh `sections.push(...)` và mảng thẻ không rỗng. Xem Console của trình duyệt để biết thêm chi tiết.

Quy tắc sửa code và dữ liệu dành cho phiên AI mới nằm trong `AGENTS.md`.
