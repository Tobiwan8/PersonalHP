//Blob follow cursor
const blob = document.getElementById("blob");
document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY + scrollTop}px`
    }, {duration: 3000, fill: "forwards"});
}

//Navbar hover effect
const letters = "abcdefghijklmnopqrstuvwxyzæøå";
for (const navButton of document.getElementsByClassName("navButton")) {
    navButton.onmouseover = event => {
        let iterations = 0;
    
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index]; 
                    }
                return letters[Math.floor(Math.random() * 26)]
                })
            .join("");
    
    
            if(iterations >= 9) clearInterval(interval)
            iterations += 1 / 3;
        }, 30);
    }
}

//Scroll effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Add smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});
  
// Add snap scrolling behavior
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('scroll', function() {
        const threshold = 0.2;
        const scrollTop = section.scrollTop;
        const scrollHeight = section.scrollHeight;
        const clientHeight = section.clientHeight;
    
        // Find the section that is most visible and snap to it
        const sections = document.querySelectorAll('section');
        for (let i = 0; i < sections.length; i++) {
            const top = sections[i].offsetTop;
            const height = sections[i].offsetHeight;
            const visible = Math.max(0, Math.min(top + height, scrollTop + clientHeight) - Math.max(top, scrollTop)) / height;
            if (visible >= threshold) {
            sections[i].scrollIntoView({
                behavior: 'smooth'
            });
            break;
            }
        }
    });
});