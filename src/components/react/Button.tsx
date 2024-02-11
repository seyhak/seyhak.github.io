import classNames from "classnames"
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames([
        "Button px-3 py-1 rounded bg-slate-400/20 dark:bg-white/20",
        "hover:shadow-lg hover:shadow-slate-400 dark:hover:shadow-blue-800",
        "transition-shadow duration-500 disabled:opacity-10",
        className
      ])}
    >
      {children}
    </button>
  )
}
