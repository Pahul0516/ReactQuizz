# ReactQuiz

A small learning project built to practice React hooks, manage side effects, and understand how state and timers work together in an interactive app.

## About the app

A quiz with seven multiple-choice questions about React fundamentals. Each question has shuffled answers and a 10-second countdown. After selecting an answer, the app shows whether it was correct before moving to the next question. Questions are automatically skipped when time runs out. At the end, a summary shows the percentages of correct, incorrect, and skipped answers, along with a question-by-question review.

## What I learned

Built with React, JavaScript (JSX), CSS, and Vite. I split the interface into components for the header, quiz, question, answers, timer, and results summary.

Through this project, I practiced:

- Managing quiz progress and answer feedback with `useState`, using functional updates to add answers without mutating existing state.
- Passing data through props and using callback functions so child components can report answers to the parent quiz component.
- Managing timers with `useEffect`, setting effect dependencies, and cleaning up timeouts and intervals when effects rerun or components unmount.
- Using `useCallback` to keep answer and skip handlers stable when they are passed to components and used as effect dependencies.
- Using `useRef` to preserve shuffled answer choices between renders without triggering another render.
- Using React's `key` prop to reset question and timer state when a new question or timer phase begins.
- Rendering lists and conditional content, disabling answer buttons after a selection, and applying CSS classes for selected, correct, and incorrect answers.
- Deriving the active question, completion status, and result percentages from stored answers instead of keeping separate state for each value.
- Configuring Vite's base path and a GitHub Actions workflow to build and deploy the app to GitHub Pages.

## Hosting

Play the app here: [ReactQuiz](https://pahul0516.github.io/ReactQuizz/).

The app is hosted on GitHub Pages.
