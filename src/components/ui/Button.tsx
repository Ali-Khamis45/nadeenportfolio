import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-accent font-medium transition-colors duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-on-accent hover:bg-accent-2 shadow-[0_0_0_0_rgba(0,200,215,0)] hover:shadow-[0_0_32px_-4px_rgba(0,200,215,0.55)]",
        secondary:
          "border border-border text-text hover:border-accent/60 hover:text-accent bg-transparent",
        ghost: "text-muted hover:text-accent bg-transparent",
      },
      size: {
        md: "h-12 px-6 text-sm",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
};

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant, size, magnetic = true } = props;
  const classes = cn(buttonStyles({ variant, size }), className);

  let content: ReactNode;
  if ("href" in props && props.href) {
    const { href, target, rel, download, onClick } = props;
    content = (
      <Link href={href} target={target} rel={rel} download={download} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, magnetic, className: _c, children: _ch, variant: _v, size: _s, ...buttonRest } =
      props as ButtonAsButton;
    content = (
      <button className={classes} {...buttonRest}>
        {children}
      </button>
    );
  }

  if (!magnetic) return content;
  return <Magnetic strength={0.25}>{content}</Magnetic>;
}
