import { useState } from 'react';
import OrderOptionCard from './components/OrderOptionCard.jsx';
import { BASE_PAIR_COST, ORDER_OPTIONS } from './data/orderOptions.js';

const currencyFormatter = new Intl.NumberFormat('en-PK', {
  style: 'currency',
  currency: 'PKR',
  maximumFractionDigits: 0,
});

function SandalWatermarks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 260 220"
        className="absolute left-[4%] top-[12%] hidden h-44 w-52 rotate-[-16deg] text-white/14 blur-[0.2px] md:block"
        fill="none"
      >
        <path
          d="M80 38c8-7 20-4 24 6l18 50c12 2 21 7 29 16 9 11 15 27 17 47 1 11-8 21-20 21H91c-13 0-25-9-28-22-3-12-1-25 6-37 7-11 17-19 30-23l-29-38c-6-8-5-15 10-20Z"
          fill="currentColor"
        />
        <path
          d="M93 59c11 14 19 32 24 54m-13-34 28-9m-39 48c18-5 33-5 49 2m-48 20h53m-44-57c3-20 18-34 35-38"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        viewBox="0 0 280 180"
        className="absolute right-[8%] top-[19%] hidden h-32 w-52 rotate-[12deg] text-white/12 blur-[0.2px] lg:block"
        fill="none"
      >
        <path
          d="M31 118c24-20 53-37 119-61 11-4 21 2 24 13l8 24c4 13 15 22 29 24l40 4c8 1 10 12 3 16-11 6-22 10-35 10H76c-34 0-58-15-45-30Z"
          fill="currentColor"
        />
        <path
          d="M62 111c18-6 34-18 52-38m-22 51h83m-58-23 53 10m-84 1 40 8m37-34 23 24"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        viewBox="0 0 250 210"
        className="absolute bottom-[10%] left-[18%] hidden h-40 w-48 rotate-[10deg] text-white/12 blur-[0.2px] md:block"
        fill="none"
      >
        <path
          d="M92 50c6-10 21-11 29-1l24 34c15 3 28 11 37 24 10 13 16 31 17 52 1 12-9 22-22 22h-63c-16 0-30-11-34-26-4-17-1-34 10-48 9-12 21-20 36-24L92 50Z"
          fill="currentColor"
        />
        <path
          d="M107 68c10 11 18 24 24 40m-23 9c20-5 36-4 55 4m-55 20h59m-37-73c13 0 24 5 33 14"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        viewBox="0 0 260 170"
        className="absolute bottom-[7%] right-[4%] hidden h-28 w-44 rotate-[-10deg] text-white/10 blur-[0.2px] sm:block"
        fill="none"
      >
        <path
          d="M39 114c22-20 49-35 112-58 10-4 19 1 23 11l7 21c5 14 16 23 31 25l29 4c8 1 10 12 3 16-10 6-22 9-35 9H83c-32 0-55-15-44-28Z"
          fill="currentColor"
        />
        <path
          d="M74 104c17-9 31-21 47-39m-18 55h77m-56-27 51 12m-37-20 27 18"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOption = (optionKey) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(optionKey)
        ? currentOptions.filter((item) => item !== optionKey)
        : [...currentOptions, optionKey],
    );
  };

  const selectedExtrasTotal = selectedOptions.reduce((sum, optionKey) => {
    const matchingOption = ORDER_OPTIONS.find((option) => option.key === optionKey);
    return sum + (matchingOption?.price ?? 0);
  }, 0);

  const totalPrice = BASE_PAIR_COST + selectedExtrasTotal;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbfb] text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,_#dff4f5_0%,_#8fd0d1_35%,_#73b7b5_65%,_#6aa6a5_100%)]" />
        <SandalWatermarks />
        <div className="absolute -left-[16%] top-16 h-[34rem] w-[34rem] rounded-full border-[38px] border-white/85 bg-white shadow-[0_40px_120px_rgba(111,168,166,0.2)]" />
        <div className="absolute left-[19%] top-[-6rem] h-[30rem] w-[30rem] rounded-full border-[24px] border-[#6db8b7]/70" />
        <div className="absolute -right-28 top-14 h-80 w-80 rounded-full border-[22px] border-white/90" />
        <div className="absolute bottom-16 right-[12%] h-32 w-32 rounded-full bg-white/18 blur-2xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="relative flex items-center rounded-full border border-white/55 bg-white/78 px-5 py-2.5 shadow-[0_18px_60px_rgba(65,120,118,0.14)] backdrop-blur md:px-8">
            <div className="flex items-center">
              <img
                src="/solestories.avif"
                alt="SoleStories logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[12px] uppercase tracking-[0.18em] text-slate-700 lg:flex">
              <span>Custom Orders</span>
              <span>Handcrafted</span>
              <span>Made for You</span>
            </div>
          </div>

          <div className="relative z-10 grid flex-1 items-center gap-10 pb-6 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pt-14">
            <div className="relative">
              <div className="relative max-w-2xl">
                <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[#efe5ff] blur-2xl md:block" />
                <div className="absolute left-10 top-24 hidden h-[26rem] w-[26rem] rounded-full border-[20px] border-white/85 md:block" />

                <div className="relative rounded-[2.25rem] bg-white/95 p-5 shadow-[0_35px_100px_rgba(87,135,133,0.18)] ring-1 ring-white/75 md:p-7">
                  <div className="absolute left-5 top-5 rounded-full bg-[#6db8b7]/12 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#347775]">
                    Made to measure
                  </div>

                  <div className="mt-12 space-y-5">
                    <div className="space-y-3">
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#347775]">
                        Custom Calculator
                      </p>
                      <h1 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[3.25rem]">
                        Calculator for customized orders
                      </h1>
                      <p className="max-w-xl text-sm leading-6 text-slate-600">
                        Build your custom pair estimate with the same clean, crafted feel as the rest of
                        SoleStories. Your total updates instantly as you select the finishing details you
                        need.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-[#6db8b7]/15 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(232,248,248,0.92))] p-4 shadow-sm md:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Base pair cost
                        </p>
                        <p className="mt-2.5 text-[1.75rem] font-semibold tracking-[-0.03em] text-slate-950">
                          {currencyFormatter.format(BASE_PAIR_COST)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          This amount is always included, even before any custom add-ons are selected.
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/70 bg-[linear-gradient(160deg,_#6db8b7_0%,_#7cc7c5_48%,_#9fdbd8_100%)] p-4 text-white shadow-[0_24px_55px_rgba(84,153,150,0.24)] md:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                          Selected extras
                        </p>
                        <p className="mt-2.5 text-[1.75rem] font-semibold tracking-[-0.03em]">
                          {currencyFormatter.format(selectedExtrasTotal)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/80">
                          Choose the services below to calculate the final customized order amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 top-5 h-24 rounded-full bg-[#74c0be]/20 blur-3xl" />

              <section className="relative rounded-[2.15rem] border border-white/70 bg-white/84 p-5 shadow-[0_35px_100px_rgba(70,126,124,0.18)] backdrop-blur sm:p-6 lg:p-7">
                <div className="flex flex-col gap-3 border-b border-slate-900/8 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#347775]">
                      Options
                    </p>
                    <h2 className="mt-2.5 text-[1.75rem] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[2rem]">
                      Customize your order
                    </h2>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-slate-600">
                    Prices stay hidden in the interface, but every selection is reflected in the total
                    below.
                  </p>
                </div>

                <div className="mt-5 grid gap-3.5">
                  {ORDER_OPTIONS.map((option) => (
                    <OrderOptionCard
                      key={option.key}
                      label={option.label}
                      description={option.description}
                      checked={selectedOptions.includes(option.key)}
                      onToggle={() => handleToggleOption(option.key)}
                    />
                  ))}
                </div>

                <div className="mt-6 rounded-[1.75rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#134e4a_35%,_#6db8b7_100%)] p-5 text-white shadow-[0_30px_80px_rgba(19,78,74,0.28)] transition-all duration-300 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                        Total price
                      </p>
                      <p className="mt-2.5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                        {currencyFormatter.format(totalPrice)}
                      </p>
                    </div>
                    <div className="max-w-xs">
                      <p className="text-sm leading-6 text-white/78">
                        Total Price = base pair cost + all currently selected customization options.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
