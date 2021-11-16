const darkModeToggle = document.querySelector('#dark-mode-toggle');
const getBody = document.getElementsByTagName('body')[0];
const getHead = document.querySelector('#Content');
const getLabel = document.querySelector('#labelText')

const enableDarkMode = () => { // สำหรับ Dark Mode
  document.body.classList.add('darkmode'); //เรียกใช้ Style darkmode 
  getBody.setAttribute('style', //กำหนด Style สำหรับหัวข้อ
  'background-color: rgba(0, 0, 0, 0.8); transition : 1200ms ease-in-out');
  getHead.setAttribute('style', //กำหนด Style สำหรับพื้นหลัง (Body)
  'text-align: center; color : white;margin-top: -1em; transition : 1200ms ease-in-out');
  getLabel.setAttribute('style','color : white; transition : 1200ms ease-in-out')
  let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('enabled')};expires=${new Date('January 1, 2022')}`
  // สร้าง text เพื่อใช้กำหนด Cookie โดยให้ darkmode = enabled
  document.cookie = cookieText; // สร้าง Cookie
}

const disableDarkMode = () => { // สำหรับ Light Mode
  document.body.classList.remove('darkmode'); //เรียกใช้ Style darkmode
  getBody.setAttribute('style', //กำหนด Style สำหรับหัวข้อ
  'background-color: rgba(255, 255, 255, 0.8);transition : 1200ms ease-in-out')
  getHead.setAttribute('style', //กำหนด Style สำหรับพื้นหลัง (Body)
  'text-align: center; color : black;margin-top: -1em; transition : 1200ms ease-in-out');
  getLabel.setAttribute('style','color : black; transition : 1200ms ease-in-out')
  let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('disable')};expires=${new Date('January 1, 2022')}`
  // สร้าง text เพื่อใช้กำหนด Cookie โดยให้ darkmode = enabled
  document.cookie = cookieText; // สร้าง Cookie
}
 
window.onload = loadTheme;
function loadTheme (){ // สำหรับ Load พื้นหลังกลับมาเมื่อเข้าใช้หน้าเว็บ
    let darkMode = getCookie('darkMode'); // เรียก Cookie กลับมา
    if (darkMode === 'enabled') { // ถ้า DarkMode เปิดอยู่ให้แสดง DarkMode
        enableDarkMode();
      }
}

//เมื่อเรา Click ปุ่มจะทำเปิด-ปิด DarkMode
darkModeToggle.addEventListener('click', () => {
  let darkMode = getCookie('darkMode'); 
  console.log(darkMode)
  if (darkMode !== 'enabled') { 
    enableDarkMode();
  } else {  
    disableDarkMode(); 
}});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}