export const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = document.querySelector('nav').offsetHeight;
    window.scrollTo({ top: yCoordinate - yOffset, behavior: 'smooth' }); 
}