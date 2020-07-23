console.log('Muhammad Hassan Naeem');

let mainBoxContent = document.getElementById('whole');
let mainContentOfBody = document.getElementById('main-Content');

let quizStarted = false;

let markup = `<img
src="./saylaniLogo.jpg"
alt="No use of your pc or laptop"
width="180"
height="120"
/>
<h1 style="color: rgb(5, 113, 186);">
SAYLANI SMIT ONLINE ACADEMY
</h1>
<br />`
let firstQuestion = `
${markup}
<h1>Q1. WHAT ARE THE NAME OF THE SEMANTIC ELEMENTS IN HTML 5 ?</h1>
<label for="answer" class="design">
  SELECT ANY ONE FROM THE FOLLOWING:
  <br />
  <input type="radio" name="answer" id="answer" value="paragraph" />
  <label for="answer">Paragraph Tag</label>
  <br />
  <input type="radio" name="answer" id="answer1" value="aside" />
  <label for="answer1">Aside Tag</label>
  <br />
  <input type="radio" name="answer" id="answer2" value="body" />
  <label for="answer2">BodyTag</label>
  <br />
</label>
<button type="button" id="btn" onclick="resultFirst(this)">NEXT</button>`;

let secondQuestion = `
${markup}
<h1>Q2. IDENTIFY THE TAG TO WRITE A PARAGRAPH IN HTML 5?</h1>
<label for="answer" class="design">
  SELECT ANY ONE FROM THE FOLLOWING:
  <br />
  <input type="radio" name="answer" id="answer" value="canvas" />
  <label for="answer">Canvas Tag</label>
  <br />
  <input type="radio" name="answer" id="answer1" value="aside" />
  <label for="answer1">Span Tag</label>
  <br />
  <input type="radio" name="answer" id="answer2" value="paragraph" />
  <label for="answer2">Paragraph Tag</label>
  <br />
</label>
<button type="button" id="btn" onclick="resultSecond(this)">NEXT</button>`;

let thirdQuestion = `
${markup}
<h1>Q3. IDENTIFY THE ELEMENT NAME TO INPUT AUDIO IN HTML 5?</h1>
<label for="answer" class="design">
  SELECT ANY ONE FROM THE FOLLOWING:
  <br />
  <input type="radio" name="answer" id="answer" value="audio" />
  <label for="answer">Audio Tag</label>
  <br />
  <input type="radio" name="answer" id="answer1" value="music" />
  <label for="answer1">Music Tag</label>
  <br />
  <input type="radio" name="answer" id="answer2" value="song" />
  <label for="answer2">Song Tag</label>
  <br />
</label>
<button type="button" id="btn" onclick="resultThird(this)">NEXT</button>`;


let fourthQuestion = `
${markup}
<h1>Q4. WHAT IS THE CORRECT TAG TO WRITE THE BIGGEST HEADING IN HTML 5?</h1>
<label for="answer" class="design">
  SELECT ANY ONE FROM THE FOLLOWING:
  <br />
  <input type="radio" name="answer" id="answer" value="h6" />
  <label for="answer">h6 Tag</label>
  <br />
  <input type="radio" name="answer" id="answer1" value="h1" />
  <label for="answer1">h1 Tag</label>
  <br />
  <input type="radio" name="answer" id="answer2" value="h3" />
  <label for="answer2">h2 Tag</label>
  <br />
</label>
<button type="button" id="btn" onclick="resultFourth(this)">NEXT</button>`;

let fivethQuestion = `
${markup}
<h1>Q5. IDENTIFY THE BLOCK LEVEL ELEMENT USED IN HTML 5 ?</h1>
<label for="answer" class="design">
  SELECT ANY ONE FROM THE FOLLOWING:
  <br />
  <input type="radio" name="answer" id="answer" value="abbr" />
  <label for="answer">Abbr Tag</label>
  <br />
  <input type="radio" name="answer" id="answer1" value="div" />
  <label for="answer1">Div Tag</label>
  <br />
  <input type="radio" name="answer" id="answer2" value="dir" />
  <label for="answer2">DIR Tag</label>
  <br />
</label>
<button type="button" id="btn" onclick="resultFiveth(this)">GET RESULT</button>`;

let initialCounter = 0;
// let initialLocalStorage;

var interval;
var min;
var sec;
var finalTime;
var time;

function result(element) {
  mainContentOfBody.innerHTML = firstQuestion;
  min = 15;
  sec = 60;
  interval = setInterval(() => {
    time = document.querySelector('.time');
    if (min === 0 && sec === 0) {
      alert('timeup');
      clearInterval(interval);
    } else if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
    if (!time) {
      const timebox = document.createElement('div')
      timebox.classList.add('time')
      mainBoxContent.appendChild(timebox)
      timebox.innerHTML = `Time: ${min}:${sec}`;
    } else {
      time.innerHTML = `Time: ${min}:${sec}`;
    }
  }, 1000);
}


