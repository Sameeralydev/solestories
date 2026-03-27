function OrderOptionCard({ label, description, checked, onToggle }) {
  return (
    <label
      className={`group flex cursor-pointer items-start gap-3.5 rounded-[1.5rem] border p-4 transition-all duration-300 sm:p-4.5 ${
        checked
          ? 'border-[#6db8b7]/70 bg-[linear-gradient(135deg,_rgba(236,250,250,0.98),_rgba(219,243,243,0.96))] shadow-[0_18px_50px_rgba(109,184,183,0.18)]'
          : 'border-slate-900/8 bg-white/78 shadow-sm hover:border-[#6db8b7]/35 hover:bg-[#fbfefe]'
      }`}
    >
      <div className="relative mt-1">
        <input checked={checked} onChange={onToggle} type="checkbox" className="peer sr-only" />
        <span
          className={`flex h-5.5 w-5.5 items-center justify-center rounded-full border transition-all duration-300 ${
            checked
              ? 'border-[#347775] bg-[#347775] text-white'
              : 'border-slate-300 bg-white text-transparent group-hover:border-[#6db8b7]'
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3 stroke-current stroke-[3]">
            <path d="M4 10.5 8 14l8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-base font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.05rem]">
              {label}
            </p>
            <p className="mt-1 text-sm leading-5.5 text-slate-600">{description}</p>
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
              checked ? 'bg-[#347775] text-white' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {checked ? 'Selected' : 'Optional'}
          </span>
        </div>
      </div>
    </label>
  );
}

export default OrderOptionCard;
