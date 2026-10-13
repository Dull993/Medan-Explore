const destinations = [
  {
    id: 1,
    category_id: "sejarah",
    category: "Wisata Sejarah",
    name: "Istana Maimun",
    address: "Jl. Brigjen Katamso, Medan Maimun, Kota Medan",
    short_description:
      "Ikon Kesultanan Deli (1888) dengan arsitektur perpaduan Melayu, Islam, Spanyol, India, dan Belanda.",
    image: "./images/istana-maimun.jpg",
    is_top: true,
  },
  {
    id: 2,
    category_id: "sejarah",
    category: "Wisata Sejarah",
    name: "Masjid Raya Al-Mashun",
    address: "Jl. Sisingamangaraja, Medan Kota, Kota Medan",
    short_description:
      "Masjid peninggalan Kesultanan Deli dengan arsitektur khas Timur Tengah, Maroko, dan Spanyol.",
    image: "./images/masjid-raya-al-mashun.jpg",
    is_top: false,
  },
  {
    id: 3,
    category_id: "sejarah",
    category: "Wisata Sejarah",
    name: "Tjong A Fie Mansion",
    address: "Jl. Jenderal Ahmad Yani, Kesawan, Kota Medan",
    short_description:
      "Rumah bersejarah pengusaha Tjong A Fie (1895) yang memadukan gaya Tionghoa, Eropa, dan Art Deco.",
    image: "./images/tjong-a-fie.jpg",
    is_top: true,
  },
  {
    id: 4,
    category_id: "sejarah",
    category: "Wisata Sejarah",
    name: "Pos Bloc Medan",
    address: "Kawasan Kesawan, Kota Medan",
    short_description:
      "Gedung Kantor Pos peninggalan Belanda yang kini menjadi ruang kreatif, kafe, dan pusat komunitas.",
    image: "./images/pos-bloc.jpg",
    is_top: false,
  },
  {
    id: 5,
    category_id: "sejarah",
    category: "Wisata Sejarah",
    name: "Kampung Madras (Little India)",
    address: "Dekat Kuil Shri Mariamman, Kota Medan",
    short_description:
      "Perkampungan India dengan bangunan bersejarah dan kuliner khas.",
    image: "./images/kampung-madras.jpg",
    is_top: true,
  },
  {
    id: 6,
    category_id: "alam",
    category: "Wisata Alam",
    name: "Taman Cadika",
    address: "Medan Johor, Kota Medan",
    short_description:
      "Ruang terbuka hijau dengan danau buatan, area kemping, kuda, rusa, dan kayak.",
    image: "./images/taman-cadika.jpg",
    is_top: true,
  },
  {
    id: 7,
    category_id: "alam",
    category: "Wisata Alam",
    name: "Taman Wisata Danau Siombak",
    address: "Medan Marelan, Kota Medan",
    short_description:
      "Danau buatan untuk bersantai, memancing, dan naik perahu.",
    image: "./images/danau-siombak.jpg",
    is_top: false,
  },
  {
    id: 8,
    category_id: "alam",
    category: "Wisata Alam",
    name: "Taman Burung Cemara Asri",
    address: "Perbatasan Kota Medan dan Deli Serdang",
    short_description:
      "Area konservasi burung tempat ribuan burung pulang ke sarang setiap sore.",
    image: "./images/taman-burung-cemara-asri.jpg",
    is_top: false,
  },
  {
    id: 9,
    category_id: "alam",
    category: "Wisata Alam",
    name: "Penangkaran Buaya Asam Kumbang",
    address: "Asam Kumbang, Kota Medan",
    short_description:
      "Penangkaran buaya terbesar di Indonesia yang sudah ada sejak lama.",
    image: "./images/penangkaran-buaya.jpg",
    is_top: false,
  },
  {
    id: 10,
    category_id: "rekreasi",
    category: "Wisata Rekreasi",
    name: "Rahmat International Wildlife Museum & Gallery",
    address: "Kota Medan",
    short_description:
      "Museum dengan ribuan koleksi satwa liar dari seluruh dunia yang diawetkan.",
    image: "./images/rahmat-wildlife-museum.jpg",
    is_top: false,
  },
  {
    id: 11,
    category_id: "rekreasi",
    category: "Wisata Rekreasi",
    name: "T-Garden (Little Bali in Medan)",
    address: "Namorambe, Deli Serdang",
    short_description:
      "Tempat rekreasi bernuansa khas Pulau Bali di pinggiran Medan.",
    image: "./images/t-garden.jpg",
    is_top: false,
  },
  {
    id: 12,
    category_id: "kuliner",
    category: "Kuliner",
    name: "Ucok Durian",
    address: "Kota Medan",
    short_description:
      "Surga bagi pecinta durian, buka dari pagi hingga malam.",
    image: "./images/ucok-durian.jpg",
    is_top: true,
  },
  {
    id: 13,
    category_id: "kuliner",
    category: "Kuliner",
    name: "Merdeka Walk",
    address: "Pusat Kota Medan",
    short_description:
      "Pusat kuliner outdoor di jantung kota yang ramai saat malam hari.",
    image: "./images/merdeka-walk.jpg",
    is_top: true,
  },
  {
    id: 14,
    category_id: "kuliner",
    category: "Kuliner",
    name: "Pusat Bolu Meranti",
    address: "Jl. Kruing, Kota Medan",
    short_description:
      "Tempat membeli oleh-oleh bolu gulung legendaris Medan.",
    image: "./images/bolu-meranti.jpg",
    is_top: false,
  },
];

