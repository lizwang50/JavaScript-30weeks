const inputs = document.querySelectorAll('input');

// 如果 handleUpdate 用 ES6 的箭頭方程式的話 this 會是 window
function handleUpdate () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));
