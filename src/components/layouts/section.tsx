import { cn } from "@/lib/utils";
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SectionProps extends ComponentProps<"section"> {}

const Section: ForwardRefExoticComponent<
  PropsWithoutRef<SectionProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn("container mx-auto px-8 py-12", className)}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
