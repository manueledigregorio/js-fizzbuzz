const boxes = document.querySelector('.boxes');
for ( let i=1; i<=100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i+ " è multiplo di 5 e di 3");
     box.append("fizzbuzz") ;
     box.classList.add('fizzbuzz');

  }
  else if (i % 3 === 0){
    console.log(i+ " è multiplo di 3");
    box.append("fizz");
    box.classList.add('fizz')
    
  }

  else if (i % 5 === 0) {
    console.log(i+ " è multiplo di 5");
     box.append("buzz");
     box.classList.add('buzz')
  }

  else {
    box.append(i);
  }

  boxes.append(box);

}