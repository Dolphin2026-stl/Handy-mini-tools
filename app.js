// Pomodoro Timer
let time = 25 * 60;
let timerInterval = null;

function updateTimer(){
  let m = String(Math.floor(time/60)).padStart(2,'0');
  let s = String(time%60).padStart(2,'0');
  document.getElementById('timer').innerText = `${m}:${s}`;
}

function startTimer(){
  if(timerInterval) return;
  timerInterval = setInterval(()=>{
    if(time>0){
      time--;
      updateTimer();
    }
  },1000);
}

function resetTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25*60;
  updateTimer();
}

// GPA Calculator
function calcGPA(){
  let input = document.getElementById('grades').value;
  let arr = input.split(',').map(x=>parseFloat(x.trim())).filter(x=>!isNaN(x));
  let avg = arr.reduce((a,b)=>a+b,0)/arr.length;
  document.getElementById('gpaResult').innerText = "GPA: " + avg.toFixed(2);
}

// Unit Converter
function convert(){
  let km = parseFloat(document.getElementById('km').value);
  let miles = km * 0.621371;
  document.getElementById('convertResult').innerText = miles.toFixed(2) + " miles";
}

// Password Generator
function genPassword(){
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  let pass = "";
  for(let i=0;i<12;i++){
    pass += chars[Math.floor(Math.random()*chars.length)];
  }
  document.getElementById('passwordResult').innerText = pass;
}

// Notes
function saveNotes(){
  let text = document.getElementById('notesBox').value;
  localStorage.setItem('notes', text);
}

function loadNotes(){
  document.getElementById('notesBox').value = localStorage.getItem('notes') || "";
}