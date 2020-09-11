export const useConfirm = (message="", onConfirm, onCancel) => {
    if(onConfirm && typeof onConfirm !== "function"){
        return;
    };
    if(onCancel && typeof onCancel !=="function"){
        return;
    }
    const confirmAction = () =>{
        if (window.confirm(message)){ //No restricted Globals에 대한 대책
            onConfirm();
        } else {
            onCancel()
        }
    };

    return confirmAction;
};