export default function Heading({ title }: { title: string }) {
  return (
    <h1 className="text-center text-[2.5rem] sm:text-[3rem] font-bold font-name bg-gradient-to-r ease-in-out via-blue-500 bg-clip-text text-transparent
              from-green-300 to-green-300 animate-text">
      &lt;{title} /&gt;
    </h1>
  )
}
