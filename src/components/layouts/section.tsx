import { cn } from "@/lib/utils";
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export interface SectionProps extends ComponentProps<"section"> {
  gradient?: boolean;
  containerClassName?: string;
}

const Section: ForwardRefExoticComponent<
  PropsWithoutRef<SectionProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, SectionProps>(
  (
    { children, id, className, gradient, containerClassName, ...props },
    ref
  ) => {
    return (
      <div className={cn("relative", containerClassName)}>
        <section
          id={id}
          className={cn("container mx-auto px-8  pt-20 pb-8", className)}
          ref={ref}
          {...props}
        >
          {children}
        </section>
        {gradient && (
          <div className="bottom-2 lg:-bottom-8 left-1/2 -z-10 absolute bg-blue-500/50 dark:bg-blue-700/50 blur-3xl mx-auto rounded-full w-[90%] h-24 lg:h-80 -translate-x-1/2 transform"></div>
        )}
      </div>
    );
  }
);

Section.displayName = "Section";

export default Section;
