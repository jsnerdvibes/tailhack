const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            checkInClasses(entry.target)
            
        }else{
            checkOutClasses(entry.target)
        }

    })
})

const  onScroll = document.querySelectorAll(".onScroll")

onScroll.forEach((el)=>observer.observe(el))


function checkInClasses (elem){

    if(elem.classList.contains("slideIn-L")){ //Slide animation starts here
        elem.classList.remove("slideIn-L")
        elem.classList.add("slideIn-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-L-Prev")
        elem.classList.add("slideIn-L")
        },50)
    }else if(elem.classList.contains("slideIn-R")){
        elem.classList.remove("slideIn-R")
        elem.classList.add("slideIn-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-R-Prev")
        elem.classList.add("slideIn-R")
        },50)
    }
    else if(elem.classList.contains("slideIn-T")){
        elem.classList.remove("slideIn-T")
        elem.classList.add("slideIn-T-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-T-Prev")
        elem.classList.add("slideIn-T")
        },50)
    }
    else if(elem.classList.contains("slideIn-B")){
        elem.classList.remove("slideIn-B")
        elem.classList.add("slideIn-B-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-B-Prev")
        elem.classList.add("slideIn-B")
        },50)
    }else if(elem.classList.contains("fadeIn")){  //Fade animation starts here
        elem.classList.remove("fadeIn")
        elem.classList.add("fadeIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-Prev")
        elem.classList.add("fadeIn")
        },50)
    }else if(elem.classList.contains("fadeIn-U")){
        elem.classList.remove("fadeIn-U")
        elem.classList.add("fadeIn-U-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-U-Prev")
        elem.classList.add("fadeIn-U")
        },50)
    }else if(elem.classList.contains("fadeIn-D")){
        elem.classList.remove("fadeIn-D")
        elem.classList.add("fadeIn-D-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-D-Prev")
        elem.classList.add("fadeIn-D")
        },50)
    }else if(elem.classList.contains("fadeIn-L")){
        elem.classList.remove("fadeIn-L")
        elem.classList.add("fadeIn-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-L-Prev")
        elem.classList.add("fadeIn-L")
        },50)
    }else if(elem.classList.contains("fadeIn-R")){
        elem.classList.remove("fadeIn-R")
        elem.classList.add("fadeIn-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-R-Prev")
        elem.classList.add("fadeIn-R")
        },50)
    }else if(elem.classList.contains("zoomIn")){ //Zoom animations starts here
        elem.classList.remove("zoomIn")
        elem.classList.add("zoomIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoomIn-Prev")
        elem.classList.add("zoomIn")
        },50)
    }else if(elem.classList.contains("zoomOut")){
        elem.classList.remove("zoomOut")
        elem.classList.add("zoomOut-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoomOut-Prev")
        elem.classList.add("zoomOut")
        },50)
    }else if(elem.classList.contains("zoom-U")){
        elem.classList.remove("zoom-U")
        elem.classList.add("zoom-U-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-U-Prev")
        elem.classList.add("zoom-U")
        },50)
    }else if(elem.classList.contains("zoom-D")){
        elem.classList.remove("zoom-D")
        elem.classList.add("zoom-D-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-D-Prev")
        elem.classList.add("zoom-D")
        },50)
    }else if(elem.classList.contains("zoom-L")){
        elem.classList.remove("zoom-L")
        elem.classList.add("zoom-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-L-Prev")
        elem.classList.add("zoom-L")
        },50)
    }else if(elem.classList.contains("zoom-R")){
        elem.classList.remove("zoom-R")
        elem.classList.add("zoom-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-R-Prev")
        elem.classList.add("zoom-R")
        },50)
    }else if(elem.classList.contains("rotateIn")){  // Rotate animations start here
        elem.classList.remove("rotateIn")
        elem.classList.add("rotateIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotateIn-Prev")
        elem.classList.add("rotateIn")
        },50)
    }else if(elem.classList.contains("rotate-L")){
        elem.classList.remove("rotate-L")
        elem.classList.add("rotate-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotate-L-Prev")
        elem.classList.add("rotate-L")
        },50)
    }else if(elem.classList.contains("rotate-R")){
        elem.classList.remove("rotate-R")
        elem.classList.add("rotate-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotate-R-Prev")
        elem.classList.add("rotate-R")
        },50)
    }


}


