const useBeforeLeave = (onBefore) => {
    // if (typeof onBefore !=="function"){
    //     return;
    // };
    const handle = (event) =>{
        console.log(event);
        console.log("leaving");
        const { clientY} = event;
        if (clientY <=0){
        onBefore();
        }
    };
    useEffect(()=>{
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []) //계속해서 이벤트가 Documet에 추가되는 것을 막아줌

    if (typeof onBefore !=="function"){
        return;
    };
}