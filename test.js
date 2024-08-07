const customEase = CustomEase.create('cubic', '0.83, 0, 0.17, 1')
let isAnimating = false;
let elements = document.querySelectorAll(selector);
elements.forEach((element) => {
    let text = element.innerText;
    let splitText = text
        .split("")
        .map(function (char: any) {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
    element.innerHTML = splitText;
});

function initializeCards() {
    let cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards, {
        y: (i) => -15 % + 15 * i + '%',
        z: (i) => 15 * i,
        duration: 1,
        ease: "cubic",
        stagger: -0.1,
    });
}


document.addEventListener("DOMContentLoaded", function () {
    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });
});



document.addEventListener("click", function () {
    if (isAnimating) return;

    isAnimating = true;

    let slider = document.querySelector(".slider");
    let cards = Array.from(slider.querySelectorAll(".card"));
    let lastCard = cards.pop();
    let nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 0.75,
        ease: "cubic",
    });

    gsap.to(lastCard, {
        y: '+=150%',
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
            slider.prepend(lastCard)
            initializeCards();
            gsap.set(lastCard.querySelectorAll('h1 span'), { y: -200 })
            setTimeout(() => {
                isAnimating = false;
            }, 1000)
        }
    });

    gsap.to(nextCard.querySelectorAll('h1 span'), {
        y: 0,
        duration: 1,
        ease: 'cubic',
        stagger: 0.05,
    })
});



s = hello


function abc('Hello') {
    if (s.length == 0) {
        return s
    } else {
        return 'olle' + s[0] === "olleH"
    }

}








n = 1234 
i-4
i-4



i = 0;
sum=0
def sum_of_digits(n):
    while n>=0:
        i = n%10 == 4 
        n = n // 10   123
        
        print('loop i =' {i}  'n = ' {n})

    return 
        

print(sum_of_digits(1234))  #Output: 10

 loop i = 4 n= 123  sum = sum+i = 4
 loop i = 3 n= 12   sum = sum+i = 7
 loop i = 2 n= 1    sum = sum+i = 9
 loop i = 1 n= 0    sum = sum+i = 10