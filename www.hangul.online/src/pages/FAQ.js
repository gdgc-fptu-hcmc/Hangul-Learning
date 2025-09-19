import React, { useState } from 'react';
import '../styles/Page.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Làm thế nào để bắt đầu học tiếng Hàn?",
      answer: "Bạn có thể bắt đầu bằng cách đăng ký tài khoản miễn phí và chọn khóa học phù hợp với trình độ của mình. Chúng tôi khuyến nghị bắt đầu với khóa 'Hangul Cơ bản' nếu bạn là người mới bắt đầu."
    },
    {
      question: "Tôi có thể học offline không?",
      answer: "Hiện tại chúng tôi chỉ cung cấp các khóa học online. Tuy nhiên, bạn có thể tải xuống tài liệu học tập để xem offline."
    },
    {
      question: "Làm thế nào để thanh toán khóa học?",
      answer: "Chúng tôi chấp nhận thanh toán qua thẻ tín dụng, chuyển khoản ngân hàng, và ví điện tử. Tất cả giao dịch đều được bảo mật và mã hóa."
    },
    {
      question: "Tôi có thể hoàn tiền không?",
      answer: "Có, bạn có thể yêu cầu hoàn tiền trong vòng 7 ngày kể từ ngày mua nếu chưa sử dụng dịch vụ. Hoàn tiền sẽ được thực hiện qua phương thức thanh toán ban đầu."
    },
    {
      question: "Khóa học có chứng chỉ không?",
      answer: "Có, sau khi hoàn thành khóa học, bạn sẽ nhận được chứng chỉ hoàn thành có thể tải xuống và in ra."
    },
    {
      question: "Tôi có thể truy cập khóa học trên điện thoại không?",
      answer: "Có, website của chúng tôi được tối ưu hóa cho mọi thiết bị. Bạn có thể học trên điện thoại, tablet, hoặc máy tính."
    },
    {
      question: "Làm thế nào để liên hệ hỗ trợ?",
      answer: "Bạn có thể liên hệ chúng tôi qua email support@hangul.online, live chat trên website, hoặc hotline +84-xxx-xxx-xxx."
    },
    {
      question: "Tôi có thể học bao nhiêu khóa học cùng lúc?",
      answer: "Bạn có thể đăng ký và học nhiều khóa học cùng lúc. Tuy nhiên, chúng tôi khuyến nghị tập trung vào 1-2 khóa học để đạt hiệu quả tốt nhất."
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Câu hỏi Thường gặp</h1>
        <p>Tìm câu trả lời cho những thắc mắc phổ biến</p>
      </div>
      
      <div className="page-content">
        <section className="faq-section">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleItem(index)}
              >
                <h3>{item.question}</h3>
                <span className={`faq-icon ${openItems[index] ? 'open' : ''}`}>
                  +
                </span>
              </div>
              {openItems[index] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="contact-section">
          <h2>Không tìm thấy câu trả lời?</h2>
          <p>Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, hãy liên hệ với chúng tôi:</p>
          <div className="contact-buttons">
            <a href="/help" className="btn btn-primary">Trung tâm trợ giúp</a>
            <a href="mailto:support@hangul.online" className="btn btn-secondary">Gửi email</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
