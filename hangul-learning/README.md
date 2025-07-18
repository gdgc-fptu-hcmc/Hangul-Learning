# Tài liệu kỹ thuật: Hangul Learning - Hướng dẫn cấu trúc source code và phát triển

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Kiến trúc tổng quan](#kiến-trúc-tổng-quan)
3. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
4. [Các công nghệ và thư viện](#các-công-nghệ-và-thư-viện)
5. [Luồng dữ liệu](#luồng-dữ-liệu)
6. [Components chính](#components-chính)
7. [Xử lý dữ liệu TOPIK](#xử-lý-dữ-liệu-topik)
8. [Tối ưu hóa hiệu suất](#tối-ưu-hóa-hiệu-suất)
9. [Quy trình triển khai](#quy-trình-triển-khai)

## Giới thiệu
hangul-learning/
├── public/              # Tài nguyên tĩnh
│   ├── pages/           # Các trang chính của ứng dụng
│   └── App.js           # Component gốc
├── scripts/             # Scripts tiện ích
├── build/               # Thư mục build sản phẩm
└── config files         # Các file cấu hình
```

## Cấu trúc thư mục

### `/public`

Chứa các tài nguyên tĩnh và file HTML gốc của ứng dụng:

- `index.html`: File HTML gốc với các thẻ meta quan trọng cho SEO
- `favicon.*`: Các phiên bản favicon khác nhau (SVG, PNG, ICO)
- `manifest.json`: Cấu hình PWA (Progressive Web App)
- `robots.txt` & `sitemap.xml`: File hỗ trợ SEO
- `*.webp`: Các hình ảnh được tối ưu hóa

### `/src`

Chứa toàn bộ mã nguồn JavaScript/React:

- `/components`: Các component tái sử dụng
  - Các component UI (Header, Footer, Breadcrumb)
  - Các component chức năng (TopikTestContent, TopikAudioPlayer)
  - Các component SEO (SEOOptimizer)

- `/data`: Dữ liệu tĩnh của ứng dụng
  - Các file `topikXX.js`: Dữ liệu đề thi TOPIK
  - Các file `topikXX_solutions.js`: Đáp án và giải thích

- `/pages`: Các trang chính của ứng dụng
  - `Home.js`: Trang chủ
  - `Topik.js`: Trang danh sách đề thi TOPIK
  - `Basic.js`, `Grammar.js`, `Vocabulary.js`: Các trang học tập

### `/scripts`

Chứa các script tiện ích:

- `normalize_topik_data.py`: Script Python để chuẩn hóa dữ liệu TOPIK
- `normalize_topik_data.sh`: Script shell để chạy script Python
- `create_favicons.sh`: Script tạo các phiên bản favicon khác nhau

## Các công nghệ và thư viện

### Core

- **React**: Thư viện JavaScript để xây dựng giao diện người dùng
- **React Router**: Quản lý định tuyến trong ứng dụng
- **React Hooks**: Sử dụng các hooks như useState, useEffect, useCallback, useRef

### Styling

- **Tailwind CSS**: Framework CSS dựa trên utility classes
- **PostCSS**: Công cụ để xử lý CSS với các plugins
- **CSS Modules**: Cách tổ chức CSS tránh xung đột class

### SEO & Analytics

- **React Helmet**: Quản lý thẻ head cho SEO
- **JSON-LD**: Structured data cho SEO
- **Google Analytics**: Theo dõi người dùng
- **Google AdSense**: Hiển thị quảng cáo

### Build & Deploy

- **Create React App**: Khởi tạo và cấu hình dự án React
- **Firebase**: Dịch vụ hosting và database
- **GitHub Actions**: CI/CD pipeline

## Luồng dữ liệu

### 1. Luồng xử lý chính

```
URL Request -> React Router -> Page Component -> Data Fetching -> Render UI
```

### 2. Luồng xử lý đề thi TOPIK

```
Topik.js (Chọn đề) -> TopikTestContent.js (Load đề) -> 
normalizeTestContent() -> Render UI -> User Interaction -> Submit
```

### 3. Luồng SEO

```
Page Load -> SEOOptimizer -> Metadata & Structured Data -> Breadcrumbs -> Google Crawler
```

## Components chính

### `App.js`

Component gốc, thiết lập cấu trúc cơ bản và định tuyến của ứng dụng:

```jsx
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topik" element={<Topik />} />
        {/* Các routes khác */}
      </Routes>
      <Footer />
    </Router>
  );
}
```

### `Header.js`

Hiển thị thanh điều hướng và logo:

```jsx
function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/web-logo.svg" alt="Hangul Learning" className="h-10" />
          <span className="ml-2 text-xl font-bold text-primary">Hangul Learning</span>
        </Link>
        <nav>
          {/* Menu items */}
        </nav>
      </div>
    </header>
  );
}
```

### `Breadcrumb.js`

Component hiển thị đường dẫn phân cấp (breadcrumb) cho SEO:

```jsx
function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumbs text-sm py-2 px-4">
      <ol className="flex flex-wrap items-center space-x-1">
        <li className="breadcrumb-item">
          <Link to="/">Trang chủ</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item flex items-center">
            <span className="mx-1">/</span>
            {item.url ? (
              <Link to={item.url}>{item.label}</Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### `TopikTestContent.js`

Component phức tạp nhất, xử lý hiển thị và tương tác với đề thi TOPIK:

```jsx
const TopikTestContent = ({ testId, onClose }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Load dữ liệu đề thi dựa vào testId
      let testContent = null;
      switch (testId) {
        case '91st':
          testContent = TOPIK_91;
          break;
        // Các case khác
        default:
          throw new Error('Bài thi này chưa được cập nhật');
      }

      if (!testContent) {
        throw new Error('Không tìm thấy nội dung bài thi');
      }

      // Chuẩn hóa dữ liệu
      const normalizedContent = normalizeTestContent(testContent);
      setContent(normalizedContent);
    } catch (err) {
      console.error('Lỗi khi tải bài thi:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [testId]);

  // Render UI dựa vào state
  // ...
}
```

### `SEOOptimizer.js`

Component tối ưu hóa SEO, thiết lập metadata và structured data:

```jsx
function SEOOptimizer({ title, description, canonicalUrl, breadcrumbs }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Các thẻ meta khác */}
      </Helmet>
      
      {/* Structured Data cho breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `${window.location.origin}${item.url}`
          }))
        })}
      </script>
    </>
  );
}
```

## Xử lý dữ liệu TOPIK

### Cấu trúc dữ liệu

Dữ liệu đề thi TOPIK được lưu trữ trong các file JS, với cấu trúc:

```js
export const TOPIK_XX = {
  id: 'XXth',
  title: 'XXth TOPIK I Mock Test',
  audioUrl: '...',
  questions: [
    {
      number: 1,
      instruction: '...',
      instructionViet: '...',
      sectionViet: '...',
      text: '...',
      options: {
        A: '...',
        B: '...',
        C: '...',
        D: '...'
      },
      answer: 'X',
      audioUrl: '...' // Optional
    },
    // Các câu hỏi khác
  ]
};
```

### Chuẩn hóa dữ liệu

Hàm `normalizeText` và `normalizeTestContent` được sử dụng để xử lý khoảng trắng dư thừa:

```js
// Chuẩn hóa văn bản
const normalizeText = (text) => {
  if (!text) return '';
  
  return text.trim()
    .replace(/\s+/g, ' ')
    .replace(/\n\s*/g, '\n')
    .replace(/\s*\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');
};

// Chuẩn hóa toàn bộ đề thi
const normalizeTestContent = (content) => {
  if (!content || !content.questions) return content;
  
  const normalizedContent = {
    ...content,
    id: content.id ? content.id.trim() : '',
    title: content.title ? content.title.trim() : '',
    audioUrl: content.audioUrl ? content.audioUrl.trim() : '',
    questions: content.questions.map(question => {
      // Xử lý chuẩn hóa từng câu hỏi
      // ...
    })
  };
  
  return normalizedContent;
};
```

### Script tự động chuẩn hóa

Script Python `normalize_topik_data.py` được sử dụng để tự động chuẩn hóa tất cả các file dữ liệu TOPIK:

```python
def normalize_text(text):
    """Normalize text by removing excessive whitespace."""
    if not text:
        return ""
    
    # Replace multiple spaces with a single space
    text = re.sub(r'\s+', ' ', text)
    # Trim whitespace at the beginning and end
    text = text.strip()
    return text

def process_file(file_path):
    """Process a single JavaScript file containing TOPIK data."""
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the JavaScript object definition
    match = re.search(r'export const TOPIK_\d+ = ({[\s\S]*?});', content)
    if not match:
        print(f"Could not find TOPIK data in {file_path}")
        return
    
    # Xử lý và chuẩn hóa dữ liệu
    # ...
    
    # Ghi lại file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
```

## Tối ưu hóa hiệu suất

### Lazy Loading

Sử dụng React.lazy và Suspense để tải các component khi cần thiết:

```jsx
const Topik = React.lazy(() => import('./pages/Topik'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/topik" element={<Topik />} />
          {/* Các routes khác */}
        </Routes>
      </Suspense>
    </Router>
  );
}
```

### Tối ưu hóa hình ảnh

Component `OptimizedImage` tự động xử lý lazy loading và định dạng hình ảnh:

```jsx
function OptimizedImage({ src, alt, className, width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}
```

### Memoization

Sử dụng `React.memo`, `useMemo` và `useCallback` để tránh re-render không cần thiết:

```jsx
const TopikTestContent = React.memo(({ testId, onClose }) => {
  // Component logic
  
  const handleSubmit = useCallback(() => {
    alert("Đã nộp bài!");
    console.log("Submitted Answers:", selectedAnswers);
  }, [selectedAnswers]);
  
  const getCurrentQuestions = useMemo(() => {
    const start = (currentPage - 1) * questionsPerPage;
    return content.questions.slice(start, start + questionsPerPage);
  }, [content, currentPage, questionsPerPage]);
  
  // Component render
});
```

## Quy trình triển khai

### Build sản phẩm

```bash
npm run build
```

Quy trình build tạo ra thư mục `/build` với các tài nguyên đã được tối ưu hóa.

### Triển khai trên Firebase

Sử dụng file `firebase.json` để cấu hình:

```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "database": {
    "rules": "database.rules.json"
  }
}
```

Script triển khai `deploy.sh`:

```bash
#!/bin/bash
npm run build
firebase deploy
```

## Hướng dẫn phát triển

### 1. Thêm trang mới

1. Tạo file mới trong thư mục `/pages`
2. Thêm route trong `App.js`
3. Cập nhật navigation trong `Header.js`
4. Tối ưu hóa SEO với `SEOOptimizer`

### 2. Thêm đề thi TOPIK mới

1. Tạo file mới trong thư mục `/data` (vd: `topikXX.js`)
2. Tuân theo cấu trúc dữ liệu chuẩn
3. Chuẩn hóa khoảng trắng với script `normalize_topik_data.py`
4. Cập nhật `TopikTestContent.js` để thêm case mới

### 3. Thêm component mới

1. Tạo file mới trong thư mục `/components`
2. Tuân theo quy ước đặt tên (PascalCase)
3. Sử dụng React Hooks thay vì class components
4. Tối ưu hiệu suất với `React.memo`, `useCallback`, `useMemo`

### 4. Tối ưu hóa SEO

1. Cập nhật thẻ title và meta description
2. Thêm structured data (JSON-LD) phù hợp
3. Cập nhật sitemap.xml khi thêm trang mới
4. Sử dụng component `Breadcrumb` cho navigation phân cấp

## Chuỗi bài học Front-End chuyên sâu với React

Để thuận tiện cho việc học và giảng dạy, mỗi bài giảng sẽ được trình bày chi tiết trong file riêng dưới thư mục `docs/`:

#### Bảng nội dung bài giảng
- [Bài 1: Khởi tạo dự án và cấu trúc cơ bản](docs/lesson1.md)
- [Bài 2: Component và Props](docs/lesson2.md)
- [Bài 3: State và React Hooks](docs/lesson3.md)
- [Bài 4: Layout và CSS với Tailwind](docs/lesson4.md)
- [Bài 5: Định tuyến với React Router](docs/lesson5.md)
- [Bài 6: Quản lý dữ liệu tĩnh và dynamic](docs/lesson6.md)
- [Bài 7: Component nâng cao và tối ưu hiệu suất](docs/lesson7.md)
- [Bài 8: Kiểm thử với Jest & React Testing Library](docs/lesson8.md)
- [Bài 9: SEO & Analytics](docs/lesson9.md)
- [Bài 10: Build và Deploy](docs/lesson10.md)

Nội dung bài giảng sẽ bao gồm:
- Giải thích khái niệm và lý thuyết
- Ví dụ code minh họa chi tiết
- Bài tập thực hành kèm đáp án
