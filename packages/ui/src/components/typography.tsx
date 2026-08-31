import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight text-foreground lg:text-5xl",
        className
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl",
        className
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl",
        className
      )}
      {...props}
    />
  )
}

function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-foreground lg:text-2xl",
        className
      )}
      {...props}
    />
  )
}

function H5({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight text-foreground lg:text-xl",
        className
      )}
      {...props}
    />
  )
}

function H6({ className, ...props }: React.ComponentProps<"h6">) {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight text-foreground lg:text-lg",
        className
      )}
      {...props}
    />
  )
}

function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("leading-7 text-foreground", className)}
      {...props}
    />
  )
}

function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  )
}

function Large({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function Small({ className, ...props }: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function Muted({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function Blockquote({ className, ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-border pl-6 italic text-foreground",
        className
      )}
      {...props}
    />
  )
}

function List({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-foreground", className)}
      {...props}
    />
  )
}

function OrderedList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground", className)}
      {...props}
    />
  )
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Lead,
  Large,
  Small,
  Muted,
  Blockquote,
  List,
  OrderedList,
  Code,
}
