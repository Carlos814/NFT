const navlink = document.querySelector('.navlinks')
const body = document.querySelector('body');
const section2cardcontainer = document.querySelector(".section2cardcontainer");
const handleshowSideBar = () => {
    navlink.classList.add('navlinksShown');
    body.classList.add("bodyUnscroll");
};
const handleExitSideBar = () => {
  navlink.classList.remove('navlinksShown');
  body.classList.remove('bodyUnscroll');
};

const ScrollRight = () =>{
  section2cardcontainer.scrollBy(800, 0);
}
const ScrollLeft = () => {
  section2cardcontainer.scrollBy(-800, 0);
};