function resultFirst(element) {
  // console.log(element.previousSibling.previousSibling.childNodes[3]);
  // console.log(element.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling);
  let selectiveRadio = element.previousSibling.previousSibling.childNodes[3];
  let secondSelectiveRadio = element.previousSibling.previousSibling.childNodes[9];
  let thirdSelectiveRadio = element.previousSibling.previousSibling.childNodes[15];
  // console.log(secondSelectiveRadio, thirdSelectiveRadio);

  if (selectiveRadio.checked || secondSelectiveRadio.checked || thirdSelectiveRadio.checked) {
    if (secondSelectiveRadio.checked && secondSelectiveRadio.value) {
      initialCounter = initialCounter + 1;
    }
    mainContentOfBody.innerHTML = secondQuestion;
    // console.log(initialCounter);
  } else {
    alert("Please Slect any option from the following..");
  }
}

function resultSecond(element) {
  // console.log(element.previousSibling.previousSibling.childNodes[3]);
  let selectiveRadio = element.previousSibling.previousSibling.childNodes[3];
  let secondSelectiveRadio = element.previousSibling.previousSibling.childNodes[9];
  let thirdSelectiveRadio = element.previousSibling.previousSibling.childNodes[15];
  if (selectiveRadio.checked || secondSelectiveRadio.checked || thirdSelectiveRadio.checked) {
    if (thirdSelectiveRadio.checked && thirdSelectiveRadio.checked) {
      initialCounter = initialCounter + 1;
    }
    mainContentOfBody.innerHTML = thirdQuestion;
    // console.log(initialCounter);
  } else {
    alert("Please Slect any option from the following..");
  }
}

function resultThird(element) {
  // console.log(element.previousSibling.previousSibling.childNodes[3]);
  let selectiveRadio = element.previousSibling.previousSibling.childNodes[3];
  let secondSelectiveRadio = element.previousSibling.previousSibling.childNodes[9];
  let thirdSelectiveRadio = element.previousSibling.previousSibling.childNodes[15];
  if (selectiveRadio.checked || secondSelectiveRadio.checked || thirdSelectiveRadio.checked) {
    if (selectiveRadio.checked && selectiveRadio.value) {
      initialCounter = initialCounter + 1;
    }
    mainContentOfBody.innerHTML = fourthQuestion;
    // console.log(initialCounter);
  } else {
    alert("Please Slect any option from the following..");
  }
}

function resultFourth(element) {
  // console.log(element.previousSibling.previousSibling.childNodes[3]);
  let selectiveRadio = element.previousSibling.previousSibling.childNodes[3];
  let secondSelectiveRadio = element.previousSibling.previousSibling.childNodes[9];
  let thirdSelectiveRadio = element.previousSibling.previousSibling.childNodes[15];
  if (selectiveRadio.checked || secondSelectiveRadio.checked || thirdSelectiveRadio.checked) {
    if (secondSelectiveRadio.checked && secondSelectiveRadio.value) {
      initialCounter = initialCounter + 1;
    }
    mainContentOfBody.innerHTML = fivethQuestion;
    // console.log(initialCounter);
  } else {
    alert("Please Slect any option from the following..");
  }
}

function resultFiveth(element) {
  clearInterval(interval)

  finalTime = `${15 - min}:${60 - sec}`

  console.log(time)
  mainBoxContent.removeChild(time)

  let selectiveRadio = element.previousSibling.previousSibling.childNodes[3];
  let secondSelectiveRadio = element.previousSibling.previousSibling.childNodes[9];
  let thirdSelectiveRadio = element.previousSibling.previousSibling.childNodes[15];
  if (secondSelectiveRadio.checked && secondSelectiveRadio.value) {
    initialCounter = initialCounter + 1;
  }
  // console.log(initialCounter);
  let finalContentOfSubmission = `<img src="./stackLearnerBanner.jpg" alt="No use of your laptop or pc" width="1300" height="200" />
  <img src="./submitimage.jpeg" alt="No use of your laptop or pc" width="120" height="210">
  <h2 style="color: rgb(13, 189, 0);">YOUR ANSWER THAT ARE CORRECT:` + initialCounter + `</h2>
  <h2 style="color: rgb(13, 189, 0);">YOUR MARKS ARE : ` + initialCounter + `0</h2> 
  <h1 style = "color: rgb(13, 189, 0);"> SUCCEED </h1><h3>You completed in => ${finalTime}</h3>`;
  let deleteContentOfSubmision = `<img src="./stackLearnerBanner.jpg" alt="No use of your laptop or pc" width="1300" height="200" />
  <img src="./submitimage.jpeg" alt="No use of your laptop or pc" width="120" height="210">
  <h2 style="color:red;">YOUR ANSWER THAT ARE CORRECT:` + initialCounter + `</h2>
  <h1 style="color:red">FAILED</h1><h2>You completed in => ${finalTime}</h2>
  <button type="button" id="btn" onclick="result(this)">TRY AGAIN</button>`;
  if (initialCounter <= 2) {
    mainContentOfBody.innerHTML = deleteContentOfSubmision;
  } else {
    mainContentOfBody.innerHTML = finalContentOfSubmission;
  }
}