function CategoryBadge({ children }) {
  return (
    <span className="inline-block rounded border border-border bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
      {children}
    </span>
  )
}

export default CategoryBadge