function loadWeb() {
    window.addEventListener("load", () => {
        const lineHeader = document.querySelector(".line-header");

        function display(item){
        
                if(window.scrollY > item.offsetTop - item.clientHeight){
                    item.classList.add("active");
                }
                else{
                    item.classList.remove("active");
    
                }
        
        }
        window.addEventListener("scroll", handleScroll);
        // Hiển thị từng mục trong trang web
        const goodAt=document.querySelector(".good-at");
        const myWork=document.querySelector(".my-work");
        const contactMe=document.querySelector(".contact-me");
        function handleScroll() {
            // Hiển thị thanh cuộn khi scroll
            function scrollWeb() {
                const widthBody = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const heightBody = window.scrollY;
                const widthRes = (heightBody / widthBody) * 100;
                lineHeader.style.width = `${widthRes}%`;
                // console.log(widthRes);
            }

            scrollWeb();

            display(goodAt);
            display(myWork);
            display(contactMe);



            // Để chế độ fixed cho presentation
            // function fixPresentation(){
            //     const pre=document.querySelector(".Presentation .footer");
            //     const preFix=`
            //         <div class="img">
            //             <img src="./image/hihi.jpg" alt="">
            //         </div>

            //         <div class="name-position text-center">
            //             <h1 class="name">Võ Đình Khánh</h1>
            //             <p class="position">FrontEnd Developer</p>
            //         </div>

            //         <div class="list-about-me">
            //             <ul>
            //                 <li>About Me</li>
            //                 <li>What I'm good at</li>
            //                 <li>My Work</li>
            //                 <li>Contact Me</li>
            //             </ul>
            //         </div>

            //         <div class="blog row">
            //             <i class="fa-brands fa-facebook col-md-1 col-2 col-sm-3"></i>
            //             <i class="fa-brands fa-twitter col-md-1 col-2 col-sm-3"></i>
            //             <i class="fa-brands fa-linkedin-in col-md-1 col-2 col-sm-3"></i>
            //             <i class="fa-brands fa-tiktok col-md-1 col-2 col-sm-3"></i>
            //             <i class="fa-brands fa-instagram col-md-1 col-2 col-sm-3"></i>
            //         </div>

            //         <p class="footer">Copyright 2024 Reflux Design</p>

            //     `;
            //     console.log(window.scrollY);

            //     if(window.scrollY >= pre.clientHeight){
            //         console.log("working");
            //     }
            // }

            // fixPresentation();
            
            
        }

        // Click vào avartar
        function showAvater() {

            const avartar = document.querySelector(".Presentation img");
            avartar.addEventListener("click", () => {
                const div = document.createElement("div");
                let template = `
                    <div class="img text-center">
                        <img src="${avartar.src}" alt="">
                    </div>
                `;

                div.classList.add("showAvatar");
                div.insertAdjacentHTML("beforeend", template);
                document.body.appendChild(div);

                const icon = document.createElement("i");
                icon.className = "fa-solid fa-xmark";
                icon.classList.add("iconOffAvatar")
                div.appendChild(icon);
                console.log((template));

            })
        }

        showAvater();

        // Thoát khỏi màn hình avartar
        function offAvartar() {
            document.body.addEventListener("click", (e) => {
                if (e.target.matches(".iconOffAvatar")) {
                    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                }
                if (e.target.matches(".showAvatar")) {
                    document.body.removeChild(e.target);
                }
            })
        }

        offAvartar();

        // hoverGood-at
        function hoverGood() {
            const itemGood = document.querySelectorAll(".good .item");
            const div = document.createElement("div");
            itemGood.forEach(item => item.addEventListener("mouseenter", () => {
                div.classList.add("item-hover");
                div.style.width = `${item.clientWidth}px`;
                div.style.height = `${item.clientHeight}px`;

                div.innerHTML = item.innerHTML;
                console.log(div.querySelector("i"));
                const iconItem = div.querySelector("i");
                iconItem.classList.add("icon-item");
                const h2Item = div.querySelector("h2");
                h2Item.classList.add("text-item");
                const pItem = div.querySelector("p");
                pItem.classList.add("text-item");
                item.insertAdjacentElement("beforeend", div);

            }))

            itemGood.forEach(item => item.addEventListener("mouseleave", () => {
                item.removeChild(div);
            }))

        }

        hoverGood();

        // Click vào mục lu để hiển thị hình ảnh khi click

        function handleClick(){
            const listImage=document.querySelectorAll("span img");
            console.log(listImage)
            const li=document.querySelectorAll(".my-work li");
            [...li].forEach(item => item.addEventListener("click",() => {
                li.forEach(item => {
                    item.classList.remove("show");

                })
                item.classList.add("show");
                const res=[...listImage].find(element => element.id === item.textContent);
                console.log(res)
                
                res.scrollIntoView();
            }))

        }

        handleClick();
        
        const handleClickInfo=() => {
            const listAboutMe=document.querySelectorAll(".list-about-me li");
            [...listAboutMe].forEach(item => item.addEventListener("click",() => {
                listAboutMe.forEach(item => {
                    item.classList.remove("showInfo");
                })
                item.classList.add("showInfo");
                const textItem=item.textContent;
                
                const aboutMe=document.querySelector(".Content .about-me");
                const aboutMeTextH1=aboutMe.querySelector("h1").textContent;
                
                const goodAtTextH1=goodAt.querySelector("h1").textContent;
                const myWorkTextH1=myWork.querySelector("h1").textContent;
                const contactMeTextH1=contactMe.querySelector("h1").textContent;
                
                showContent(goodAt,textItem,goodAtTextH1);
                showContent(myWork,textItem,myWorkTextH1);
                showContent(contactMe,textItem,contactMeTextH1);

            }))
        }

        handleClickInfo();

        function showContent(item,textItem,contentH1){
            if(textItem === contentH1){
                item.scrollIntoView();
            }
        }

    })
}

loadWeb()