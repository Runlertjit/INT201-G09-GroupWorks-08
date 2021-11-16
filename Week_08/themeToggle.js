const darkModeToggle = document.querySelector('#dark-mode-toggle');
const getBody = document.getElementsByTagName('body')[0];
const getHead = document.querySelector('#Content');
const getLabel = document.querySelector('#labelText')

const enableDarkMode = () => { // สำหรับ Dark Mode
  document.body.classList.toggle('darkmode'); //เรียกใช้ Style darkmode 
  let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('enabled')};expires=${new Date('January 1, 2022')}`
  // สร้าง text เพื่อใช้กำหนด Cookie โดยให้ darkmode = enabled
  document.cookie = cookieText; // สร้าง Cookie
}

const disableDarkMode = () => { // สำหรับ Light Mode
  document.body.classList.toggle('darkmode'); //เรียกใช้ Style darkmode
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