export default function TodoContainer({ children }) {
  return <ul className="flex flex-col gap-2 w-[90%] lg:w-1/3">{children}</ul>;
}
