// --------------------------------------------------------------------------
// ✅ 명령형 프로그래밍
// --------------------------------------------------------------------------
// - [ ] 체크박스 인풋이 체크 상태이면, 버튼은 활성 상태입니다.
// - [ ] 체크박스 인풋이 체크 상태가 아니면, 버튼은 비활성 상태입니다.
// - [ ] 버튼 상태 변경에 따라 레이블은 "활성 상태", "비활성 상태"로 변경되어야 합니다.
// --------------------------------------------------------------------------

// 대상 찾기
const container = document.getElementById('imperative-programming');
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement; // 타입 assertion
const button = container.querySelector('button');

globalThis.checkbox = checkbox;


checkbox.addEventListener('change',handleChange);

function handleChange(e) {
  const { checked } = e.target;

  if(checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  }else {
    button.setAttribute('disabled','true');
    button.textContent = '비활성 상태'
  }



}