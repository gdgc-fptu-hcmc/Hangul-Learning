import React from 'react';
import '../styles/Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>ĐIỀU KHOẢN DỊCH VỤ</h1>
        <p className="last-updated">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        <p><strong>Phiên bản:</strong> 2.0</p>
        <p><strong>Hiệu lực từ:</strong> {new Date().toLocaleDateString('vi-VN')}</p>
        <p><strong>Ngôn ngữ:</strong> Tiếng Việt (Vietnamese)</p>
        <p><strong>Phạm vi áp dụng:</strong> Toàn cầu</p>
        
        <blockquote>
          <p><strong>Lưu ý quan trọng:</strong> Vui lòng đọc kỹ các điều khoản này trước khi sử dụng dịch vụ. Việc sử dụng dịch vụ của chúng tôi có nghĩa là bạn đã đồng ý với tất cả các điều khoản được nêu trong tài liệu này.</p>
        </blockquote>
        
        <section>
          <h2>1. CHẤP NHẬN ĐIỀU KHOẢN</h2>
          <p>
            Bằng cách truy cập, sử dụng hoặc đăng ký tài khoản trên nền tảng Hangul Online (sau đây gọi là "Dịch vụ"), bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý tuân thủ các điều khoản và điều kiện sử dụng này (sau đây gọi là "Điều khoản"). Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng Dịch vụ của chúng tôi.
          </p>
          <p>
            Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam và các quy định quốc tế về thương mại điện tử, bao gồm nhưng không giới hạn bởi:
          </p>
          <ul>
            <li>Luật Giao dịch điện tử 2005 của Việt Nam</li>
            <li>Luật An ninh mạng 2018 của Việt Nam</li>
            <li>GDPR (General Data Protection Regulation) của Liên minh Châu Âu</li>
            <li>CCPA (California Consumer Privacy Act) của Hoa Kỳ</li>
            <li>PIPEDA (Personal Information Protection and Electronic Documents Act) của Canada</li>
          </ul>
        </section>

        <section>
          <h2>2. ĐỊNH NGHĨA</h2>
          <p><strong>"Chúng tôi", "Công ty", "Hangul Online"</strong> có nghĩa là tổ chức cung cấp Dịch vụ.</p>
          <p><strong>"Bạn", "Người dùng", "Khách hàng"</strong> có nghĩa là cá nhân hoặc tổ chức sử dụng Dịch vụ.</p>
          <p><strong>"Dịch vụ"</strong> có nghĩa là nền tảng học tiếng Hàn trực tuyến Hangul Online.</p>
          <p><strong>"Nội dung"</strong> có nghĩa là tất cả thông tin, dữ liệu, văn bản, âm thanh, video, hình ảnh và các tài liệu khác có trên Dịch vụ.</p>
          <p><strong>"Tài khoản"</strong> có nghĩa là tài khoản người dùng được tạo trên Dịch vụ.</p>
        </section>

        <section>
          <h2>3. MÔ TẢ DỊCH VỤ</h2>
          <p>
            Hangul Online là nền tảng giáo dục trực tuyến chuyên cung cấp các khóa học tiếng Hàn, bao gồm:
          </p>
          <ul>
            <li>Khóa học Hangul cơ bản (Hangeul Fundamentals)</li>
            <li>Luyện phát âm tiếng Hàn (Korean Pronunciation)</li>
            <li>Từ vựng tiếng Hàn (Korean Vocabulary)</li>
            <li>Ngữ pháp tiếng Hàn (Korean Grammar)</li>
            <li>Luyện thi TOPIK (Test of Proficiency in Korean)</li>
            <li>Các chứng chỉ hoàn thành khóa học</li>
            <li>Hệ thống đánh giá và theo dõi tiến độ học tập</li>
            <li>Diễn đàn cộng đồng học viên</li>
          </ul>
          <p>
            Dịch vụ được cung cấp 24/7 thông qua internet và có thể được truy cập từ bất kỳ thiết bị nào có kết nối internet.
          </p>
        </section>

        <section>
          <h2>4. ĐIỀU KIỆN SỬ DỤNG</h2>
          <h3>4.1 Độ tuổi và Năng lực</h3>
          <p>
            Bạn phải đủ 13 tuổi trở lên để sử dụng Dịch vụ. Nếu bạn dưới 18 tuổi, bạn cần có sự đồng ý của cha mẹ hoặc người giám hộ hợp pháp. Bạn xác nhận rằng bạn có đủ năng lực pháp lý để tham gia vào thỏa thuận này.
          </p>
          
          <h3>4.2 Đăng ký Tài khoản</h3>
          <p>
            Để sử dụng một số tính năng của Dịch vụ, bạn cần tạo tài khoản. Bạn cam kết:
          </p>
          <ul>
            <li>Cung cấp thông tin chính xác, đầy đủ và cập nhật</li>
            <li>Duy trì tính bảo mật của mật khẩu và tài khoản</li>
            <li>Chịu trách nhiệm cho tất cả hoạt động xảy ra dưới tài khoản của bạn</li>
            <li>Thông báo ngay lập tức về bất kỳ vi phạm bảo mật nào</li>
            <li>Không chia sẻ tài khoản với người khác</li>
          </ul>
        </section>

        <section>
          <h2>5. QUY TẮC SỬ DỤNG</h2>
          <h3>5.1 Hành vi Được phép</h3>
          <p>Bạn được phép:</p>
          <ul>
            <li>Sử dụng Dịch vụ cho mục đích học tập cá nhân</li>
            <li>Tải xuống nội dung cho mục đích học tập cá nhân</li>
            <li>Tham gia thảo luận trong diễn đàn một cách lịch sự</li>
            <li>Báo cáo nội dung vi phạm hoặc hành vi không phù hợp</li>
          </ul>

          <h3>5.2 Hành vi Bị cấm</h3>
          <p>Bạn không được:</p>
          <ul>
            <li>Vi phạm bất kỳ luật hoặc quy định nào</li>
            <li>Gửi spam, thư rác hoặc nội dung không mong muốn</li>
            <li>Xâm phạm quyền sở hữu trí tuệ của người khác</li>
            <li>Phân phối phần mềm độc hại hoặc mã độc</li>
            <li>Thu thập thông tin cá nhân của người dùng khác</li>
            <li>Hack, crack hoặc cố gắng truy cập trái phép vào hệ thống</li>
            <li>Sử dụng bot hoặc công cụ tự động để truy cập Dịch vụ</li>
            <li>Đăng nội dung khiêu dâm, bạo lực hoặc gây thù hận</li>
            <li>Giả mạo danh tính hoặc cung cấp thông tin sai sự thật</li>
          </ul>
        </section>

        <section>
          <h2>6. SỞ HỮU TRÍ TUỆ</h2>
          <h3>6.1 Quyền sở hữu của Hangul Online</h3>
          <p>
            Tất cả nội dung trên Dịch vụ, bao gồm nhưng không giới hạn bởi văn bản, đồ họa, logo, hình ảnh, âm thanh, video, phần mềm, mã nguồn, thiết kế, và các tài liệu khác, đều thuộc sở hữu của Hangul Online hoặc được cấp phép sử dụng. Nội dung này được bảo vệ bởi luật bản quyền quốc tế và các luật sở hữu trí tuệ khác.
          </p>

          <h3>6.2 Giấy phép Sử dụng</h3>
          <p>
            Chúng tôi cấp cho bạn giấy phép không độc quyền, không thể chuyển nhượng để sử dụng Dịch vụ cho mục đích cá nhân, phi thương mại. Giấy phép này có thể bị chấm dứt bất kỳ lúc nào mà không cần thông báo trước.
          </p>

          <h3>6.3 Nội dung của Người dùng</h3>
          <p>
            Bằng cách đăng tải nội dung lên Dịch vụ, bạn cấp cho chúng tôi giấy phép không độc quyền, miễn phí để sử dụng, sao chép, phân phối và hiển thị nội dung đó trong khuôn khổ Dịch vụ.
          </p>
        </section>

        <section>
          <h2>7. THANH TOÁN VÀ HOÀN TIỀN</h2>
          <h3>7.1 Phí dịch vụ</h3>
          <p>
            Một số tính năng của Dịch vụ có thể yêu cầu thanh toán. Tất cả giá cả được hiển thị rõ ràng và bao gồm thuế VAT (nếu có). Chúng tôi sử dụng các phương thức thanh toán an toàn và được mã hóa.
          </p>

          <h3>7.2 Chính sách Hoàn tiền</h3>
          <p>
            Bạn có thể yêu cầu hoàn tiền trong vòng 7 ngày kể từ ngày mua nếu chưa sử dụng dịch vụ. Hoàn tiền sẽ được thực hiện qua phương thức thanh toán ban đầu trong vòng 5-10 ngày làm việc.
          </p>

          <h3>7.3 Thay đổi giá</h3>
          <p>
            Chúng tôi có quyền thay đổi giá dịch vụ bất kỳ lúc nào. Thay đổi giá sẽ có hiệu lực sau 30 ngày kể từ ngày thông báo.
          </p>
        </section>

        <section>
          <h2>8. BẢO MẬT VÀ QUYỀN RIÊNG TƯ</h2>
          <p>
            Việc thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn được điều chỉnh bởi <a href="/privacy" target="_blank">Chính sách Bảo mật</a> của chúng tôi. Bằng cách sử dụng Dịch vụ, bạn đồng ý với việc thu thập và sử dụng thông tin theo Chính sách Bảo mật.
          </p>
          <p>
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn theo các tiêu chuẩn quốc tế về bảo mật dữ liệu, bao gồm ISO 27001 và các quy định của GDPR.
          </p>
        </section>

        <section>
          <h2>9. CHẤM DỨT DỊCH VỤ</h2>
          <h3>9.1 Chấm dứt bởi Người dùng</h3>
          <p>
            Bạn có thể chấm dứt tài khoản của mình bất kỳ lúc nào bằng cách liên hệ với chúng tôi hoặc sử dụng tính năng xóa tài khoản trong cài đặt.
          </p>

          <h3>9.2 Chấm dứt bởi Hangul Online</h3>
          <p>
            Chúng tôi có quyền chấm dứt hoặc tạm dừng tài khoản của bạn ngay lập tức, mà không cần thông báo trước, nếu bạn vi phạm các Điều khoản này hoặc vì bất kỳ lý do nào khác theo quyết định của chúng tôi.
          </p>

          <h3>9.3 Hậu quả của việc Chấm dứt</h3>
          <p>
            Khi tài khoản bị chấm dứt, quyền truy cập của bạn vào Dịch vụ sẽ bị ngừng ngay lập tức và tất cả dữ liệu có thể bị xóa vĩnh viễn.
          </p>
        </section>

        <section>
          <h2>10. TỪ CHỐI TRÁCH NHIỆM</h2>
          <p>
            Dịch vụ được cung cấp "như hiện tại" và "như có sẵn". Chúng tôi không đảm bảo rằng:
          </p>
          <ul>
            <li>Dịch vụ sẽ không bị gián đoạn hoặc không có lỗi</li>
            <li>Kết quả học tập sẽ đạt được như mong đợi</li>
            <li>Dịch vụ sẽ tương thích với tất cả thiết bị</li>
            <li>Nội dung sẽ luôn chính xác và cập nhật</li>
          </ul>
          <p>
            Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt hoặc hậu quả nào phát sinh từ việc sử dụng Dịch vụ.
          </p>
        </section>

        <section>
          <h2>11. GIỚI HẠN TRÁCH NHIỆM</h2>
          <p>
            Trong phạm vi tối đa được pháp luật cho phép, trách nhiệm tổng thể của chúng tôi đối với bạn không vượt quá số tiền bạn đã thanh toán cho Dịch vụ trong 12 tháng trước khi xảy ra sự kiện gây ra thiệt hại.
          </p>
        </section>

        <section>
          <h2>12. BỒI THƯỜNG</h2>
          <p>
            Bạn đồng ý bồi thường và bảo vệ chúng tôi khỏi mọi khiếu nại, thiệt hại, tổn thất, chi phí và phí tổn (bao gồm phí luật sư) phát sinh từ việc bạn vi phạm các Điều khoản này hoặc việc sử dụng Dịch vụ của bạn.
          </p>
        </section>

        <section>
          <h2>13. LUẬT ÁP DỤNG VÀ GIẢI QUYẾT TRANH CHẤP</h2>
          <h3>13.1 Luật áp dụng</h3>
          <p>
            Các Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến các Điều khoản này sẽ được giải quyết theo pháp luật Việt Nam.
          </p>

          <h3>13.2 Giải quyết tranh chấp</h3>
          <p>
            Trước khi khởi kiện, các bên sẽ cố gắng giải quyết tranh chấp thông qua thương lượng. Nếu không thể thương lượng được, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại Việt Nam.
          </p>

          <h3>13.3 Trọng tài</h3>
          <p>
            Đối với các tranh chấp có giá trị dưới 100 triệu đồng, các bên có thể thỏa thuận giải quyết bằng trọng tài theo quy định của Luật Trọng tài thương mại 2010.
          </p>
        </section>

        <section>
          <h2>14. THAY ĐỔI ĐIỀU KHOẢN</h2>
          <p>
            Chúng tôi có quyền sửa đổi các Điều khoản này bất kỳ lúc nào. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn qua email hoặc thông báo trên Dịch vụ ít nhất 30 ngày trước khi thay đổi có hiệu lực.
          </p>
          <p>
            Việc tiếp tục sử dụng Dịch vụ sau khi có thay đổi được coi là chấp nhận các điều khoản mới. Nếu bạn không đồng ý với các thay đổi, bạn có thể chấm dứt việc sử dụng Dịch vụ.
          </p>
        </section>

        <section>
          <h2>15. ĐIỀU KHOẢN KHÁC</h2>
          <h3>15.1 Tính toàn vẹn của thỏa thuận</h3>
          <p>
            Các Điều khoản này, cùng với Chính sách Bảo mật, tạo thành toàn bộ thỏa thuận giữa bạn và chúng tôi về việc sử dụng Dịch vụ.
          </p>

          <h3>15.2 Tính khả thi</h3>
          <p>
            Nếu bất kỳ điều khoản nào trong Điều khoản này bị coi là không hợp lệ hoặc không thể thực thi, các điều khoản còn lại vẫn có hiệu lực đầy đủ.
          </p>

          <h3>15.3 Không từ bỏ quyền</h3>
          <p>
            Việc chúng tôi không thực thi bất kỳ quyền nào trong Điều khoản này không được coi là từ bỏ quyền đó.
          </p>
        </section>

        <section>
          <h2>16. LIÊN HỆ</h2>
          <p>
            Nếu bạn có câu hỏi về các Điều khoản Dịch vụ này, vui lòng liên hệ với chúng tôi:
          </p>
          <p>
            <strong>Hangul Online</strong><br />
            Email: nguyenductuan11012003@gmail.com<br />
            Địa chỉ: Việt Nam<br />
            Website: <a href="https://hangul.online" target="_blank">https://hangul.online</a>
          </p>
          <p>
            <strong>Thời gian phản hồi:</strong> Chúng tôi sẽ phản hồi các yêu cầu trong vòng 48 giờ làm việc.
          </p>
        </section>

        <section>
          <h2>17. DỊCH VỤ BỔ SUNG VÀ TÍNH NĂNG MỚI</h2>
          <h3>17.1 Cập nhật Dịch vụ</h3>
          <p>
            Chúng tôi liên tục phát triển và cải thiện Dịch vụ để mang lại trải nghiệm học tập tốt nhất cho người dùng. Các tính năng mới có thể được thêm vào định kỳ, bao gồm:
          </p>
          <ul>
            <li><strong>Hệ thống AI học tập:</strong> Trí tuệ nhân tạo cá nhân hóa lộ trình học</li>
            <li><strong>Thực tế ảo (VR):</strong> Môi trường học tập 3D tương tác</li>
            <li><strong>Gia sư ảo:</strong> Chatbot hỗ trợ học tập 24/7</li>
            <li><strong>Học tập xã hội:</strong> Kết nối với học viên khác trên toàn cầu</li>
            <li><strong>Ứng dụng di động:</strong> Học mọi lúc mọi nơi</li>
          </ul>

          <h3>17.2 Beta Testing</h3>
          <p>
            Một số tính năng mới có thể được cung cấp dưới dạng beta để người dùng thử nghiệm. Bằng cách tham gia beta testing, bạn đồng ý:
          </p>
          <ul>
            <li>Chấp nhận rủi ro về lỗi kỹ thuật có thể xảy ra</li>
            <li>Cung cấp phản hồi để cải thiện dịch vụ</li>
            <li>Không chia sẻ thông tin về tính năng beta với bên thứ ba</li>
            <li>Chấp nhận rằng tính năng có thể bị thay đổi hoặc loại bỏ</li>
          </ul>
        </section>

        <section>
          <h2>18. HỖ TRỢ KỸ THUẬT VÀ DỊCH VỤ KHÁCH HÀNG</h2>
          <h3>18.1 Thời gian Hỗ trợ</h3>
          <p>
            Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 thông qua các kênh sau:
          </p>
          <ul>
            <li><strong>Email:</strong> support@hangul.online (phản hồi trong 2-4 giờ)</li>
            <li><strong>FAQ:</strong> Câu hỏi thường gặp chi tiết</li>
            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61578024878281" target="_blank">https://www.facebook.com/profile.php?id=61578024878281</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@hangul.online" target="_blank">https://www.youtube.com/@hangul.online</a></li>
          </ul>

          <h3>18.2 Mức độ Hỗ trợ</h3>
          <table>
            <thead>
              <tr>
                <th>Loại tài khoản</th>
                <th>Thời gian phản hồi</th>
                <th>Kênh hỗ trợ</th>
                <th>Ưu tiên</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Miễn phí</td>
                <td>24-48 giờ</td>
                <td>Email, FAQ</td>
                <td>Thấp</td>
              </tr>
              <tr>
                <td>Premium</td>
                <td>4-8 giờ</td>
                <td>Email, Live Chat</td>
                <td>Cao</td>
              </tr>
              <tr>
                <td>VIP</td>
                <td>1-2 giờ</td>
                <td>Tất cả kênh</td>
                <td>Cao nhất</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>19. TÀI LIỆU THAM KHẢO</h2>
          <p>Các tài liệu pháp lý quốc tế được tham khảo:</p>
          <ul>
            <li><a href="https://gdpr.eu/" target="_blank">General Data Protection Regulation (GDPR)</a></li>
            <li><a href="https://oag.ca.gov/privacy/ccpa" target="_blank">California Consumer Privacy Act (CCPA)</a></li>
            <li><a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/" target="_blank">PIPEDA (Canada)</a></li>
            <li><a href="https://www.wto.org/english/docs_e/legal_e/legal_e.htm" target="_blank">WTO Legal Texts</a></li>
            <li><a href="https://www.uncitral.org/en/texts/ecommerce" target="_blank">UNCITRAL Model Law on Electronic Commerce</a></li>
            <li><a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank">ISO 27001 - Information Security Management</a></li>
            <li><a href="https://www.pcisecuritystandards.org/" target="_blank">PCI DSS - Payment Card Industry Data Security Standard</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;