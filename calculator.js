document.addEventListener('DOMContentLoaded', () => {
  let btns = document.querySelectorAll('.button');
  var str = "";
  btns.forEach(button => {
    button.addEventListener('click', (e) => {
      try {
        if (e.target.innerHTML == '=') {
          str = eval(str)
          document.querySelector('input').value = str
        }
        else if (e.target.innerHTML == 'AC') {
          str = ''
          document.querySelector('input').value = str
        }
        else if (e.target.innerHTML == 'C') {
          var input = document.querySelector("input");
          str = input.value.substr(0, input.value.length - 1);
          document.querySelector('input').value = str
        }
        else {
          str = str + e.target.innerHTML;
          document.querySelector('input').value = str
        }
      }
      catch {
        document.querySelector('input').value = 'Invaild Expression'
      }
    });
  });
});