
const inputProduct = document.querySelector('.inputProduct');
const inputPrice = document.querySelector('.inputPrice');
const inputCategory = document.querySelector('.inputCategory');
const inputPicture = document.querySelector('.inputPicture');
const tbody = document.querySelector('.tbody');
const allInputs = document.querySelectorAll('.inputs');
const outputsAsArray = [];

document.querySelector('.buttonAddProduct').addEventListener('click', function() {
  // GOOD!
  if (inputEmpty()) {
    alert('Please fill all inputs');
  } else {
    createElements();
  }
})

function inputEmpty() {
  //ALUF!!
  // you just return the oppisite of this if
  if (inputProduct.value === '' || inputPrice.value === '' || inputCategory.value === '' || inputPicture.value === '') {
    return true;
  }
  return false;
}

function resetInputs() {
  inputProduct.value = '';
  inputPrice.value = '';
  inputCategory.value = '';
  inputPicture.value = '';
}

function createElements() {  
  const outputObj = {}
  
  let trCreate = document.createElement('tr');
  trCreate.className = 'trCreated';
  tbody.appendChild(trCreate);
  //tr create? its a good name? titbaish!
  const tdCreate1 = document.createElement('td');
  tdCreate1.className = 'tdCreated1';
  tdCreate1.innerText = inputProduct.value;
  trCreate.appendChild(tdCreate1);
  outputObj.name = tdCreate1.innerText;
  // shame 
  const tdCreate2 = document.createElement('td');
  tdCreate2.className = 'tdCreated2';
  tdCreate2.innerText = inputPrice.value;
  trCreate.appendChild(tdCreate2);
  outputObj.price = tdCreate2.innerText;
    // shame 
  const tdCreate3 = document.createElement('td');
  tdCreate3.className = 'tdCreated3';
  tdCreate3.innerText = inputCategory.value;
  trCreate.appendChild(tdCreate3);
  outputObj.category = tdCreate3.innerText;
  // funciton?
  const createImg = document.createElement('img');
  createImg.className = 'createImg';
  createImg.src = inputPicture.value;
  trCreate.appendChild(createImg);
  outputObj.pictureLink = inputPicture.value;
  outputsAsArray.push(outputObj);

  resetInputs();
  //no console in code.
  console.log(outputsAsArray);  
  
  const deleteButtonCreate = document.createElement('button');
  deleteButtonCreate.className = 'deleteButtonCreated';
  //nice!
  deleteButtonCreate.innerHTML = '<i class="fa-solid fa-x"></i>';
  deleteButtonCreate.style.color = 'red';
  deleteButtonCreate.style.position = 'relative';
  deleteButtonCreate.style.left = '243px';
  trCreate.appendChild(deleteButtonCreate);
  //nice!
  deleteButtonCreate.addEventListener('click', function() {
    trCreate.style.visibility = 'hidden';
    tbody.removeChild(trCreate);
    const index = outputsAsArray.indexOf(outputObj);
    if (index !== -1) {
      outputsAsArray.splice(index, 1);
      console.log(outputsAsArray);
    }
    });
  }
