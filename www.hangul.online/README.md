# Hangul Online - Website Học Tiếng Hàn Quốc

## Giới thiệu

Hangul Online là một website học tiếng Hàn Quốc trực tuyến được xây dựng bằng React.js với Webpack. Website cung cấp các bài học từ cơ bản đến nâng cao, giúp người Việt Nam học tiếng Hàn một cách hiệu quả.

## Tính năng

- 🎓 **Học từ cơ bản**: Bắt đầu từ bảng chữ cái Hangeul
- 🔊 **Phát âm chuẩn**: Luyện tập với audio chất lượng cao
- 📱 **Responsive**: Học trên mọi thiết bị
- 🎨 **Giao diện đẹp**: Thiết kế hiện đại, thân thiện với người dùng
- ⚡ **Hot Reload**: Phát triển nhanh với webpack dev server
- 🧩 **Component-based**: Kiến trúc React components tái sử dụng

## Cấu trúc dự án

```
www.hangul.online/
├── public/
│   └── index.html              # Template HTML
├── src/
│   ├── components/             # React Components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── LessonCard.js
│   │   ├── LessonsSection.js
│   │   ├── FeaturesSection.js
│   │   ├── Footer.js
│   │   └── *.css              # Component styles
│   ├── styles/
│   │   ├── index.css          # Global styles
│   │   └── App.css            # App component styles
│   ├── App.js                 # Main App component
│   └── index.js               # Entry point
├── package.json               # Dependencies & scripts
├── webpack.config.js          # Webpack configuration
├── .babelrc                   # Babel configuration
└── README.md                  # Documentation
```

## Công nghệ sử dụng

- **React 18**: Framework JavaScript cho UI
- **Webpack 5**: Module bundler và dev server
- **Babel**: JavaScript transpiler cho JSX
- **CSS3**: Styling với Flexbox và Grid
- **Google Fonts**: Font chữ Noto Sans KR và Inter
- **Font Awesome**: Icons

## Cài đặt và chạy

### Yêu cầu
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
# hoặc
npm start
```
Website sẽ mở tại: http://localhost:3000

### Build production
```bash
npm run build
```
Files build sẽ được tạo trong thư mục `dist/`

## Cấu trúc Single Page Application (SPA)

Website được thiết kế như một Single Page Application - tất cả nội dung được hiển thị trên một trang duy nhất với các section khác nhau:

### 🏠 Trang chủ (Home) - Hero Section
- **Vị trí**: Phần đầu tiên của trang
- **Nội dung**: Tiêu đề chính, mô tả, nút call-to-action
- **Tính năng**: Smooth scroll đến phần bài học khi click "Bắt đầu học ngay"

### 📚 Phần bài học (Lessons Section)  
- **Vị trí**: Phần chính của trang
- **Nội dung**: Danh sách các bài học với loading state
- **Tính năng**: Grid layout responsive, difficulty badges

### ⭐ Phần tính năng (Features Section)
- **Vị trí**: Sau phần bài học
- **Nội dung**: Các tính năng nổi bật của website
- **Tính năng**: Icon grid layout, responsive design

### 📞 Phần liên hệ (Contact) - Footer
- **Vị trí**: Cuối trang
- **Nội dung**: Thông tin liên hệ, social media links
- **Tính năng**: Navigation links với smooth scroll

### 🧭 Navigation
- **Header**: Sticky navigation với smooth scroll
- **Footer**: Quick links với smooth scroll
- **Tất cả links**: Hoạt động trong cùng một trang

## Phát triển

### Thêm component mới
1. Tạo file component trong `src/components/`
2. Tạo file CSS tương ứng
3. Import và sử dụng trong App.js

### Thêm bài học mới
Chỉnh sửa file `src/components/LessonsSection.js`:

```javascript
{
    id: 7,
    title: "Tên bài học",
    description: "Mô tả bài học",
    koreanText: "한국어 텍스트",
    difficulty: "beginner", // hoặc "intermediate", "advanced"
    duration: "45 phút"
}
```

### Thay đổi styling
- Global styles: `src/styles/index.css`
- Component styles: `src/components/ComponentName.css`
- App styles: `src/styles/App.css`

### Thêm dependencies
```bash
npm install package-name
```

## Scripts có sẵn

- `npm start`: Chạy development server
- `npm run dev`: Chạy development server và mở browser
- `npm run build`: Build production
- `npm test`: Chạy tests (chưa cấu hình)

## Responsive Design

Website được thiết kế responsive, hoạt động tốt trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Cấu trúc CSS

- **CSS Modules**: Mỗi component có file CSS riêng
- **Global Styles**: `index.css` cho reset và base styles
- **Component Styles**: Tách biệt cho từng component
- **Responsive**: Mobile-first approach

## Hot Reload

Webpack dev server cung cấp hot reload:
- Tự động refresh khi thay đổi code
- Preserve state khi có thể
- Fast rebuild với incremental compilation

## Đóng góp

Nếu bạn muốn đóng góp vào dự án:
1. Fork repository
2. Tạo branch mới: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Tạo Pull Request

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## Liên hệ

- Website: www.hangul.online
- Email: contact@hangul.online
- Facebook: @hangulonline

---

**Chúc bạn học tiếng Hàn vui vẻ! 화이팅!** 🇰🇷
