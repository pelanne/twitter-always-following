var clicked=0;

const observer = new MutationObserver((mutations, obs) => {
    if (clicked==0){
        const follow = document.querySelectorAll("a");
        for (i = 0; i < follow.length; ++i) {          
            if (follow[i] && follow[i].innerText=="Following"){
                if (follow[i] && clicked==0) {
                    follow[i].click();
                    clicked=1;
                    obs.disconnect();
                    return;
                }
            }
        }
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});
