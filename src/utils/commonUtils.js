const INFINITY_SCROLL_GAP = 500;

export const bindEvent = (state, window, fn) => {
        console.log('스크롤 이벤트');
        if(state.isFinish || state.isLoading || parseInt(window.innerHeight + window.scrollY) + INFINITY_SCROLL_GAP <= window.document.documentElement.offsetHeight) {
            return;
        }        
        console.log('데이터 가져오기');
        fn();  
    }