import React from 'react';
import SEO from '../components/SEO';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <SEO title="Điều khoản sử dụng | Hangul Learning" description="Các điều khoản và điều kiện khi sử dụng nền tảng Hangul Learning." keywords="điều khoản sử dụng, Hangul Learning" />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Điều khoản sử dụng</h1>
          <p className="text-lg text-gray-600">Vui lòng đọc kỹ trước khi sử dụng Hangul Learning</p>
        </header>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md" style={{ lineHeight: '1.8', color: '#555' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Chấp nhận điều khoản</h2>
          <p className="mb-6">Bằng việc truy cập website, bạn đồng ý tuân thủ các điều khoản dưới đây.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Quyền sở hữu trí tuệ</h2>
          <p className="mb-6">Nội dung (bài viết, hình ảnh, mã nguồn) thuộc quyền sở hữu của Hangul Learning hoặc tác giả cấp phép. Bạn được phép sử dụng cho mục đích cá nhân, phi thương mại và không được sao chép khi chưa có sự đồng ý.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Trách nhiệm người dùng</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Không đăng tải bình luận vi phạm pháp luật, thuần phong mỹ tục.</li>
            <li>Không khai thác website cho mục đích thương mại khi chưa có thỏa thuận.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Miễn trừ trách nhiệm</h2>
          <p className="mb-6">Chúng tôi nỗ lực cung cấp nội dung chính xác nhưng không đảm bảo tuyệt đối. Hangul Learning không chịu trách nhiệm về thiệt hại phát sinh từ việc sử dụng thông tin trên website.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Thay đổi điều khoản</h2>
          <p className="mb-6">Điều khoản có thể được cập nhật bất kỳ lúc nào. Bạn nên kiểm tra định kỳ; việc tiếp tục sử dụng đồng nghĩa chấp thuận điều khoản mới.</p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService; 