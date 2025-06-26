import React, { useState, useMemo, useEffect } from 'react';
import SEO from '../components/SEO';
import { Book, HelpCircle, Repeat, Award, ChevronLeft } from 'lucide-react';

function Exercises() {
  // --- Data for all exercises ---
  const exerciseData = useMemo(() => ({
    vocabulary: {
      title: 'Từ vựng cơ bản',
      level: 'Sơ cấp',
      category: 'Từ vựng',
      description: 'Kiểm tra từ vựng thiết yếu trong giao tiếp hàng ngày',
      questions: [
        {
          situation: 'Bạn muốn chào hỏi một người lạ một cách lịch sự',
          question: 'Bạn sẽ nói gì?',
          options: [
            '안녕! (annyeong)',
            '안녕하세요 (annyeonghaseyo)',
            '여보세요 (yeoboseyo)',
            '잘 가 (jal ga)'
          ],
          correct: 1,
          explanation: '안녕하세요 là cách chào lịch sự dùng với người lạ. 안녕 chỉ dùng với bạn bè thân. 여보세요 dùng khi nghe điện thoại. 잘 가 có nghĩa là "đi nhé".'
        },
        {
          situation: 'Bạn muốn cảm ơn ai đó một cách trang trọng',
          question: 'Bạn sẽ nói gì?',
          options: [
            '고마워 (gomawo)',
            '감사해요 (gamsahaeyo)', 
            '감사합니다 (gamsahamnida)',
            '미안해 (mianhae)'
          ],
          correct: 2,
          explanation: '감사합니다 là cách cảm ơn trang trọng nhất. 고마워 và 감사해요 thân thiện hơn. 미안해 có nghĩa là "xin lỗi".'
        },
        {
          situation: 'Từ: 친구',
          question: 'Bạn chọn nghĩa tiếng Việt nào cho "친구"?',
          options: ['Bạn bè', 'Thời tiết', 'Du lịch', 'Sinh viên'],
          correct: 0,
          explanation: '친구 = Bạn bè.'
        },
        {
          situation: 'Từ: 음식',
          question: '"음식" nghĩa là gì?',
          options: ['Âm nhạc', 'Đồ ăn', 'Công ty', 'Gia đình'],
          correct: 1,
          explanation: '음식 = Đồ ăn.'
        },
        {
          situation: 'Từ: 시간',
          question: 'Nghĩa đúng của "시간"?',
          options: ['Tiền', 'Thời gian', 'Trường học', 'Sách'],
          correct: 1,
          explanation: '시간 = Thời gian.'
        },
        {
          situation: 'Từ: 돈',
          question: '"돈" có nghĩa là?',
          options: ['Tiền', 'Nước', 'Nhà', 'Công việc'],
          correct: 0,
          explanation: '돈 = Tiền.'
        },
        {
          situation: 'Từ: 책',
          question: 'Nghĩa tiếng Việt của "책" là?',
          options: ['Sách', 'Thức ăn', 'Bạn', 'Tiền'],
          correct: 0,
          explanation: '책 = Sách.'
        },
        {
          situation: 'Từ: 물',
          question: '"물" nghĩa là gì?',
          options: ['Nước', 'Nhà', 'Âm nhạc', 'Công việc'],
          correct: 0,
          explanation: '물 = Nước.'
        }
      ]
    },
    grammar: {
      title: 'Ngữ pháp cơ bản',
      level: 'Sơ cấp',
      category: 'Ngữ pháp',
      description: 'Luyện tập các cấu trúc ngữ pháp quan trọng',
      questions: [
        {
          situation: 'Bạn muốn hỏi "Cái này là gì?"',
          question: 'Câu nào đúng?',
          options: [
            '이것은 뭐예요?',
            '이것이 뭐예요?',
            '이거는 뭐예요?',
            'Tất cả đều đúng'
          ],
          correct: 3,
          explanation: 'Cả ba cách đều đúng. 이것은/이것이 trang trọng, 이거는 thân mật. 은/는 là trợ từ chủ đề, 이/가 là trợ từ chủ ngữ.'
        },
        {
          situation: 'Bạn muốn nói "Tôi là sinh viên"',
          question: 'Câu nào tự nhiên nhất?',
          options: [
            '나는 학생이에요',
            '저는 학생입니다',
            '나 학생이야',
            '저 학생이에요'
          ],
          correct: 1,
          explanation: '저는 학생입니다 là cách lịch sự và thường dùng nhất khi giới thiệu bản thân. 나는/나 thân mật hơn.'
        },
        {
          situation: 'Bạn muốn nói "Tôi là người Việt Nam" (trang trọng).',
          question: 'Câu nào đúng?',
          options: [
            '저는 베트남 사람입니다',
            '나는 베트남 사람이야',
            '저는 베트남 사람이다',
            '나는 베트남 사람입니다'
          ],
          correct: 0,
          explanation: 'Danh từ + 입니다 dùng giới thiệu trang trọng: 저는 베트남 사람입니다.'
        },
        {
          situation: 'Muốn nối 2 danh từ "사과" và "바나나" bằng "và" trong câu.',
          question: 'Cấu trúc nào đúng?',
          options: ['사과 하고 바나나', '사과와 바나나', '사과에 바나나', '사과를 바나나'],
          correct: 1,
          explanation: '와/과 nối hai danh từ: 사과와 바나나.'
        },
        {
          situation: 'Bạn muốn phủ định: "Không phải giáo viên" (trang trọng).',
          question: 'Câu đúng là?',
          options: ['선생님이 아닙니다', '선생님이 아니다', '선생님 아닙니까', '선생님이 아니에요?'],
          correct: 0,
          explanation: 'Cấu trúc phủ định: N + 이/가 아닙니다.'
        },
        {
          situation: 'Bạn muốn nói "Đây là sách" (trang trọng).',
          question: 'Câu nào đúng?',
          options: ['이것은 책입니다', '이것은 책이에요', '이거 책이야', '책은 이것입니다'],
          correct: 0,
          explanation: 'Cấu trúc xác nhận N입니다: 이것은 책입니다.'
        },
        {
          situation: 'Bạn muốn hỏi "Ai đã đến?" trong văn nói thân mật.',
          question: 'Câu Hàn nào đúng?',
          options: ['누가 왔어요?', '누가 옵니다?', '누가 왔다?', '누구 왔습니까?'],
          correct: 0,
          explanation: 'Thân mật-lịch sự: V/A-았/었어요? => 누가 왔어요?'
        }
      ]
    },
    reading: {
      title: 'Đọc hiểu Sơ cấp',
      level: 'Sơ cấp',
      category: 'Đọc hiểu',
      description: 'Đọc và hiểu các đoạn văn tiếng Hàn đơn giản',
      questions: [
        {
          situation: 'Đọc đoạn văn: "저는 김민수입니다. 한국 사람이에요. 서울에 살아요. 대학생이에요."',
          question: 'Thông tin nào đúng về Kim Min-su?',
          options: [
            'Anh ấy là người Nhật',
            'Anh ấy sống ở Busan',
            'Anh ấy là sinh viên đại học',
            'Anh ấy làm việc tại công ty'
          ],
          correct: 2,
          explanation: 'Trong đoạn văn có "대학생이에요" nghĩa là "tôi là sinh viên đại học". 한국 사람 = người Hàn, 서울에 살아요 = sống ở Seoul.'
        }
      ]
    },
    vocab_sc1: {
      title: 'Từ vựng Sơ cấp 1',
      level: 'Sơ cấp',
      category: 'Từ vựng',
      description: 'Ôn 10 từ căn bản theo sách Tiếng Hàn Tổng Hợp 1.',
      questions: [
        { situation: '"안녕하세요"', question: 'Nghĩa tiếng Việt?', options: ['Xin chào', 'Cảm ơn', 'Tạm biệt', 'Xin lỗi'], correct: 0, explanation: '안녕하세요 = Xin chào.' },
        { situation: '"고맙습니다"', question: 'Nghĩa tiếng Việt?', options: ['Xin lỗi', 'Cảm ơn', 'Nhà', 'Trường'], correct: 1, explanation: '고맙습니다 = Cảm ơn (trang trọng).' },
        { situation: '"학교"', question: 'Nghĩa tiếng Việt?', options: ['Công ty', 'Gia đình', 'Trường học', 'Bạn'], correct: 2, explanation: '학교 = Trường học.' },
        { situation: '"집"', question: 'Nghĩa?', options: ['Nhà', 'Sách', 'Thời gian', 'Tiền'], correct: 0, explanation: '집 = Nhà.' },
        { situation: '"물"', question: 'Nghĩa?', options: ['Nước', 'Cơm', 'Bạn', 'Du lịch'], correct: 0, explanation: '물 = Nước.' },
        { situation: '"밥"', question: 'Nghĩa?', options: ['Cơm', 'Nhạc', 'Thời tiết', 'Tiền'], correct: 0, explanation: '밥 = Cơm.' },
        { situation: '"친구"', question: 'Nghĩa?', options: ['Bạn bè', 'Gia đình', 'Du lịch', 'Thời gian'], correct: 0, explanation: '친구 = Bạn bè.' },
        { situation: '"책"', question: 'Nghĩa?', options: ['Sách', 'Công việc', 'Tiền', 'Nước'], correct: 0, explanation: '책 = Sách.' },
        { situation: '"시간"', question: 'Nghĩa?', options: ['Thời gian', 'Tiền', 'Nhà', 'Công ty'], correct: 0, explanation: '시간 = Thời gian.' },
        { situation: '"돈"', question: 'Nghĩa?', options: ['Tiền', 'Đồ ăn', 'Trường', 'Sách'], correct: 0, explanation: '돈 = Tiền.' }
      ]
    },
  }), []);

  const [selectedExerciseId, setSelectedExerciseId] = useState('vocabulary');
  const [gameState, setGameState] = useState('idle'); // 'idle', 'active', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const selectedExercise = exerciseData[selectedExerciseId];
  const currentQuestion = selectedExercise.questions[currentQuestionIndex];
  
  // Reset state when exercise changes
  useEffect(() => {
    setGameState('idle');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, [selectedExerciseId]);

  const handleAnswerSelect = (selectedIndex) => {
    if (answers[currentQuestionIndex] !== undefined) return; // Prevent changing answer
    const isCorrect = selectedIndex === currentQuestion.correct;
    setAnswers([...answers, { question: currentQuestion.question, selected: selectedIndex, correct: currentQuestion.correct, isCorrect }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedExercise.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('results');
    }
  };

  const resetExercise = () => {
    setGameState('idle');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getScore = () => answers.filter(a => a.isCorrect).length;
  const scorePercentage = (getScore() / selectedExercise.questions.length) * 100;

  const exerciseCategories = useMemo(() => {
    const categories = {};
    Object.keys(exerciseData).forEach(id => {
      const exercise = exerciseData[id];
      if (!categories[exercise.category]) {
        categories[exercise.category] = [];
      }
      categories[exercise.category].push({ id, ...exercise });
    });
    return categories;
  }, [exerciseData]);

  // --- Render Functions ---
  const renderIdleState = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-secondary mb-2">{selectedExercise.title}</h2>
      <p className="text-gray-500 mb-4">{selectedExercise.description}</p>
      <div className="text-sm text-gray-400 mb-6">
        <span>Số câu hỏi: {selectedExercise.questions.length}</span> | <span>Cấp độ: {selectedExercise.level}</span>
      </div>
                  <button
        onClick={() => setGameState('active')}
        className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors text-lg"
                  >
        Bắt đầu làm bài
                  </button>
                </div>
  );

  const renderActiveState = () => {
    const progress = ((currentQuestionIndex + 1) / selectedExercise.questions.length) * 100;
    const answered = answers[currentQuestionIndex] !== undefined;

    return (
      <div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-500">Câu {currentQuestionIndex + 1}/{selectedExercise.questions.length}</span>
            <button onClick={resetExercise} className="text-sm text-gray-400 hover:text-primary"><ChevronLeft size={16} className="inline"/> Quay lại</button>
                  </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">{currentQuestion.situation}</p>
          <p className="text-lg font-semibold text-gray-800">{currentQuestion.question}</p>
              </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-colors duration-200";
            if (answered) {
              if (index === currentQuestion.correct) {
                buttonClass += " bg-green-100 border-green-500 text-green-800 font-bold";
              } else if (index === answers[currentQuestionIndex]?.selected) {
                buttonClass += " bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += " bg-gray-100 border-gray-200 text-gray-500";
              }
            } else {
              buttonClass += " bg-white border-gray-300 hover:bg-orange-50 hover:border-primary";
            }
            return (
              <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                disabled={answered}
                className={buttonClass}
              >
                        {option}
              </button>
            );
          })}
              </div>

        {answered && (
          <div className="p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg mb-6 fade-in">
            <HelpCircle size={20} className="inline mr-2"/>
            <span className="font-bold">Giải thích:</span> {currentQuestion.explanation}
          </div>
        )}

        <div className="text-center">
                <button
                  onClick={handleNextQuestion}
            disabled={!answered}
            className="bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors text-lg disabled:bg-gray-300"
                >
            {currentQuestionIndex < selectedExercise.questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                </button>
              </div>
            </div>
    );
  };

  const renderResultsState = () => {
      const score = getScore();
                return (
        <div className="text-center fade-in">
            <Award size={64} className="mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-secondary mb-2">Hoàn thành!</h2>
            <p className="text-lg text-gray-600 mb-4">
                Bạn đã trả lời đúng {score} trên {selectedExercise.questions.length} câu.
            </p>
            <div className="w-full max-w-sm mx-auto bg-gray-200 rounded-full h-4 mb-6">
                <div 
                    className="bg-green-500 h-4 rounded-full" 
                    style={{ width: `${scorePercentage}%` }}
                ></div>
            </div>
            <p className="text-2xl font-bold mb-8">
                {scorePercentage === 100 ? 'Xuất sắc! 🎉' : scorePercentage >= 70 ? 'Làm tốt lắm!' : 'Cố gắng hơn nhé!'}
            </p>
              <button
                onClick={resetExercise}
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors text-lg flex items-center gap-2 mx-auto"
            >
                <Repeat size={20}/>
                Làm lại bài này
              </button>
        </div>
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <SEO
        title="Bài tập tiếng Hàn | Hangul Learning"
        description="Luyện tập từ vựng, ngữ pháp và kỹ năng đọc hiểu tiếng Hàn qua các bài tập trắc nghiệm."
        keywords="bài tập tiếng Hàn, trắc nghiệm tiếng Hàn, Hangul Learning, luyện thi TOPIK"
      />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Bài tập thực hành</h1>
          <p className="mt-2 text-lg text-gray-600">Kiểm tra kiến thức và kỹ năng của bạn</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar --- */}
          <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8 self-start bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-4">Chọn bài tập</h2>
            <nav className="space-y-4">
              {Object.entries(exerciseCategories).map(([category, exercises]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{category}</h3>
                  <div className="space-y-1">
                    {exercises.map(exercise => (
                      <a
                        key={exercise.id}
                        href={`#${exercise.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedExerciseId(exercise.id);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          selectedExerciseId === exercise.id
                            ? 'bg-orange-100 text-primary'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Book size={16} />
                        <span>{exercise.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* --- Main Content --- */}
          <main className="flex-1 min-w-0">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md min-h-[500px] flex items-center justify-center">
              {gameState === 'idle' && renderIdleState()}
              {gameState === 'active' && renderActiveState()}
              {gameState === 'results' && renderResultsState()}
            </div>
          </main>
          </div>
      </div>
    </div>
  );
}

export default Exercises; 