function appendValue(value) {
  playClickSound();
  document.querySelector("#result").value += value;
}

function playClickSound(){
  const click=document.querySelector("#clickSound");
  click.currentTime=0;
  click.play();
}

function clearResult() {
  playClickSound();
  document.querySelector("#result").value = "";
}

function backspace() {
  playClickSound();
  let current = document.querySelector("#result").value;
  document.querySelector("#result").value = current.slice(0, -1);
}

function toggleSign() {
  playClickSound();
  const input = document.querySelector("#result");
  let value = input.value;

  if (value === "") return; 

  try {
    
    let result = eval(value);
    result = -result;
    input.value = result;
  } catch {
    input.value = "Error";
  }
}

function calculateValue() {
  playClickSound();
  let exp = document.querySelector("#result").value;
  try {
    document.querySelector("#result").value = eval(exp);
  } catch {
    document.querySelector("#result").value = "Error";
  }
}
