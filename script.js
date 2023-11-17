document.addEventListener("DOMContentLoaded", () => {
    let darkInfo;
    if (!localStorage.getItem("dark"))
        localStorage.setItem("dark", false); 
    darkInfo = JSON.parse(localStorage.getItem("dark"));

    const switchDark = () =>{

        document.querySelector("body").classList.add('dark');
        document.querySelector(".dark-mode-icon").classList.add('dark')
    }

    const switchLight = () => {
        document.querySelector("body").classList.remove('dark');
        document.querySelector(".dark-mode-icon").classList.remove('dark')
    }


    if (darkInfo === true)
        switchDark();
    else
        switchLight();
    
    document.querySelector(".btn").addEventListener('click', () => {

        if (darkInfo){
            darkInfo = false;
            switchLight();
        } else {
            darkInfo = true;
            switchDark();
        }
        localStorage.setItem("dark", darkInfo);
    })

})