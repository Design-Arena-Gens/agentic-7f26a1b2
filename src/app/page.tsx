import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badges?: string[];
  colors?: string[];
};

const navigation = [
  { href: "#featured", label: "Featured" },
  { href: "#collections", label: "Collections" },
  { href: "#highlights", label: "Highlights" },
  { href: "#stories", label: "Stories" },
];

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Aether Series Headphones",
    description:
      "Studio-grade sound, adaptive noise cancellation, and 36-hour battery life.",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    badges: ["New Arrival"],
    colors: ["#1c1c20", "#e0d6c8", "#f5f5f5"],
  },
  {
    id: 2,
    name: "Prism Smart Speaker",
    description:
      "Immersive 360° sound with voice control, room calibration, and ambient lighting.",
    price: "$179",
    image:
      "https://images.unsplash.com/photo-1512446733611-9099a758e0f9?auto=format&fit=crop&w=1200&q=80",
    badges: ["Best Seller"],
    colors: ["#0f172a", "#f97316", "#38bdf8"],
  },
  {
    id: 3,
    name: "Nebula Air Purifier",
    description:
      "Triple-layer HEPA filtration with smart monitoring for healthier spaces.",
    price: "$219",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    colors: ["#f1f5f9", "#64748b", "#0f172a"],
  },
  {
    id: 4,
    name: "Velar Modular Lamp",
    description:
      "Sculptural lighting that adapts to your mood with 64 ambient presets.",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    badges: ["Limited"],
    colors: ["#fb923c", "#0369a1", "#1e293b"],
  },
];

const collections = [
  {
    title: "Calm Interiors",
    description: "Soft palettes and organic forms designed to restore balance.",
    image:
      "https://images.unsplash.com/photo-1616628188505-404b4be1524a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Future Sound",
    description: "Clean geometry meets responsive controls for pure listening.",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1600&q=80",
  },
];

const highlights = [
  {
    title: "Complimentary 2-Day Shipping",
    description: "Fast, carbon-neutral delivery on every order with easy tracking.",
  },
  {
    title: "45-Day Risk-Free Trial",
    description:
      "Live with your purchase before you commit. Free returns and exchanges.",
  },
  {
    title: "Responsible Design",
    description:
      "Recycled materials and fair manufacturing across our entire lineup.",
  },
];

const testimonials = [
  {
    quote:
      "The products feel curated around how people actually live. Each piece elevates my space without overwhelming it.",
    name: "Lena Hernandez",
    role: "Interior Designer",
  },
  {
    quote:
      "Every detail feels intentional—from packaging to performance. Easily my favorite destination for thoughtful tech.",
    name: "Arjun Patel",
    role: "Sound Producer",
  },
];

