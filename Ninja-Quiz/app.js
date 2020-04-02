// correct answer
const correctAnswers = ['A', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answer
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //show result
  scrollTo(0, 0); //make window scroll to the top;
  result.classList.remove('d-none');

  // score animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = output + '%';
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
});