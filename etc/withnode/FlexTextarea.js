// https://qiita.com/tsmd/items/fce7bf1f65f03239eef0
function flexTextarea(el) {
  const dummy = el.querySelector('.FlexTextarea__dummy')
  el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
    dummy.textContent = e.target.value + '\u200b'
  })
}
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)