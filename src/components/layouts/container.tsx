import { cn } from "@/lib/utils";
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ContainerProps extends ComponentProps<"div"> {}

const Container: ForwardRefExoticComponent<
  PropsWithoutRef<ContainerProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("container mx-auto", className)} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
