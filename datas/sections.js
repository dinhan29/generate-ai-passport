// Chỉ cần thêm đường dẫn tại đây, theo thứ tự muốn hiển thị.
const sectionFiles = [
  "datas/section_1.js",
];

// Mỗi file dữ liệu tự đăng ký section sau khi được tải.
const sections = [];

async function loadSections() {
  for (const source of sectionFiles) {
    const previousCount = sections.length;
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Không tải được dữ liệu: ${source}`));
      document.head.append(script);
    });

    const section = sections[previousCount];
    if (sections.length !== previousCount + 1 || !section?.name || !section.cards?.length) {
      throw new Error(`Dữ liệu section không hợp lệ: ${source}`);
    }
  }

  if (!sections.length) throw new Error("Chưa có section để học.");
}
