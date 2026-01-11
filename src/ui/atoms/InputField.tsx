import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputField = ({ label, className, ...props }: InputFieldProps) => (
    <div className="flex flex-col gap-2 group">
        <label className="text-xs font-mono text-primary/70 uppercase tracking-widest group-focus-within:text-primary transition-colors">
            {`// ${label}`}
        </label>
        <input
            className={cn(
                "bg-black/20 border border-white/10 rounded-sm p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/10 backdrop-blur-sm",
                className
            )}
            autoComplete="off"
            {...props}
        />
    </div>
);
