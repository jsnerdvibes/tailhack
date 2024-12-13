const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        // console.log(entry.target)
        if(entry.isIntersecting){
            console.log("is Visible")
        }else{
            console.log("Not visible")
        }

    })
})

const  isHidden = document.querySelectorAll(".isHidden")

isHidden.forEach((el)=>observer.observe(el))
