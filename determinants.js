function changeSelectOption() {
  let select = document.querySelector('#selectOption');
  let parent = document.querySelector('#parent');
  let elem = document.getElementsByTagName('input');

  if (select.selectedIndex === 0) {
    parent.innerHTML = '';
    for (let i = 0; i < select.value; i++) {
      let input = document.createElement('input');
      let br = document.createElement('br');
      if (i === 2) {
        parent.appendChild(br);
      }
      parent.appendChild(input);
      for (let j = 0; j < select.value; j++) {
        elem[i].id = 'a' + i;
      }
    }
  }
  else if (select.selectedIndex === 1) {
    parent.innerHTML = '';
    for (let i = 0; i < select.value; i++) {
      let input = document.createElement('input');
      let br = document.createElement('br');
      if (i === 3 || i === 6) {
        parent.appendChild(br);
      }
      parent.appendChild(input);
      for (let j = 0; j < select.value; j++) {
        elem[i].id = 'b' + i;
      }
    }
  }
  else if (select.selectedIndex === 2) {
    parent.innerHTML = '';
    for (let i = 0; i < select.value; i++) {
      let input = document.createElement('input');
      let br = document.createElement('br');
      if (i === 4 || i === 8 || i === 12) {
        parent.appendChild(br);
      }
      parent.appendChild(input);
      for (let j = 0; j < select.value; j++) {
        elem[i].id = 'c' + i;
      }
    }
  }
  else if (select.selectedIndex === 3) {
    parent.innerHTML = '';
    for (let i = 0; i < select.value; i++) {
      let input = document.createElement('input');
      let br = document.createElement('br');
      if (i === 5 || i === 10 || i === 15 || i === 20) {
        parent.appendChild(br);
      }
      parent.appendChild(input);
      for (let j = 0; j < select.value; j++) {
        elem[i].id = 'd' + i;
      }
    }
  }
};

function calculation() {
  let select = document.querySelector('#selectOption');
  if (select.selectedIndex === 0) {
    a1 = document.getElementById('a0').value;
    a2 = document.getElementById('a1').value;
    b1 = document.getElementById('a2').value;
    b2 = document.getElementById('a3').value;
    
    const twoByTwo = (a1, a2, b1, b2) => {
      return (a1 * b2) - (a2 * b1);
    }
    document.getElementById('result').innerHTML = twoByTwo(a1, a2, b1, b2);
  }
  else if (select.selectedIndex === 1) {
    a1 = document.getElementById('b0').value;
    a2 = document.getElementById('b1').value;
    a3 = document.getElementById('b2').value;
    b1 = document.getElementById('b3').value;
    b2 = document.getElementById('b4').value;
    b3 = document.getElementById('b5').value;
    c1 = document.getElementById('b6').value;
    c2 = document.getElementById('b7').value;
    c3 = document.getElementById('b8').value;
    
    const threeByThree = (a1, a2, a3, b1, b2, b3, c1, c2, c3) => {
      return (a1 * b2 * c3) + (a3 * b1 * c2) + (a2 * b3 * c1) - (a3 * b2 * c1) - (a1 * b3 * c2) - (a2 * b1 * c3);
    }
    document.getElementById('result').innerHTML = threeByThree(a1, a2, a3, b1, b2, b3, c1, c2, c3);
  }
  else if (select.selectedIndex === 2) {
    a1 = document.getElementById('c0').value;
    a2 = document.getElementById('c1').value;
    a3 = document.getElementById('c2').value;
    a4 = document.getElementById('c3').value;
    b1 = document.getElementById('c4').value;
    b2 = document.getElementById('c5').value;
    b3 = document.getElementById('c6').value;
    b4 = document.getElementById('c7').value;
    c1 = document.getElementById('c8').value;
    c2 = document.getElementById('c9').value;
    c3 = document.getElementById('c10').value;
    c4 = document.getElementById('c11').value;
    d1 = document.getElementById('c12').value;
    d2 = document.getElementById('c13').value;
    d3 = document.getElementById('c14').value;
    d4 = document.getElementById('c15').value;
    
    const threeByThree = (a1, a2, a3, b1, b2, b3, c1, c2, c3) => {
      return (a1 * b2 * c3) + (a3 * b1 * c2) + (a2 * b3 * c1) - (a3 * b2 * c1) - (a1 * b3 * c2) - (a2 * b1 * c3); 
    }
    const fourByFour = (a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4) => {
      return -d1 * threeByThree(a2, a3, a4, b2, b3, b4, c2, c3, c4) + d2 * threeByThree(a1, a3, a4, b1, b3, b4, c1, c3, c4) + (-d3) * threeByThree(a1, a2, a4, b1, b2, b4, c1, c2, c4) + d4 * threeByThree(a1, a2, a3, b1, b2, b3, c1, c2, c3);
    }
    document.getElementById('result').innerHTML = fourByFour(a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4);
  }
  else if (select.selectedIndex === 3) {
    a1 = document.getElementById('d0').value;
    a2 = document.getElementById('d1').value;
    a3 = document.getElementById('d2').value;
    a4 = document.getElementById('d3').value;
    a5 = document.getElementById('d4').value;
    b1 = document.getElementById('d5').value;
    b2 = document.getElementById('d6').value;
    b3 = document.getElementById('d7').value;
    b4 = document.getElementById('d8').value;
    b5 = document.getElementById('d9').value;
    c1 = document.getElementById('d10').value;
    c2 = document.getElementById('d11').value;
    c3 = document.getElementById('d12').value;
    c4 = document.getElementById('d13').value;
    c5 = document.getElementById('d14').value;
    d1 = document.getElementById('d15').value;
    d2 = document.getElementById('d16').value;
    d3 = document.getElementById('d17').value;
    d4 = document.getElementById('d18').value;
    d5 = document.getElementById('d19').value;
    e1 = document.getElementById('d20').value;
    e2 = document.getElementById('d21').value;
    e3 = document.getElementById('d22').value;
    e4 = document.getElementById('d23').value;
    e5 = document.getElementById('d24').value;
    
    const threeByThree = (a1, a2, a3, b1, b2, b3, c1, c2, c3) => {
      return (a1 * b2 * c3) + (a3 * b1 * c2) + (a2 * b3 * c1) - (a3 * b2 * c1) - (a1 * b3 * c2) - (a2 * b1 * c3); 
    }
    const fourByFour = (a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4) => {
      return -d1 * threeByThree(a2, a3, a4, b2, b3, b4, c2, c3, c4) + d2 * threeByThree(a1, a3, a4, b1, b3, b4, c1, c3, c4) + (-d3) * threeByThree(a1, a2, a4, b1, b2, b4, c1, c2, c4) + d4 * threeByThree(a1, a2, a3, b1, b2, b3, c1, c2, c3);
    }
    const fiveByFive = (a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5) => {
      return a5 * fourByFour(b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4, e1, e2, e3, e4) + (-b5) * fourByFour(a1, a2, a3, a4, c1, c2, c3, c4, d1, d2, d3, d4, e1, e2, e3, e4) + c5 * fourByFour(a1, a2, a3, a4, b1, b2, b3, b4, d1, d2, d3, d4, e1, e2, e3, e4) + (-d5) * fourByFour(a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, e1, e2, e3, e4) + e5 * fourByFour(a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4);
    }
    document.getElementById('result').innerHTML = fiveByFive(a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5);
  }
};