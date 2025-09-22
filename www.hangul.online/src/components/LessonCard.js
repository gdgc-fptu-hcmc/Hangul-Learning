import React from 'react';
import '../styles/LessonCard.css';

const LessonCard = ({ lesson }) => {
  const getDifficultyText = (difficulty) => {
    switch(difficulty) {
      case 'introductory': return 'Cơ bản';
      case 'intermediate': return 'Trung cấp';
      case 'advanced': return 'Nâng cao';
      default: return 'Cơ bản';
    }
  };

  return (
    <div className="ql-activity-card card" data-credential-type={lesson.credentialType} data-dark-mode="true">
      <div className="card-header">
        <div className="card-meta">
          <span className={`difficulty ${lesson.difficulty}`}>
            {getDifficultyText(lesson.difficulty)}
          </span>
          <span className="duration">
            <span className="material-icons">schedule</span>
            {lesson.duration}
          </span>
        </div>
        <div className="card-type">
          <span className="material-icons">school</span>
          {lesson.type === 'course' ? 'Khóa học' : 'Bài học'}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{lesson.title}</h3>
        <p className="card-description">{lesson.description}</p>
        <div className="korean-text">
          {lesson.koreanText}
        </div>
      </div>

      <div className="card-actions">
        <button className="ql-button">
          <span className="material-icons">play_arrow</span>
          Bắt đầu học
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
