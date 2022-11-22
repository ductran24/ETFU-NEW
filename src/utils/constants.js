const localhost = 'http://localhost:5000/';

export const reading_tests_url = `${localhost}api/tests/show?category=63329f38623618c13355482f`;

export const listening_tests_url = `${localhost}api/tests/show?category=63329f65623618c133554833`;

export const details_test_url = `${localhost}api/tests/detail/`;

export const register_url = `${localhost}api/users/signup`;

export const login_url = `${localhost}api/users/signin`;

export const reading_exam_url = `${localhost}api/exams/show?category=63329f38623618c13355482f`;

export const listening_exam_url = `${localhost}api/exams/show?category=63329f65623618c133554833`;

export const update_password_url = `${localhost}api/users/infor`;

export const submit_test_url = `${localhost}api/exams/show/submit`;

export const statistic_number_exam = `${localhost}api/users/infor/statisticsNumberExam`;

export const statistic_score_exam = `${localhost}api/users/infor/statisticsScoreExam`;

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
