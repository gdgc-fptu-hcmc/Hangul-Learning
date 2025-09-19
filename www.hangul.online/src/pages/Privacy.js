import React from 'react';
import '../styles/Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>CHÍNH SÁCH BẢO MẬT</h1>
        <p className="last-updated">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        <p><strong>Phiên bản:</strong> 2.0</p>
        <p><strong>Hiệu lực từ:</strong> {new Date().toLocaleDateString('vi-VN')}</p>
        <p><strong>Ngôn ngữ:</strong> Tiếng Việt (Vietnamese)</p>
        <p><strong>Phạm vi áp dụng:</strong> Toàn cầu</p>
        
        <blockquote>
          <p><strong>Cam kết bảo mật:</strong> Hangul Online cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn theo các tiêu chuẩn quốc tế cao nhất. Chính sách này giải thích chi tiết cách chúng tôi xử lý thông tin của bạn.</p>
        </blockquote>
        
        <section>
          <h2>1. GIỚI THIỆU</h2>
          <p>
            Hangul Online cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách Bảo mật này giải thích chi tiết cách chúng tôi thu thập, sử dụng, lưu trữ, bảo vệ và chia sẻ thông tin cá nhân của bạn khi bạn sử dụng dịch vụ Hangul Online.
          </p>
          <p>
            Chính sách này tuân thủ các quy định pháp luật quốc tế về bảo vệ dữ liệu cá nhân, bao gồm GDPR (Liên minh Châu Âu), CCPA (California), PIPEDA (Canada), và Luật An ninh mạng 2018 của Việt Nam.
          </p>
        </section>

        <section>
          <h2>2. ĐỊNH NGHĨA</h2>
          <p><strong>"Dữ liệu cá nhân"</strong> có nghĩa là bất kỳ thông tin nào liên quan đến một cá nhân được xác định hoặc có thể xác định được.</p>
          <p><strong>"Xử lý dữ liệu"</strong> có nghĩa là bất kỳ hoạt động nào được thực hiện đối với dữ liệu cá nhân, bao gồm thu thập, ghi lại, tổ chức, lưu trữ, sử dụng, tiết lộ, xóa hoặc phá hủy.</p>
          <p><strong>"Bộ điều khiển dữ liệu"</strong> có nghĩa là Hangul Online, tổ chức quyết định mục đích và phương tiện xử lý dữ liệu cá nhân.</p>
          <p><strong>"Bộ xử lý dữ liệu"</strong> có nghĩa là bên thứ ba xử lý dữ liệu cá nhân thay mặt cho chúng tôi.</p>
        </section>

        <section>
          <h2>3. THÔNG TIN CHÚNG TÔI THU THẬP</h2>
          
          <h3>3.1 Thông tin Bạn Cung cấp Trực tiếp</h3>
          <ul>
            <li><strong>Thông tin danh tính:</strong> Họ tên, ngày sinh, giới tính</li>
            <li><strong>Thông tin liên lạc:</strong> Địa chỉ email, số điện thoại, địa chỉ</li>
            <li><strong>Thông tin tài khoản:</strong> Tên đăng nhập, mật khẩu (được mã hóa)</li>
            <li><strong>Thông tin nghề nghiệp:</strong> Công ty, chức vụ, lĩnh vực hoạt động</li>
            <li><strong>Thông tin học tập:</strong> Trình độ tiếng Hàn, mục tiêu học tập</li>
            <li><strong>Tùy chọn marketing:</strong> Đồng ý nhận thông tin quảng cáo</li>
          </ul>

          <h3>3.2 Thông tin Tự động Thu thập</h3>
          <ul>
            <li><strong>Thông tin thiết bị:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành, thiết bị di động</li>
            <li><strong>Thông tin sử dụng:</strong> Trang đã truy cập, thời gian truy cập, tương tác với nội dung</li>
            <li><strong>Thông tin vị trí:</strong> Quốc gia, thành phố (dựa trên IP)</li>
            <li><strong>Cookies và công nghệ tương tự:</strong> Dữ liệu theo dõi và phân tích</li>
            <li><strong>Thông tin hiệu suất:</strong> Tốc độ tải trang, lỗi hệ thống</li>
          </ul>

          <h3>3.3 Thông tin từ Bên thứ ba</h3>
          <ul>
            <li><strong>Google Analytics:</strong> Dữ liệu phân tích website</li>
            <li><strong>Firebase:</strong> Dữ liệu xác thực và phân tích ứng dụng</li>
            <li><strong>Mạng xã hội:</strong> Thông tin công khai khi đăng nhập qua Google</li>
          </ul>
        </section>

        <section>
          <h2>4. MỤC ĐÍCH SỬ DỤNG DỮ LIỆU</h2>
          <h3>4.1 Mục đích Cần thiết</h3>
          <ul>
            <li>Cung cấp và duy trì dịch vụ học tiếng Hàn</li>
            <li>Xử lý đăng ký và xác thực tài khoản</li>
            <li>Gửi thông báo quan trọng về dịch vụ</li>
            <li>Tuân thủ nghĩa vụ pháp lý</li>
            <li>Bảo vệ quyền và tài sản của chúng tôi</li>
          </ul>

          <h3>4.2 Mục đích Cải thiện Dịch vụ</h3>
          <ul>
            <li>Phân tích và cải thiện trải nghiệm người dùng</li>
            <li>Phát triển tính năng mới</li>
            <li>Nghiên cứu và phát triển sản phẩm</li>
            <li>Đo lường hiệu quả marketing</li>
          </ul>

          <h3>4.3 Mục đích Marketing (với sự đồng ý)</h3>
          <ul>
            <li>Gửi thông tin về khóa học mới</li>
            <li>Gửi ưu đãi và khuyến mãi</li>
            <li>Gửi bản tin và cập nhật</li>
            <li>Quảng cáo có mục tiêu</li>
          </ul>
        </section>

        <section>
          <h2>5. CƠ SỞ PHÁP LÝ XỬ LÝ DỮ LIỆU</h2>
          <p>Theo GDPR, chúng tôi xử lý dữ liệu cá nhân dựa trên các cơ sở pháp lý sau:</p>
          <ul>
            <li><strong>Đồng ý (Consent):</strong> Bạn đã đồng ý rõ ràng với việc xử lý dữ liệu</li>
            <li><strong>Thực hiện hợp đồng (Contract):</strong> Cần thiết để thực hiện hợp đồng dịch vụ</li>
            <li><strong>Nghĩa vụ pháp lý (Legal obligation):</strong> Tuân thủ các yêu cầu pháp luật</li>
            <li><strong>Lợi ích hợp pháp (Legitimate interest):</strong> Cải thiện dịch vụ và bảo mật</li>
          </ul>
        </section>

        <section>
          <h2>6. CHIA SẺ DỮ LIỆU</h2>
          <h3>6.1 Nguyên tắc Chia sẻ</h3>
          <p>
            Chúng tôi không bán, cho thuê hoặc chia sẻ dữ liệu cá nhân của bạn với bên thứ ba, ngoại trừ các trường hợp được mô tả trong chính sách này.
          </p>

          <h3>6.2 Các trường hợp Chia sẻ</h3>
          <ul>
            <li><strong>Với sự đồng ý của bạn:</strong> Khi bạn đồng ý rõ ràng</li>
            <li><strong>Nhà cung cấp dịch vụ:</strong> Firebase, Google Analytics, các nhà cung cấp hosting</li>
            <li><strong>Tuân thủ pháp luật:</strong> Khi có yêu cầu từ cơ quan có thẩm quyền</li>
            <li><strong>Bảo vệ quyền lợi:</strong> Để bảo vệ quyền và tài sản của chúng tôi</li>
            <li><strong>Hợp nhất/Khởi tạo:</strong> Trong trường hợp sáp nhập hoặc bán công ty</li>
          </ul>

          <h3>6.3 Nhà cung cấp Dịch vụ</h3>
          <p>Chúng tôi sử dụng các nhà cung cấp dịch vụ sau:</p>
          <ul>
            <li><strong>Firebase (Google):</strong> Xác thực và cơ sở dữ liệu</li>
            <li><strong>Google Analytics:</strong> Phân tích website</li>
            <li><strong>Cloudflare:</strong> Bảo mật và CDN</li>
            <li><strong>SendGrid:</strong> Gửi email</li>
          </ul>
        </section>

        <section>
          <h2>7. BẢO MẬT DỮ LIỆU</h2>
          <h3>7.1 Biện pháp Kỹ thuật</h3>
          <ul>
            <li><strong>Mã hóa:</strong> Dữ liệu được mã hóa trong quá trình truyền (TLS 1.3) và lưu trữ (AES-256)</li>
            <li><strong>Xác thực đa yếu tố:</strong> Bảo vệ tài khoản người dùng</li>
            <li><strong>Kiểm soát truy cập:</strong> Giới hạn quyền truy cập theo nguyên tắc "cần biết"</li>
            <li><strong>Giám sát bảo mật:</strong> Hệ thống phát hiện xâm nhập 24/7</li>
            <li><strong>Sao lưu an toàn:</strong> Dữ liệu được sao lưu định kỳ và mã hóa</li>
          </ul>

          <h3>7.2 Biện pháp Tổ chức</h3>
          <ul>
            <li><strong>Đào tạo nhân viên:</strong> Về bảo mật dữ liệu và quyền riêng tư</li>
            <li><strong>Chính sách nội bộ:</strong> Quy định về xử lý dữ liệu cá nhân</li>
            <li><strong>Kiểm toán định kỳ:</strong> Đánh giá và cải thiện bảo mật</li>
            <li><strong>Thỏa thuận bảo mật:</strong> Với tất cả nhà cung cấp dịch vụ</li>
          </ul>

          <h3>7.3 Chứng nhận Bảo mật</h3>
          <p>Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế:</p>
          <ul>
            <li><a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank">ISO 27001</a> - Hệ thống quản lý an ninh thông tin</li>
            <li><a href="https://www.pcisecuritystandards.org/" target="_blank">PCI DSS</a> - Bảo mật dữ liệu thẻ thanh toán</li>
            <li><a href="https://www.soc2.org/" target="_blank">SOC 2</a> - Báo cáo kiểm soát dịch vụ</li>
          </ul>
        </section>

        <section>
          <h2>8. COOKIES VÀ CÔNG NGHỆ THEO DÕI</h2>
          <h3>8.1 Loại Cookies</h3>
          <ul>
            <li><strong>Cookies cần thiết:</strong> Hoạt động cơ bản của website</li>
            <li><strong>Cookies phân tích:</strong> Google Analytics, đo lường hiệu suất</li>
            <li><strong>Cookies chức năng:</strong> Lưu tùy chọn người dùng</li>
            <li><strong>Cookies marketing:</strong> Quảng cáo có mục tiêu (với sự đồng ý)</li>
          </ul>

          <h3>8.2 Quản lý Cookies</h3>
          <p>
            Bạn có thể quản lý cookies thông qua cài đặt trình duyệt hoặc bảng điều khiển cookies của chúng tôi. Tuy nhiên, việc vô hiệu hóa một số cookies có thể ảnh hưởng đến chức năng của website.
          </p>
        </section>

        <section>
          <h2>9. QUYỀN CỦA BẠN</h2>
          <h3>9.1 Quyền theo GDPR</h3>
          <ul>
            <li><strong>Quyền truy cập:</strong> Yêu cầu thông tin về dữ liệu cá nhân của bạn</li>
            <li><strong>Quyền sửa đổi:</strong> Yêu cầu sửa đổi dữ liệu không chính xác</li>
            <li><strong>Quyền xóa:</strong> Yêu cầu xóa dữ liệu cá nhân ("quyền được quên")</li>
            <li><strong>Quyền hạn chế:</strong> Yêu cầu hạn chế xử lý dữ liệu</li>
            <li><strong>Quyền di chuyển:</strong> Yêu cầu chuyển dữ liệu sang nhà cung cấp khác</li>
            <li><strong>Quyền phản đối:</strong> Phản đối việc xử lý dữ liệu vì lợi ích hợp pháp</li>
            <li><strong>Quyền rút lại đồng ý:</strong> Rút lại sự đồng ý bất kỳ lúc nào</li>
          </ul>

          <h3>9.2 Quyền theo CCPA (California)</h3>
          <ul>
            <li>Quyền biết về dữ liệu cá nhân được thu thập</li>
            <li>Quyền xóa dữ liệu cá nhân</li>
            <li>Quyền không bán dữ liệu cá nhân</li>
            <li>Quyền bình đẳng trong dịch vụ</li>
          </ul>

          <h3>9.3 Cách thực hiện Quyền</h3>
          <p>
            Để thực hiện các quyền của mình, vui lòng liên hệ với chúng tôi qua email privacy@hangul.online hoặc sử dụng form yêu cầu trên website. Chúng tôi sẽ phản hồi trong vòng 30 ngày.
          </p>
        </section>

        <section>
          <h2>10. LƯU TRỮ DỮ LIỆU</h2>
          <h3>10.1 Thời gian Lưu trữ</h3>
          <ul>
            <li><strong>Dữ liệu tài khoản:</strong> Cho đến khi tài khoản bị xóa</li>
            <li><strong>Dữ liệu học tập:</strong> 5 năm sau khi hoàn thành khóa học</li>
            <li><strong>Dữ liệu marketing:</strong> Cho đến khi rút lại đồng ý</li>
            <li><strong>Dữ liệu pháp lý:</strong> Theo yêu cầu của pháp luật</li>
          </ul>

          <h3>10.2 Xóa Dữ liệu</h3>
          <p>
            Khi không còn cần thiết, dữ liệu cá nhân sẽ được xóa an toàn hoặc ẩn danh hóa. Chúng tôi sử dụng các phương pháp xóa dữ liệu không thể phục hồi.
          </p>
        </section>

        <section>
          <h2>11. CHUYỂN GIAO DỮ LIỆU QUỐC TẾ</h2>
          <p>
            Dữ liệu của bạn có thể được chuyển và xử lý tại các quốc gia khác ngoài quốc gia cư trú của bạn. Chúng tôi đảm bảo rằng việc chuyển giao này tuân thủ các quy định bảo vệ dữ liệu hiện hành thông qua:
          </p>
          <ul>
            <li><strong>Quyết định Đủ điều kiện:</strong> Các quốc gia được EU công nhận có mức độ bảo vệ đầy đủ</li>
            <li><strong>Điều khoản Hợp đồng Chuẩn (SCCs):</strong> Theo quy định của EU</li>
            <li><strong>Chứng nhận Bảo mật:</strong> Các chương trình chứng nhận quốc tế</li>
            <li><strong>Đồng ý rõ ràng:</strong> Khi các biện pháp khác không áp dụng được</li>
          </ul>
        </section>

        <section>
          <h2>12. TRẺ EM</h2>
          <p>
            Dịch vụ của chúng tôi không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập dữ liệu cá nhân từ trẻ em dưới 13 tuổi. Nếu chúng tôi phát hiện đã thu thập dữ liệu từ trẻ em dưới 13 tuổi, chúng tôi sẽ xóa thông tin đó ngay lập tức.
          </p>
          <p>
            Đối với trẻ em từ 13-18 tuổi, chúng tôi yêu cầu sự đồng ý của cha mẹ hoặc người giám hộ hợp pháp trước khi thu thập dữ liệu cá nhân.
          </p>
        </section>

        <section>
          <h2>13. VI PHẠM DỮ LIỆU</h2>
          <p>
            Trong trường hợp xảy ra vi phạm dữ liệu cá nhân, chúng tôi sẽ:
          </p>
          <ul>
            <li>Thông báo cho cơ quan có thẩm quyền trong vòng 72 giờ</li>
            <li>Thông báo cho người dùng bị ảnh hưởng trong vòng 24 giờ</li>
            <li>Thực hiện các biện pháp khắc phục ngay lập tức</li>
            <li>Điều tra và báo cáo nguyên nhân vi phạm</li>
            <li>Cải thiện các biện pháp bảo mật</li>
          </ul>
        </section>

        <section>
          <h2>14. THAY ĐỔI CHÍNH SÁCH</h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian để phản ánh các thay đổi trong thực tiễn, công nghệ hoặc yêu cầu pháp lý. Khi có thay đổi quan trọng, chúng tôi sẽ:
          </p>
          <ul>
            <li>Thông báo qua email ít nhất 30 ngày trước khi có hiệu lực</li>
            <li>Đăng thông báo nổi bật trên website</li>
            <li>Cập nhật ngày "Cập nhật lần cuối" ở đầu chính sách</li>
            <li>Lưu trữ các phiên bản trước để tham khảo</li>
          </ul>
        </section>

        <section>
          <h2>15. LIÊN HỆ VÀ KHIẾU NẠI</h2>
          <h3>15.1 Thông tin Liên hệ</h3>
          <p>
            <strong>Hangul Online - Bộ phận Bảo mật Dữ liệu</strong><br />
            Email: nguyenductuan11012003@gmail.com<br />
            Địa chỉ: Việt Nam<br />
            Website: <a href="https://hangul.online" target="_blank">https://hangul.online</a>
          </p>

          <h3>15.2 Khiếu nại</h3>
          <p>
            Nếu bạn có khiếu nại về việc xử lý dữ liệu cá nhân, bạn có thể:
          </p>
          <ul>
            <li>Liên hệ trực tiếp với chúng tôi</li>
            <li>Khiếu nại với cơ quan bảo vệ dữ liệu tại quốc gia của bạn</li>
            <li>Khởi kiện tại tòa án có thẩm quyền</li>
          </ul>

          <h3>15.3 Cơ quan Bảo vệ Dữ liệu</h3>
          <ul>
            <li><strong>EU:</strong> <a href="https://edpb.europa.eu/" target="_blank">European Data Protection Board</a></li>
            <li><strong>UK:</strong> <a href="https://ico.org.uk/" target="_blank">Information Commissioner's Office</a></li>
            <li><strong>California:</strong> <a href="https://oag.ca.gov/privacy/ccpa" target="_blank">California Attorney General</a></li>
            <li><strong>Canada:</strong> <a href="https://www.priv.gc.ca/" target="_blank">Privacy Commissioner of Canada</a></li>
          </ul>
        </section>

        <section>
          <h2>16. BẢO MẬT NÂNG CAO VÀ CÔNG NGHỆ</h2>
          <h3>16.1 Công nghệ Mã hóa</h3>
          <p>
            Chúng tôi sử dụng các công nghệ mã hóa tiên tiến nhất để bảo vệ dữ liệu của bạn:
          </p>
          <ul>
            <li><strong>AES-256:</strong> Mã hóa dữ liệu lưu trữ với thuật toán Advanced Encryption Standard 256-bit</li>
            <li><strong>TLS 1.3:</strong> Mã hóa kết nối với Transport Layer Security phiên bản mới nhất</li>
            <li><strong>RSA-4096:</strong> Mã hóa khóa với thuật toán RSA 4096-bit</li>
            <li><strong>ECDSA:</strong> Chữ ký số với Elliptic Curve Digital Signature Algorithm</li>
            <li><strong>PBKDF2:</strong> Tạo khóa từ mật khẩu với Password-Based Key Derivation Function 2</li>
          </ul>

          <h3>16.2 Hệ thống Giám sát</h3>
          <p>
            Chúng tôi triển khai hệ thống giám sát bảo mật 24/7 bao gồm:
          </p>
          <ul>
            <li><strong>SIEM (Security Information and Event Management):</strong> Phân tích và phát hiện mối đe dọa</li>
            <li><strong>IDS/IPS (Intrusion Detection/Prevention System):</strong> Phát hiện và ngăn chặn xâm nhập</li>
            <li><strong>DLP (Data Loss Prevention):</strong> Ngăn chặn rò rỉ dữ liệu</li>
            <li><strong>UEBA (User and Entity Behavior Analytics):</strong> Phân tích hành vi bất thường</li>
            <li><strong>Threat Intelligence:</strong> Cập nhật thông tin mối đe dọa mới nhất</li>
          </ul>
        </section>

        <section>
          <h2>17. QUYỀN RIÊNG TƯ CỦA TRẺ EM</h2>
          <h3>17.1 Bảo vệ Đặc biệt</h3>
          <p>
            Chúng tôi có các biện pháp bảo vệ đặc biệt cho trẻ em dưới 18 tuổi:
          </p>
          <ul>
            <li><strong>Xác minh tuổi:</strong> Yêu cầu xác minh tuổi khi đăng ký</li>
            <li><strong>Đồng ý của phụ huynh:</strong> Cần sự đồng ý rõ ràng từ cha mẹ/người giám hộ</li>
            <li><strong>Giới hạn thu thập:</strong> Chỉ thu thập dữ liệu tối thiểu cần thiết</li>
            <li><strong>Không quảng cáo:</strong> Không sử dụng dữ liệu trẻ em cho mục đích quảng cáo</li>
            <li><strong>Kiểm soát phụ huynh:</strong> Cung cấp công cụ kiểm soát cho phụ huynh</li>
          </ul>

          <h3>17.2 COPPA Compliance</h3>
          <p>
            Chúng tôi tuân thủ nghiêm ngặt Children's Online Privacy Protection Act (COPPA) của Hoa Kỳ và các quy định tương tự trên toàn cầu.
          </p>
        </section>

        <section>
          <h2>18. TÀI LIỆU THAM KHẢO</h2>
          <p>Các tài liệu pháp lý quốc tế được tham khảo:</p>
          <ul>
            <li><a href="https://gdpr.eu/" target="_blank">General Data Protection Regulation (GDPR)</a></li>
            <li><a href="https://oag.ca.gov/privacy/ccpa" target="_blank">California Consumer Privacy Act (CCPA)</a></li>
            <li><a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/" target="_blank">PIPEDA (Canada)</a></li>
            <li><a href="https://www.cnil.fr/en/home" target="_blank">CNIL (France)</a></li>
            <li><a href="https://www.ico.org.uk/" target="_blank">ICO (UK)</a></li>
            <li><a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank">ISO 27001</a></li>
            <li><a href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" target="_blank">COPPA (Children's Online Privacy Protection Act)</a></li>
            <li><a href="https://www.nist.gov/cyberframework" target="_blank">NIST Cybersecurity Framework</a></li>
          </ul>
        </section>


      </div>
    </div>
  );
};

export default Privacy;