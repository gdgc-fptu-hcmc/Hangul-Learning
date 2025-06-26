import React from 'react';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <SEO title="Chính sách bảo mật | Hangul Learning" description="Thông tin về cách Hangul Learning thu thập và bảo vệ dữ liệu người dùng." keywords="chính sách bảo mật, Hangul Learning" />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Chính sách bảo mật</h1>
          <p className="text-lg text-gray-600">Cập nhật lần cuối: 06/2025</p>
        </header>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md" style={{ lineHeight: '1.8', color: '#555' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Thông tin chúng tôi thu thập</h2>
          <p className="mb-6">Hangul Learning chỉ thu thập email (khi người dùng chủ động gửi phản hồi) và dữ liệu thống kê ẩn danh nhằm cải thiện trải nghiệm. Chúng tôi <strong>không</strong> yêu cầu đăng ký tài khoản.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Cách chúng tôi sử dụng thông tin</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Gửi phản hồi, giải đáp thắc mắc người dùng.</li>
            <li>Nâng cao chất lượng nội dung dựa trên thống kê lượt xem ẩn danh.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Lưu trữ & bảo mật</h2>
          <p className="mb-6">Tất cả dữ liệu được lưu trữ trên máy chủ của bên cung cấp hosting uy tín (Vercel). Chúng tôi áp dụng biện pháp mã hoá HTTPS cho toàn bộ trang.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Quyền của người dùng</h2>
          <p className="mb-6">Bạn có thể yêu cầu xoá thông tin cá nhân bất kỳ lúc nào bằng cách liên hệ qua email: nguyenductuan11012003@gmail.com</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Thay đổi chính sách</h2>
          <p className="mb-6">Chính sách có thể được cập nhật để phù hợp với quy định pháp luật. Mọi thay đổi quan trọng sẽ được thông báo trên trang này.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 