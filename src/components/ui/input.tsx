import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import cn from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

interface InputProps extends React.ComponentProps<"input"> {
    showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, showPasswordToggle = false, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const isPasswordType = type === "password";

        return (
            <div className='relative'>
                <input
                    type={
                        isPasswordType && showPasswordToggle
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        isPasswordType && showPasswordToggle && "pr-10",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {isPasswordType && showPasswordToggle && (
                    <Button
                        type='button'
                        variant='ghost'
                        size='sm'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 transform p-1 text-palette-140 hover:text-palette-260'
                        disabled={props.disabled}
                    >
                        {showPassword ? (
                            <EyeOff className='h-4 w-4' />
                        ) : (
                            <Eye className='h-4 w-4' />
                        )}
                    </Button>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export default Input;
