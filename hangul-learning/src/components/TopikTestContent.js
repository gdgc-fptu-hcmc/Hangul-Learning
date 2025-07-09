import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import TopikAudioPlayer from './TopikAudioPlayer';
import TopikImageViewer from './TopikImageViewer';
import { TOPIK_91 } from '../data/topik91';
import { TOPIK_83 } from '../data/topik83';
import { TOPIK_64 } from '../data/topik64';
import { TOPIK_60 } from '../data/topik60';
import { TOPIK_52 } from '../data/topik52';
import { TOPIK_47 } from '../data/topik47';
import { TOPIK_41 } from '../data/topik41';
import { TOPIK_37 } from '../data/topik37';
import {TOPIK_36} from '../data/topik36';
import {TOPIK_35} from '../data/topik35';

// Function to get the test content based on testId
const TopikExamLayout = ({ testId, content, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 phút tính bằng giây
  const contentRef = useRef(null);

  const totalPages = Math.ceil(content.questions.length / questionsPerPage);

  // Scroll to the top of the content
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  // Modified setCurrentPage function to scroll to top after page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    
    // Scroll to top of content area and window
    setTimeout(() => {
      // Scroll the content container
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
      
      // Also scroll the window to ensure we're at the top
      window.scrollTo(0, 0);
      
      // Try with document.body as well for maximum compatibility
      if (document.body) {
        document.body.scrollTop = 0;
      }
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
    }, 50);
  };

  const handleSubmit = useCallback(() => {
    alert("Đã nộp bài!");
    console.log("Submitted Answers:", selectedAnswers);
  }, [selectedAnswers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleSubmit]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    
    // If clicking an answer in a different section than current page,
    // navigate to the corresponding page
    const currentStartQuestion = (currentPage - 1) * questionsPerPage + 1;
    const currentEndQuestion = Math.min(currentPage * questionsPerPage, content.questions.length);
    
    if (questionId < currentStartQuestion || questionId > currentEndQuestion) {
      // Calculate which page contains this question
      const targetPage = Math.ceil(questionId / questionsPerPage);
      handlePageChange(targetPage);
    }
  };

  const getCurrentQuestions = () => {
    const start = (currentPage - 1) * questionsPerPage;
    return content.questions.slice(start, start + questionsPerPage);
  };

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowImageViewer(true);
  };

  const isListeningSection = currentPage <= Math.ceil(30 / questionsPerPage);

  const allQuestions = content.questions.map(q => q.number);

  // Scroll to top when content loads - with increased timeout and more robust selector
  useEffect(() => {
    if (content) {
      // Use longer timeout to ensure DOM is fully rendered
      setTimeout(() => {
        // Try multiple selectors to ensure we find the right element
        const contentContainer = contentRef.current || 
                                document.querySelector('.content-scroll-container') || 
                                document.querySelector('.overflow-y-auto');
        if (contentContainer) {
          contentContainer.scrollTop = 0;
          
          // Also scroll the window to the top in case there's any outer scroll
          window.scrollTo(0, 0);
        }
      }, 300); // Increased timeout for better reliability
    }
  }, [content]);

  // Scroll to top when page changes
  useEffect(() => {
    scrollToTop();
    
    // Also scroll the window and document
    window.scrollTo(0, 0);
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
    
    // Try to scroll the main container
    const container = document.querySelector('.topik-exam-container');
    if (container) container.scrollTop = 0;
    
  }, [currentPage]);

  // Scroll to top when a test is first loaded
  useEffect(() => {
    // Scroll window to top immediately when component mounts
    window.scrollTo(0, 0);
    
    // Also do this after content is loaded, with a delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-white topik-exam-container" style={{scrollTop: 0}}>
      {/* Header */}
      <div className="bg-primary text-white p-4 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">
            {testId} - TOPIK I Mock Test
          </h2>
          <div className="bg-white text-primary px-4 py-2 rounded-lg font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* Left Side - Test Content */}
        <div className="w-2/3 flex flex-col p-6 border-r">
          {/* Section Title */}
          <div className="mb-6 flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-700">
              {isListeningSection ? '듣기 (Listening)' : '읽기 (Reading)'}
            </h3>
          </div>

          {/* Audio Player for Listening Section */}
          {isListeningSection && content.audioUrl && (
            <div className="sticky top-0 bg-white z-10 mb-6 py-4 border rounded-lg shadow-sm w-full">
              <TopikAudioPlayer audioUrl={content.audioUrl} />
            </div>
          )}

          {/* NEW: Container for questions and navigation that handles scrolling */}
          <div ref={contentRef} className="flex flex-col flex-grow overflow-y-auto pr-2 -mr-2 content-scroll-container">
            {/* Questions */}
            <div className="space-y-8 pb-4 flex-grow">
              {getCurrentQuestions().map((question) => (
                <div key={question.number} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  
                  {/* Question Content with Instruction inline */}
                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <span className="text-lg font-medium text-gray-800 mr-2">{question.number}.</span>
                      {question.instruction ? (
                        <div className="text-gray-700 font-medium flex-grow">
                          <p className="text-lg font-medium text-gray-800 inline">{question.instruction.split('\n')[0]}</p>
                          {question.instruction.split('\n').slice(1).map((line, index) => (
                            <p key={index} className="text-primary mt-1">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        // Fallback if no instruction, just display question text
                        <p className="text-lg font-medium text-gray-800 flex-grow">
                          {question.text}
                        </p>
                      )}
                    </div>
                    {/* Display question text only if there's instruction and question text is different */}
                    {question.instruction && question.text && !question.instruction.includes(question.text) && (
                      <p className="text-gray-800 mb-2 ml-7"> 
                        {question.text}
                      </p>
                    )}
                    {question.imageUrl && (
                      <div className="mb-4">
                        <img 
                          src={question.imageUrl} 
                          alt={`Question ${question.number}`}
                          className="max-w-full h-auto rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(question.imageUrl)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    {['A', 'B', 'C', 'D'].map((option) => (
                      <div
                        key={option}
                        className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                          selectedAnswers[question.number] === option
                            ? 'bg-primary-light border-primary text-primary'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswerSelect(question.number, option)}
                      >
                        {option}. {question.options[option]}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Section Quick Navigation */}
            <div className="mb-4 mt-8 flex justify-center items-center bg-white py-2 border-t flex-shrink-0">
              <div className="flex space-x-4">
                <button
                  onClick={() => handlePageChange(1)} 
                  className={`px-4 py-2 rounded-md font-medium ${
                    isListeningSection 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Phần Nghe (1-30)
                </button>
                <button
                  onClick={() => handlePageChange(Math.ceil(30 / questionsPerPage) + 1)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    !isListeningSection 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Phần Đọc (31-70)
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mb-0 flex justify-between items-center bg-white py-4 border-t flex-shrink-0">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-gray-600 disabled:text-gray-400"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <span className="text-gray-600">
                Trang {currentPage} / {totalPages}
              </span>
              
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-gray-600 disabled:text-gray-400"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Answer Sheet */}
        <div className="w-1/3 p-6 bg-gray-50 overflow-y-auto flex-shrink-0">
          <div className="sticky top-0 pt-0 pb-4 bg-gray-50 z-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Phiếu Trả Lời</h3>
            
            {/* Quick Section Navigation */}
            <div className="flex space-x-2 mb-6">
              <button 
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition ${
                  isListeningSection ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                onClick={() => handlePageChange(1)}
              >
                Nghe (1-30)
              </button>
              <button 
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition ${
                  !isListeningSection ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                onClick={() => handlePageChange(Math.ceil(30 / questionsPerPage) + 1)}
              >
                Đọc (31-70)
              </button>
            </div>
            
            {/* Listening Section */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-600 mb-4">Phần Nghe (1-30)</h4>
              <div className="grid grid-cols-5 gap-2">
                {allQuestions.slice(0, 30).map((num) => (
                  <div
                    key={num}
                    className="relative group"
                  >
                    <div className="text-center mb-1 text-sm text-gray-600">{num}</div>
                    <div className="grid grid-cols-2 gap-1">
                      {['A', 'B', 'C', 'D'].map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswerSelect(num, option)}
                          className={`w-full aspect-square rounded-md text-xs font-medium
                            ${selectedAnswers[num] === option
                              ? 'bg-primary text-white'
                              : 'bg-white hover:bg-gray-100 text-gray-700'
                            } border border-gray-200`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading Section */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-600 mb-4">Phần Đọc (31-70)</h4>
              <div className="grid grid-cols-5 gap-2">
                {allQuestions.slice(30).map((num) => (
                  <div
                    key={num}
                    className="relative group"
                  >
                    <div className="text-center mb-1 text-sm text-gray-600">{num}</div>
                    <div className="grid grid-cols-2 gap-1">
                      {['A', 'B', 'C', 'D'].map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswerSelect(num, option)}
                          className={`w-full aspect-square rounded-md text-xs font-medium
                            ${selectedAnswers[num] === option
                              ? 'bg-primary text-white'
                              : 'bg-white hover:bg-gray-100 text-gray-700'
                            } border border-gray-200`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Nộp Bài
            </button>

            {/* Question Navigation Legend */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-600 mb-4">Chú Thích</h4>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                  <span>Đã trả lời</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border border-gray-200 rounded-sm mr-2"></div>
                  <span>Chưa trả lời</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer */}
      {showImageViewer && (
        <TopikImageViewer
          images={[currentImage]}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </div>
  );
};

const TopikTestContent = ({ testId, onClose }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      let testContent = null;
      switch (testId) {
        case '91st':
          testContent = TOPIK_91;
          break;
        case '83rd':
          testContent = TOPIK_83;
          break;
        case '64th':
          testContent = TOPIK_64;
          break;
        case '60th':
          testContent = TOPIK_60;
          break;
        case '52nd':
          testContent = TOPIK_52;
          break;
        case '47th':
          testContent = TOPIK_47;
          break;
        case '41st':
          testContent = TOPIK_41;
          break;
        case '37th':
          testContent = TOPIK_37;
          break;
        case '36th':
          testContent = TOPIK_36;
          break;
        case '35th':
          testContent = TOPIK_35;
          break;
        default:
          throw new Error('Bài thi này chưa được cập nhật');
      }

      if (!testContent) {
        throw new Error('Không tìm thấy nội dung bài thi');
      }

      setContent(testContent);
    } catch (err) {
      console.error('Lỗi khi tải bài thi:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [testId]);

  // Global scroll to top when TopikTestContent component mounts
  useEffect(() => {
    // Force scroll to top when the component is mounted
    window.scrollTo(0, 0);
    
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
    
    // Also attach a MutationObserver to ensure scrolling happens after any DOM changes
    const observer = new MutationObserver(() => {
      window.scrollTo(0, 0);
    });
    
    observer.observe(document.body, { 
      childList: true,
      subtree: true 
    });
    
    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
          <p className="text-gray-600">Đang tải nội dung bài thi...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">Không thể tải bài thi</h3>
            <p className="text-sm">{error}</p>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  if (!content || !content.questions || content.questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-yellow-500 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">Không có nội dung</h3>
            <p className="text-sm">Không tìm thấy nội dung bài thi hoặc định dạng không hợp lệ</p>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return <TopikExamLayout testId={testId} content={content} onClose={onClose} />;
};

// Force the page to scroll to top when the module loads
if (typeof window !== 'undefined') {
  window.scrollTo(0, 0);
}

export default TopikTestContent;