import './rules.css';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import type { RulesProps } from "./types";
import Close from "../../../assets/images/icon-close.svg";
import RulesImg from "../../../assets/images/image-rules.svg";

const Rules = (props: RulesProps) => {
    const { isOpen, onClose } = { ...props }
    
    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose}
            transition
            className='dialog'
        >
            <DialogBackdrop className='dialog__backdrop' />
            <div className='dialog__container'>
                <DialogPanel className='dialog__panel'>
                    <div className='dialog__header'>
                        <DialogTitle className='dialog__title'>RULES</DialogTitle>
                        <CloseButton 
                            type='button'
                            title='Close'
                            className='dialog__close'
                        >
                            <img 
                                src={Close}
                                alt='close'
                            />
                        </CloseButton>
                    </div>
                    <img
                        src={RulesImg}
                        alt='rules'
                        className='rules__image'
                    />
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default Rules;