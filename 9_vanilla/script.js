window.onload = function() {
  main();
};

let landingData = [
  {
    heading: 'Become an Algorithms Expert.',
    text:
      '65 video explanations of popular interview questions with solutions in JavaScript, Python, C++, Java, and Go.',
    buttonText: 'Learn More'
  },
  {
    heading: 'Practice with Popular Questions.',
    text:
      'Topics ranging from string manipulation and graph traversal all the way to dynamic programming and recursion.',
    buttonText: 'Explore Questions'
  },
  {
    heading: 'Ace the Programming Interviews.',
    text:
      'Full-fledged workspace with versatile text editor, reliable code execution, custom test cases, and helpful hints.',
    buttonText: 'Meet the Team'
  }
];

function main() {
  let landingHeader = document.getElementById('landingHeader');
  let landingText = document.getElementById('landingText');
  let landingButtonText = document.getElementById('landingButtonText');
  let slideNum = 0;
  let delay = 2000;

  setInterval(() => {
    slideNum = (slideNum + 1) % landingData.length;
    const { heading, text, buttonText } = landingData[slideNum];
    landingHeader.innerHTML = heading;
    landingText.innerHTML = text;
    landingButtonText.innerHTML = buttonText;
  }, delay);
}
