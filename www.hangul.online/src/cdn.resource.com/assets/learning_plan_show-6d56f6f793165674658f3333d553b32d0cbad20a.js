document.addEventListener("DOMContentLoaded", function () {
  const selectPlanButton = document.getElementById('select-learning-plan');
  const resumeButton = document.getElementById('resume-activity');
  if (selectPlanButton) {
    selectPlanButton.addEventListener('click', (e) => {
      ql.track('start_learning', {
        'buttonText': 'Start learning path',
        'productName': e.target.dataset.name
      });
    });
  }
  if (resumeButton) {
    resumeButton.addEventListener('click', (e) => {
      ql.track('resume_learning', {
        'buttonText': 'Resume learning path',
        'productName': e.target.dataset.name
      });
    });
  }
});
