function calculateScore() {
  var score = 0;
  var q1Answer = document.querySelector('input[name="q1"]:checked').value;
  var q2Answer = document.querySelector('input[name="q2"]:checked').value;
  var q3Answer = document.querySelector('input[name="q3"]:checked').value;
  var q4Answer = document.querySelector('input[name="q4"]:checked').value;
  var q5Answer = document.querySelector('input[name="q5"]:checked').value;
  var q6Answer = document.querySelector('input[name="q6"]:checked').value;
  var q7Answer = document.querySelector('input[name="q7"]:checked').value;
  var q8Answer = document.querySelector('input[name="q8"]:checked').value;
  var q9Answer = document.querySelector('input[name="q9"]:checked').value;
  var q10Answer = document.querySelector('input[name="q10"]:checked').value;
  if (q1Answer === 'a') {
    score += 1;
  }
  if (q2Answer === 'a') {
    score += 1;
  }
  if (q3Answer === 'a') {
    score += 1;
  }
  if (q4Answer === 'c') {
    score += 1;
  }
  if (q5Answer === 'b') {
    score += 1;
  }
  if (q6Answer === 'b') {
    score += 1;
  }
  if (q7Answer === 'b') {
    score += 1;
  }
  if (q8Answer === 'c') {
    score += 1;
  }
  if (q9Answer === 'd') {
    score += 1;
  }
  if (q10Answer === 'd') {
    score += 1;
  }
  document.getElementById('score').innerHTML = score + "/10";
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
}
