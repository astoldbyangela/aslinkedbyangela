let textWrapper = document.getElementById('letters');
console.log(textWrapper)
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '#letters .letter',
  translateY: [0, -15, 0],
  scaleY: [1, 1.15, 1],
  duration: 700,
  easing: 'easeInOutQuad',
  delay: (el, i) => 35 * (i+1)
}).add({
  duration: 2000,
})