const getDestinations = () => Promise.resolve(destinations);

// TOP DESTINATION
const toneByCategory = {
  sejarah: "bg-red-900",
  alam: "bg-green-900",
  rekreasi: "bg-yellow-800",
  kuliner: "bg-orange-950",
};

const renderCard = (d, i) => {
  const big = i === 0;
  return `
  <article class="group flex flex-col ${big ? "lg:col-span-2 lg:row-span-2" : ""}">
    <div class="${toneByCategory[d.category_id]} motif relative isolate aspect-4/3 overflow-hidden ${big ? "lg:aspect-auto lg:min-h-96 lg:flex-1" : ""}">
      <img src="${d.image}" alt="${d.name}" loading="lazy"
        class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div class="border-t-2 border-green-950 pt-4">
      <p class="flex items-baseline gap-3">
        <span class="font-display text-sm font-bold text-red-900">${String(i + 1).padStart(2, "0")}</span>
        <span class="text-xs font-semibold tracking-widest text-stone-600 uppercase">${d.category}</span>
      </p>
      <h3 class="mt-2 ${big ? "text-3xl md:text-4xl" : "text-2xl"} font-bold text-green-950 transition-colors group-hover:text-red-900">${d.name}</h3>
      <p class="mt-1 text-sm text-stone-600">${d.address}</p>
      <p class="mt-2 text-stone-800">${d.short_description}</p>
    </div>
  </article>`;
};

const renderTopDestination = async () => {
  const list = document.getElementById("top-destination-list");
  if (!list) return;
  const all = await getDestinations();
  list.innerHTML = all.filter((d) => d.is_top).map((d, i) => renderCard(d, i)).join("");
};

// NAVBAR
const header = document.getElementById("navbar");
const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");
const desktop = window.matchMedia("(min-width: 48rem)"); // = breakpoint md Tailwind

let isOpen = false;

const setMenu = (open) => {
  isOpen = open && !desktop.matches; // di desktop menu tidak pernah "terbuka"
  menu.classList.toggle("translate-x-full", !isOpen);
  menu.toggleAttribute("inert", !desktop.matches && !isOpen); // inert hanya saat mobile & tertutup
  header.toggleAttribute("data-open", isOpen);
  btn.setAttribute("aria-expanded", isOpen);
  btn.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  document.getElementById("icon-open").classList.toggle("hidden", isOpen);
  document.getElementById("icon-close").classList.toggle("hidden", !isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
};

btn.addEventListener("click", () => setMenu(!isOpen));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
desktop.addEventListener("change", () => setMenu(false)); // rapikan state saat layar di-resize
setMenu(false);

renderTopDestination();