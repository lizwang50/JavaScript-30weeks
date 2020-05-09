// 抓到所有 input
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  // 將抓取的值帶到 CSS 變數內。
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

// forEach -> JS 處理 array 的方法之一，只單純執行每個陣列內的物件或值。
// 這邊選到所有的 input ，並依序處理每個 input
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));