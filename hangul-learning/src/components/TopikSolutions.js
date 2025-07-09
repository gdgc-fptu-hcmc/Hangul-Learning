import React from 'react';
import { TOPIK_91_SOLUTIONS } from '../data/topik91_solutions';
import { TOPIK_83_SOLUTIONS } from '../data/topik83_solutions';
import { TOPIK_64_SOLUTIONS } from '../data/topik64_solutions';
import { TOPIK_60_SOLUTIONS } from '../data/topik60_solutions';
import { TOPIK_52_SOLUTIONS } from '../data/topik52_solutions';
import { TOPIK_47_SOLUTIONS } from '../data/topik47_solutions';
import { TOPIK_41_SOLUTIONS } from '../data/topik41_solutions';
import { TOPIK_37_SOLUTIONS } from '../data/topik37_solutions';
import { TOPIK_36_SOLUTIONS } from '../data/topik36_solutions';
import { TOPIK_35_SOLUTIONS } from '../data/topik35_solutions'; 

const TopikSolutions = ({ testId }) => {
  const getSolutionsForTest = (id) => {
    switch (id) {
      case '91st':
        return TOPIK_91_SOLUTIONS;
      case '83rd':
        return TOPIK_83_SOLUTIONS;
      case '64th':
        return TOPIK_64_SOLUTIONS;
      case '60th':
        return TOPIK_60_SOLUTIONS;
      case '52nd':
        return TOPIK_52_SOLUTIONS;
      case '47th':
        return TOPIK_47_SOLUTIONS;
      case '41st':
        return TOPIK_41_SOLUTIONS;
      case '37th':
        return TOPIK_37_SOLUTIONS;
      case '36th':
        return TOPIK_36_SOLUTIONS;
      case '35th':
        return TOPIK_35_SOLUTIONS;
      default:
        return null;
    }
  };

  const solutions = getSolutionsForTest(testId);

  if (!solutions) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Đáp án chưa được cập nhật</h3>
        <p className="text-gray-600">Xin lỗi, đáp án cho bài thi này chưa được cập nhật.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Đáp án {testId} TOPIK I Mock Test</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Listening Section */}
        <div>
          <h4 className="font-medium text-gray-600 mb-4">Phần Nghe (1-30)</h4>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 30}, (_, i) => i + 1).map(num => (
              <div key={num} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">{num}.</span>
                <span className="font-bold text-primary">{solutions[num.toString()]}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reading Section */}
        <div>
          <h4 className="font-medium text-gray-600 mb-4">Phần Đọc (31-70)</h4>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 40}, (_, i) => i + 31).map(num => (
              <div key={num} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">{num}.</span>
                <span className="font-bold text-primary">{solutions[num.toString()]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopikSolutions;
