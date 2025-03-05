function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='none'
}

const navMenuBtn = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

    navMenuBtn.addEventListener('click',function(){
        navList.classList.toggle('active')
    });

document.addEventListener('click',function(event){
    if(!navList.contains(event.target) && !navMenuBtn.contains(event.target))
        navList.classList.remove('active');
});

const navListItem = document.querySelectorAll('.nav-list li');
navListItem.forEach(item => {
    item.addEventListener('click',function(){
        const link = this.querySelector('a');
        if(link)
            window.location.href =link.getAttribute('href');
    })
})