"use client";

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastIcon,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/src/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const Toaster = () => {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(
                ({ id, title, description, action, variant, ...props }) => (
                    <Toast key={id} variant={variant} {...props}>
                        <div className='flex items-start gap-4'>
                            <ToastIcon variant={variant} />
                            <div className='grid flex-1 gap-1'>
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && (
                                    <ToastDescription>
                                        {description}
                                    </ToastDescription>
                                )}
                            </div>
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                )
            )}
            <ToastViewport />
        </ToastProvider>
    );
};

export default Toaster;
