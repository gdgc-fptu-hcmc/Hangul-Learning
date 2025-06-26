import React, { useState, useMemo } from 'react';

// Export raw data so other pages (Grammar, Vocabulary) can reuse
export const sc2Raw = {
  lesson1: {
    title: 'Bài 01: 만남 (Gặp gỡ)',
    grammar: [
      {
        rule: '의',
        description: 'Tiểu từ sở hữu, có nghĩa là "của".',
        examples: [
          { korean: '저의 책입니다.', vietnamese: 'Là sách của tôi.', note: 'Sở hữu cá nhân' },
          { korean: '한국의 수도는 서울입니다.', vietnamese: 'Thủ đô của Hàn Quốc là Seoul.', note: 'Sở hữu địa lý' }
        ]
      },
      {
        rule: '-(으)ㄹ 때',
        description: 'Gắn vào động từ/tính từ, có nghĩa là "khi...".',
        examples: [
          { korean: '한국에 갈 때 선물을 사겠습니다.', vietnamese: 'Khi đi Hàn Quốc tôi sẽ mua quà.', note: 'Thời điểm tương lai' },
          { korean: '어려울 때 도와주세요.', vietnamese: 'Hãy giúp đỡ khi khó khăn.', note: 'Thời điểm khó khăn' }
        ]
      },
      {
        rule: '-아/어 주다',
        description: 'Diễn tả hành động làm việc gì đó cho người khác.',
        examples: [
          { korean: '도와주세요.', vietnamese: 'Hãy giúp tôi.', note: 'Yêu cầu giúp đỡ' },
          { korean: '설명해 드리겠습니다.', vietnamese: 'Tôi sẽ giải thích cho anh/chị.', note: 'Kính ngữ' }
        ]
      }
    ]
  },
  lesson2: {
    title: 'Bài 02: 약속 (Hẹn gặp)',
    grammar: [
      {
        rule: '만',
        description: 'Tiểu từ có nghĩa là "chỉ".',
        examples: [
          { korean: '천 원만 있어요.', vietnamese: 'Chỉ có 1000 won.', note: 'Giới hạn số lượng' },
          { korean: '나만 알아요.', vietnamese: 'Chỉ tôi biết.', note: 'Giới hạn người' }
        ]
      },
      {
        rule: '-(으)니까',
        description: 'Có nghĩa là "vì... nên...".',
        examples: [
          { korean: '바쁘니까 못 가요.', vietnamese: 'Vì bận nên không đi được.', note: 'Lý do không thể' },
          { korean: '비가 오니까 우산을 가져가세요.', vietnamese: 'Vì trời mưa nên hãy mang ô.', note: 'Lời khuyên' }
        ]
      }
    ]
  },
  lesson3: {
    title: 'Bài 03: 물건 사기 (2) (Mua sắm (2))',
    grammar: [
      {
        rule: '보다',
        description: 'Tiểu từ so sánh, có nghĩa là "hơn".',
        examples: [
          { korean: '이것이 저것보다 비싸요.', vietnamese: 'Cái này đắt hơn cái kia.', note: 'So sánh giá cả' },
          { korean: '오늘이 어제보다 더워요.', vietnamese: 'Hôm nay nóng hơn hôm qua.', note: 'So sánh thời tiết' }
        ]
      }
    ]
  }
};

function Basic2() {
  // Raw content for Sơ cấp 2 lessons (vocabulary + grammar)
  const raw = sc2Raw;

  // Parse raw data into structured lessons
  const lessons = useMemo(() => {
    const result = [];
    const lessonBlocks = raw.split(/\nBài /).map((block, idx) => (idx === 0 ? block : 'Bài ' + block));
    lessonBlocks.forEach(block => {
      const lines = block.trim().split('\n');
      if (!lines[0].startsWith('Bài')) return;
      const title = lines[0];
      let vocabulary = [];
      let grammar = [];
      let section = '';
      lines.slice(1).forEach(l => {
        if (l.startsWith('Từ vựng')) {
          section = 'vocab';
          return;
        }
        if (l.startsWith('Ngữ pháp')) {
          section = 'grammar';
          return;
        }
        if (section === 'vocab') vocabulary.push(l);
        else if (section === 'grammar') grammar.push(l);
      });
      result.push({ title, vocabulary: vocabulary.join('\n').trim(), grammar: grammar.join('\n').trim() });
    });
    return result;
  }, [raw]);

  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);
  const [tab, setTab] = useState('vocab'); // 'vocab' | 'grammar'

  const current = lessons[selectedLessonIdx] || {};

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <h1>Sơ cấp 2: {current.title}</h1>
        <p>Chọn bài và xem Từ vựng hoặc Ngữ pháp tương ứng</p>
      </div>

      {/* Lesson selector */}
      <div className="grid-3" style={{ gap: '0.5rem', marginBottom: '1.5rem' }}>
        {lessons.map((l, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedLessonIdx(idx)}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '18px',
              border: selectedLessonIdx === idx ? '2px solid #667eea' : '1px solid #ccc',
              background: selectedLessonIdx === idx ? '#eef2ff' : '#fff',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Tab selector */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button
          onClick={() => setTab('vocab')}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: tab === 'vocab' ? '2px solid #667eea' : '1px solid #ccc',
            background: tab === 'vocab' ? '#e0e7ff' : '#fff',
            cursor: 'pointer'
          }}
        >
          Từ vựng
        </button>
        <button
          onClick={() => setTab('grammar')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: tab === 'grammar' ? '2px solid #667eea' : '1px solid #ccc',
            background: tab === 'grammar' ? '#e0e7ff' : '#fff',
            cursor: 'pointer'
          }}
        >
          Ngữ pháp
        </button>
      </div>

      <div className="card" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
        {tab === 'vocab' ? current.vocabulary : current.grammar}
      </div>
    </div>
  );
}

export default Basic2; 