# Firebase Authentication Setup Guide

## 1. Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" hoặc "Tạo dự án"
3. Đặt tên cho project (ví dụ: "hangul-online")
4. Bật Google Analytics nếu muốn (tùy chọn)
5. Click "Create project"

## 2. Cấu hình Authentication

1. Trong Firebase Console, chọn project vừa tạo
2. Chọn "Authentication" từ menu bên trái
3. Chọn tab "Sign-in method"
4. Bật các phương thức đăng nhập:
   - **Email/Password**: Click "Enable"
   - **Google**: Click "Enable", nhập thông tin OAuth

## 3. Lấy Firebase Config

1. Chọn "Project settings" (biểu tượng bánh răng)
2. Cuộn xuống phần "Your apps"
3. Click "Add app" và chọn Web app (</>)
4. Đặt tên cho app (ví dụ: "Hangul Online Web")
5. Copy Firebase config object

## 4. Cập nhật Firebase Config

Trong file `src/utils/firebase.js`, thay thế các giá trị placeholder bằng config từ Firebase:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## 5. Cấu hình Google OAuth (tùy chọn)

Nếu sử dụng Google Sign-in:

1. Trong Firebase Console > Authentication > Sign-in method
2. Click vào Google provider
3. Thêm authorized domains:
   - `localhost` (cho development)
   - Domain production của bạn
4. Lưu thay đổi

## 6. Chạy ứng dụng

```bash
npm start
```

## Các tính năng đã implement

- ✅ Đăng ký với Email/Password
- ✅ Đăng nhập với Email/Password
- ✅ Đăng nhập với Google
- ✅ Hiển thị trạng thái user trong Header
- ✅ User dropdown menu với logout
- ✅ Protected routes (có thể mở rộng)
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design

## Lưu ý bảo mật

- Không commit file `firebase.js` với config thực tế lên Git
- Thêm Firebase config vào `.env` file và sử dụng environment variables
- Cấu hình Firestore Security Rules nếu cần lưu trữ dữ liệu user

## Troubleshooting

1. **Firebase config không hoạt động**: Kiểm tra lại các giá trị trong Firebase Console
2. **Google Sign-in không hoạt động**: Kiểm tra authorized domains và OAuth credentials
3. **Auth state không update**: Đảm bảo AuthProvider wrap toàn bộ app
4. **CORS errors**: Thêm domain vào authorized domains trong Firebase Console