const journal = [
  {
    title: "Our Design Process",
    excerpt:
      "Go behind the scenes with our product team to see how new collections start as sketches before becoming reality.",
    date: "May 28, 2024",
    link: "#",
  },
  {
    title: "Living with Less, Living Better",
    excerpt:
      "Practical ways to curate a mindful home with pieces that spark joy and serve a purpose.",
    date: "May 14, 2024",
    link: "#",
  },
];

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="h-4 w-4 rounded-full border border-white/40 shadow-sm"
      style={{ backgroundColor: color }}
    />
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden">
        <div className="mx-auto h-full max-w-6xl px-10">
          <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="absolute inset-x-10 top-0 h-64 rounded-b-3xl bg-white/90 shadow-lg shadow-slate-200/80 backdrop-blur-xl" />
        </div>
      </div>

      <header className="relative z-10 border-b border-white/40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            lumen.
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 transition-colors hover:border-slate-400/70 hover:text-slate-900 md:inline-flex">
              Sign in
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">
              Bag (0)
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-8">
            <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm ring-1 ring-slate-200/80">
              Elevated daily living
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Modern pieces that move with the rhythm of your home.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
              Discover tactile technology, sculptural lighting, and calming
              atmospheres. Our award-winning designers bring intentionality to
              every detail—so you can create spaces that are as functional as
              they are inspiring.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Shop the collection
              </Link>
              <Link
                href="#stories"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
              >
                Explore our story
              </Link>
            </div>
            <dl className="grid gap-6 pt-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Community
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  120k+
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Materials diverted
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  18 tons
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Satisfaction
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  4.9 / 5
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-6 hidden h-52 w-52 rounded-full bg-rose-200/50 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-3xl border border-white/40 bg-white shadow-xl shadow-slate-200/60 backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80"
                alt="Living room with modern interior products"
                width={900}
                height={1050}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="space-y-8 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-200/60 backdrop-blur"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Featured pieces
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
                Handpicked essentials that pair intuitive technology with a calm,
                tactile finish—designed to be used every day.
              </p>
            </div>
            <Link
              href="#collections"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
            >
              View all products
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white transition-shadow hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {product.badges && (
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {product.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow ring-1 ring-slate-200/80"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-6 p-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600">{product.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-base font-semibold text-slate-950">
                      {product.price}
                    </p>
                    {product.colors && (
                      <div className="flex items-center gap-2">
                        {product.colors.map((color) => (
                          <ColorSwatch key={color} color={color} />
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Add to bag
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="highlights"
          className="grid gap-6 rounded-3xl border border-white/60 bg-slate-900 px-8 py-12 text-white shadow-lg shadow-slate-300/20 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200">{item.description}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Included with every order
              </span>
            </div>
          ))}
        </section>

        <section
          id="collections"
          className="grid gap-8 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-200/60 backdrop-blur lg:grid-cols-2"
        >
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-96 overflow-hidden rounded-3xl">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {collection.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200">
                    {collection.description}
                  </p>
                  <button className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Discover now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="stories"
          className="grid gap-8 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-200/60 backdrop-blur lg:grid-cols-[1.2fr,1fr]"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Journal
            </h2>
            <div className="space-y-6">
              {journal.map((entry) => (
                <article
                  key={entry.title}
                  className="group space-y-3 rounded-2xl border border-slate-200/60 p-6 transition-colors hover:border-slate-300/80"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {entry.date}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-950 group-hover:text-slate-700">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-slate-600">{entry.excerpt}</p>
                  <Link
                    href={entry.link}
                    className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-slate-700"
                  >
                    Read the story
                    <span aria-hidden className="ml-2 text-base">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">
              “Listening to our community shapes everything we create.”
            </h3>
            <p className="text-sm text-slate-200">
              We collaborate with artisans, engineers, and sustainability experts
              to ensure each collection has a light footprint and a lasting
              impact. Thoughtful design is our way of honoring daily rituals.
            </p>
            <div className="space-y-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-2xl bg-white/5 p-5 text-sm text-slate-100 backdrop-blur"
                >
                  {testimonial.quote}
                  <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-200/60 backdrop-blur md:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Stay inspired with lumen.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Exclusive previews, early access to new drops, and stories on
              creating mindful environments—delivered once a week.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200/60"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Join the list
            </button>
          </form>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-950">lumen.</p>
            <p>Objects for calm and considered living.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Shop
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition hover:text-slate-900" href="#featured">
                  Best sellers
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#collections">
                  Collections
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#highlights">
                  Guarantees
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Company
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition hover:text-slate-900" href="#stories">
                  Journal
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Support
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition hover:text-slate-900" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#">
                  Shipping & returns
                </a>
              </li>
              <li>
                <a className="transition hover:text-slate-900" href="#">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/60 bg-white/70 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} lumen. All rights reserved.</span>
            <span className="space-x-4">
              <a className="transition hover:text-slate-700" href="#">
                Privacy
              </a>
              <a className="transition hover:text-slate-700" href="#">
                Terms
              </a>
              <a className="transition hover:text-slate-700" href="#">
                Accessibility
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
