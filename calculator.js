let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((btn) => {
    let e = btn.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C')
        {
            let str = document.getElementById('input');
            // string = string.slice(0,str.value.length-1);
            string = string.slice(0,string.length-1);
            // string = str.value.substring(0,str.value.length-1)
            document.querySelector('input').value = string;
        }
        else
        {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});