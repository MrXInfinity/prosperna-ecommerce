import cn from "../utils/cnMerger";

export default function Container({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        " mx-auto flex w-full max-w-7xl justify-center items-center px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
