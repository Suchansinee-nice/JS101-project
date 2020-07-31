function appendImage(keyword, index) {
  //document ใช้ครอป html ทั้งหมดเลย ซึ่ง document = object มี method หลายตัวให้เรียกใช้เพื่อจัดการเปลี่ยนแปลงหน้า html ได้
  //document.createElement('Img') คือการสร้าง img element ภายใต้ document โดยจะเก็บ element นี้ในตัวแปร imageElement
  const imageElement = document.createElement('Img'); //dom = api ที่ใช้เพื่อช่วยให้จัการ html ได้, html เป็นลักษณะแบบtext การจัดการข้อความทำได้ยาก จึงได้มีการแปลง text เเป็น object ของ javascript , โดยสามารถนำ object พวกนี้มาจัดการเปลี่ยนแปลงข้อมูลบนหน้า html ได้ง่ายขึ้น
  imageElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`; //จะเอาตัว img element ไปใส่เป็นลูกของ div ที่มี class ชื่อ gallery //การเข้าถึง object ใช้ . //index เพื่อบอกว่าเอารูปที่เท่าไร จะได้ไม่ซ้ำกัน
  const galleryElem = document.querySelector('.gallery'); //สิ่งแรกคือต้องดึง elem มาก่อน จะดึงโดยใช้ class ของมัน ดึงด้วยคลาสจะต้องใส่ .นำหน้า
  galleryElem.appendChild(imageElement); //ใส่ img elem เป็นลูกของ gallery Elem
}

function removePhotos() {
  const galleryElem = document.querySelector('.gallery'); //ดึงจาก class gallery
  galleryElem.innerHTML = ''; //inner html เป็น property ดึง html ภายใน div gallery ออกมาได้ เซตเป็นค่าว่าง ในที่นี้คือการลบค่าทั้งหมดที่เป็น content ของ (ภายใต้) div ทั้งหมดออกไปเป็นค่าว่าง
}


function searchPhotos(event) { //รับ event เสมอ
  const keyword = event.target.value; //ค่าที่ user พิมพ์ ณ ปัจจุบัน 
  removePhotos(); //ลบภาพเก่าออกก่อนที่จะไปโชว์ภาพ
  if(event.key === 'Enter' && keyword !== ''){ //key ที่ user กดเป็นปุ่ม enter มั้ย , keyword ต้องไม่เป็นค่าว่าง ใช้แค่ keyword ก็ได้เพราะถ้าเป็นค่าว่าง keyword จะเป็นเท็จโดยอัตโนมัติ
      for(let i=1; i<=10;i++) {
      appendImage(keyword, i)
    }
  }
  // console.log(keyword);
}

function run() {
  // appendImage('dog',1);
  // appendImage('dog',2);

  // for(let i=1; i<=9;i++) {
  //   appendImage('dog', i)
  // }

  //event ประโยชน์ dom คือเราจัดการกับ object ได้ อยากจะใช้ element ไหน เช่น input ก็ดึงมาได้ อย่างอยากจะเช็ค eventของ input อะไรแบบนี้, 
  //จะเอาไปเพิ่มใส่ใน element อื่นก็ทำได้ หรือจะใช้ property ใดๆใน element ก็เรียกได้ เป็น object อย่างนึง
  //dom,event มันคือการเรียกใช้ object ต่างๆมาโดยใช้ dom แล้วจับ event จากพวก objectหือ element ที่เราไปดึงมาอีกที
  const inputElem = document.querySelector('input'); //จะจับ event ที่ input field ต้องไปดึง input field ออกมาก่อน
  inputElem.addEventListener('keydown',searchPhotos); //จะเอา input ที่ดึงมาได้มาใส่ eventlistener เข้าไป
};

run();


// const myName = 'Nice'; //ค่าคงที่ เปลี่ยนแปลงไม่ได้
// let height = 165;
// //ถ้าสิ่งไหนไม่มีค่าให้ใส่ null แต่ถ้ายังไม่เคยกำหนดค่าให้มัน ให้มีค่า undefine
// let isFemale = false;
// let city; //undefine ประกาศตัวแปรแต่ไม่กำหนดค่า 
// city = null; //null บอกว่า ตัวแปรนี้ไม่มีค่า อาจจะเคย assign ค่าไปแล้วแต่ตอนนี้เป็น null
// let bigNumber = 10n; //bigInt ลงท้ายด้วย n -->Es2020 

// console.log(myName, height, isFemale, city, bigNumber);

// // console.log(myName);
// // console.log(height);

// // // myName = 'John';
// // height = 180;
// // console.log(height);

// //object
// const person = {
//   name : "Suchansinee",
//   height : 165,
//   city : 'Bangkok'
// };

// console.log(person);
// console.log(person.name);

// //update property
// person.height = 180;

// //crete new property
// person.weight = 50;
// console.log(person);

// //Array
// const numbers = [
//   5,10,15,20
// ];
// console.log(numbers);
// console.log(numbers[0]);

// //add new value in array
// numbers.push(25); //call method หรือ function ,ถ้า method ตอนเรียกมี object.methodName(); ส่วนฟังก์ชัน เวลาเรียกคือไม่ต้องมี . นำหน้า
// console.log(numbers);

// //remove from array  (back)
// numbers.pop(numbers);
// console.log(numbers);

// //add new value in array (front)
// numbers.unshift(1);
// console.log(numbers);

// //remove from array (front)
// numbers.shift();
// console.log(numbers);

// //operators
// let result = (10 + 5) * 2 / 2;
// console.log(result);

// let result2 = 2 ** 3;
// console.log(result2);

// //condition
// let password = '';
// if(password === '') {
//   console.log('password is required');
// }else if(password.length >= 8 && password.length <= 12) {
//   console.log('password is valid');
// }else {
//   console.log('password is invalid');
// }

// //functions
// function calculateVat(money, vat) {
//   return money * vat / 100;
// }

// const totalVat = calculateVat(100, 7);
// console.log(totalVat);

// const totalVat10 = calculateVat(100, 10);
// console.log(totalVat10);

// //flow controls -> loops
// for(let counter =0;counter<10;counter++) {
//   // if(counter % 2 !== 0) {
//   //   continue //ไม่ทำข้างล่างต่อ ให้ไปทำ counter++ เลย จะได้ค่าเลขคู่เหมือนกัน
//   // }
//   if(counter === 5) {
//     break; // ถ้าเจอเลข 5 ให้หยุด loop ทันที ก็คือ break ทันที
//   }
//   console.log(counter);
// }

// //DOM Manipulation