function checkOutClasses(elem){

    if(elem.classList.contains("slideOut-L")){ // Slide-out left animation starts here
        elem.classList.remove("slideOut-L");
        elem.classList.add("slideOut-L-Prev");
        setTimeout(() => {
            elem.classList.remove("slideOut-L-Prev");
            elem.classList.add("slideOut-L");
        }, 50);
    } else if(elem.classList.contains("slideOut-R")) {
        elem.classList.remove("slideOut-R");
        elem.classList.add("slideOut-R-Prev");
        setTimeout(() => {
            elem.classList.remove("slideOut-R-Prev");
            elem.classList.add("slideOut-R");
        }, 50);
    } else if(elem.classList.contains("slideOut-T")) {
        elem.classList.remove("slideOut-T");
        elem.classList.add("slideOut-T-Prev");
        setTimeout(() => {
            elem.classList.remove("slideOut-T-Prev");
            elem.classList.add("slideOut-T");
        }, 50);
    } else if(elem.classList.contains("slideOut-B")) {
        elem.classList.remove("slideOut-B");
        elem.classList.add("slideOut-B-Prev");
        setTimeout(() => {
            elem.classList.remove("slideOut-B-Prev");
            elem.classList.add("slideOut-B");
        }, 50);
    }else if(elem.classList.contains("fadeOut")){  // Fade-out animation starts here
        elem.classList.remove("fadeOut");
        elem.classList.add("fadeOut-Prev");
        setTimeout(() => {
            elem.classList.remove("fadeOut-Prev");
            elem.classList.add("fadeOut");
        }, 50);
    } else if(elem.classList.contains("fadeOut-U")) {
        elem.classList.remove("fadeOut-U");
        elem.classList.add("fadeOut-U-Prev");
        setTimeout(() => {
            elem.classList.remove("fadeOut-U-Prev");
            elem.classList.add("fadeOut-U");
        }, 50);
    } else if(elem.classList.contains("fadeOut-D")) {
        elem.classList.remove("fadeOut-D");
        elem.classList.add("fadeOut-D-Prev");
        setTimeout(() => {
            elem.classList.remove("fadeOut-D-Prev");
            elem.classList.add("fadeOut-D");
        }, 50);
    } else if(elem.classList.contains("fadeOut-L")) {
        elem.classList.remove("fadeOut-L");
        elem.classList.add("fadeOut-L-Prev");
        setTimeout(() => {
            elem.classList.remove("fadeOut-L-Prev");
            elem.classList.add("fadeOut-L");
        }, 50);
    } else if(elem.classList.contains("fadeOut-R")) {
        elem.classList.remove("fadeOut-R");
        elem.classList.add("fadeOut-R-Prev");
        setTimeout(() => {
            elem.classList.remove("fadeOut-R-Prev");
            elem.classList.add("fadeOut-R");
        }, 50);
    }else if(elem.classList.contains("zoomOut")){ // Zoom-out animation starts here
        elem.classList.remove("zoomOut");
        elem.classList.add("zoomOut-Prev");
        setTimeout(() => {
            elem.classList.remove("zoomOut-Prev");
            elem.classList.add("zoomOut");
        }, 50);
    } else if(elem.classList.contains("zoomOut-U")) {
        elem.classList.remove("zoomOut-U");
        elem.classList.add("zoomOut-U-Prev");
        setTimeout(() => {
            elem.classList.remove("zoomOut-U-Prev");
            elem.classList.add("zoomOut-U");
        }, 50);
    } else if(elem.classList.contains("zoomOut-D")) {
        elem.classList.remove("zoomOut-D");
        elem.classList.add("zoomOut-D-Prev");
        setTimeout(() => {
            elem.classList.remove("zoomOut-D-Prev");
            elem.classList.add("zoomOut-D");
        }, 50);
    } else if(elem.classList.contains("zoomOut-L")) {
        elem.classList.remove("zoomOut-L");
        elem.classList.add("zoomOut-L-Prev");
        setTimeout(() => {
            elem.classList.remove("zoomOut-L-Prev");
            elem.classList.add("zoomOut-L");
        }, 50);
    } else if(elem.classList.contains("zoomOut-R")) {
        elem.classList.remove("zoomOut-R");
        elem.classList.add("zoomOut-R-Prev");
        setTimeout(() => {
            elem.classList.remove("zoomOut-R-Prev");
            elem.classList.add("zoomOut-R");
        }, 50);
    }else if(elem.classList.contains("rotateOut")){ // Rotate-out animation starts here
        elem.classList.remove("rotateOut");
        elem.classList.add("rotateOut-Prev");
        setTimeout(() => {
            elem.classList.remove("rotateOut-Prev");
            elem.classList.add("rotateOut");
        }, 50);
    } else if(elem.classList.contains("rotateOut-L")) {
        elem.classList.remove("rotateOut-L");
        elem.classList.add("rotateOut-L-Prev");
        setTimeout(() => {
            elem.classList.remove("rotateOut-L-Prev");
            elem.classList.add("rotateOut-L");
        }, 50);
    } else if(elem.classList.contains("rotateOut-R")) {
        elem.classList.remove("rotateOut-R");
        elem.classList.add("rotateOut-R-Prev");
        setTimeout(() => {
            elem.classList.remove("rotateOut-R-Prev");
            elem.classList.add("rotateOut-R");
        }, 50);
    }
}


document.querySelectorAll('.toggleMe').forEach((elemt)=>{

    elemt.addEventListener('click',(e)=>{
        const targetClass = Array.from(e.target.classList)

        try {
            const found =  targetClass.find(element => element.startsWith('toggleParent-')).split('toggleParent-')[1];
            toggleElement(found)
            } catch (error) {
                console.log('toggleMe class should be followed by "toggleParent-ClassName"',error)
            }
    

    })
})

function toggleElement(elementName){

    const childElem = Array.from(document.querySelectorAll(`.toggleChild-${elementName}`))

    for(let i=0;i<childElem.length;i++){
        if(childElem[i].classList.contains('hidden')){
            childElem[i].classList.remove("hidden");
        }else{
            childElem[i].classList.add("hidden");
        }
    }

}
