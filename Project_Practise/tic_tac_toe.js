let btns = document.querySelectorAll(".btn")
console.log(typeof(btns), btns)

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        console.log("a")
    })
    console.log(typeof(btn),btn)
    
})


