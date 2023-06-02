(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

}) ();

//===== close navbar-collapse when a  clicked
let navbarTogglerNine = document.querySelector(
    ".navbar-nine .navbar-toggler"
);
navbarTogglerNine.addEventListener("click", function () {
    navbarTogglerNine.classList.toggle("active");
});

// ==== left sidebar toggle
let sidebarLeft = document.querySelector(".sidebar-left");
let overlayLeft = document.querySelector(".overlay-left");
let sidebarClose = document.querySelector(".sidebar-close .close");

overlayLeft.addEventListener("click", function () {
    sidebarLeft.classList.toggle("open");
    overlayLeft.classList.toggle("open");
});
sidebarClose.addEventListener("click", function () {
    sidebarLeft.classList.remove("open");
    overlayLeft.classList.remove("open");
});

// ===== navbar nine sideMenu
let sideMenuLeftNine = document.querySelector(".navbar-nine .menu-bar");

sideMenuLeftNine.addEventListener("click", function () {
sidebarLeft.classList.add("open");
overlayLeft.classList.add("open");
});

//========= glightbox
const gallery = GLightbox({
    elements: [
        {
            'href': 'https://youtu.be/nlPLI81-Zxc',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos': true,
        },
        {
            'href': 'https://youtu.be/VBbHq2Oko3k',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos': true,
        },
        {
            'href': 'https://youtu.be/kL6eI6jMn8o',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos': true,
        }
    ]
    
});
//header section form
const scriptURL1 = 'https://script.google.com/macros/s/AKfycby1ju4XzEoShsv4bcUksDcsJh-GTS8EiTVxw2QWSbLQbCJwCjjhBx3QZI_SrxO8FPxtmQ/exec'
const form1 = document.forms['heroSectionForm']

form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
    .then(response => console.log("Success", response))
    .then(SuccessToast())
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

//contact section form 
const scriptURL2 = 'https://script.google.com/macros/s/AKfycby07_7fm0UrAJynpmjjbizLoXIXPNLuyRK0RyxLoddbhWa_1jHBG8TaXL7W_Lhn4QrdxQ/exec'
const form2 = document.forms['contactSectionForm']

form2.addEventListener('submit', e => {
    e.preventDefault()
    var country = phoneInput.getSelectedCountryData();
    let formData = new FormData(form2)
    formData.append("country", country.name)
    formData.append("countryDialCode", country.dialCode)
    fetch(scriptURL2, { method: 'POST', body: formData})
    .then(response => console.log("Success", response))
    .then(SuccessToast())
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

//newsletter section form 
const scriptURL3 = 'https://script.google.com/macros/s/AKfycbznUHoPr82X9uZpWjap2_ZmBoZbnDfU6Tv96CDZlam2UM46HK0n63q1Gxb57QdxSNTL/exec'
const form3 = document.forms['newsletterForm']

form3.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL3, { method: 'POST', body: new FormData(form3)})
    .then(response => console.log("Success", response))
    .then(SuccessToast())
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})


const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 5;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 50);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

//toasty
let option = {
    animation : true,
    delay : 4000
}

function SuccessToast(){
    let ToastHTMLElement = document.getElementById("liveToast");
    let toastElement = new bootstrap.Toast(ToastHTMLElement, option)
    toastElement.show()
}