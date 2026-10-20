// PINTAARA - VERTICAL SLIDER CONFIGURATION
// You can easily update background images, slide themes, titles, and text contents here.
//
// CONCEPT IMAGES (from PINTAARA/Website concept/) are now in public/images/:
//   concept-enter.png      → Slide 1 – Dark stone + butterfly (Enter screen)
//   concept-philosophy.png → Slide 2 – Green crystal mountain (Philosophy)
//   concept-collection.png → Slide 3 – Robot pen drawing jewellery (Collection)
//   concept-banner.png     → Slide 4 – Butterfly pendant on grey rock (Banner)
//   concept-designlog.png  → Slide 5 – Pencil sketch to 3D jewel (Design Log)
//   concept-ourstory.png   → Slide 6 – Glowing mountain in clouds (Our Story)
//   concept-footer.png     → Slide 7 – Dark moody mountain (Footer)
//   concept-hero.png       → Alt hero (dark stone, wider crop)

export const ENTER_PAGE_CONFIG = {
    bgImage: "/images/concept-enter.png",
    bgPosition: "center",
    title: "PINTAARA",
    buttonText: "ENTER"
};

export const PINTAARA_CONFIG = {
    // Show or hide the navigation header globally
    showHeader: true,

    // Slide Configuration (starting with Hero as Slide 1 of the slider)
    slides: [
        {
            id: "slide-2",
            bgImage: "/images/concept-hero1.png", // Hero 1.png golden particle butterfly pedestal
            bgPosition: "center",
            theme: "dark",
            headerStyle: "light",
            subtitle: "",
            title: "FORMS THAT ARRIVE ON\nTHEIR OWN TERMS.",
            desc: "",
            buttonText: "",
            buttonLink: ""
        },
        {
            id: "slide-3",
            bgImage: "", // Gradient applied via CSS
            contentImage: "/images/concept-collection.png", // Rendered as <img> on right side
            bgPosition: "right center",
            theme: "cream",
            headerStyle: "dark",
            subtitle: "COLLECTION",
            title: "RARE FORMS.\nTIMELESS PRESENCE.",
            desc: "A collection of original designs created to carry\nidentity, emotion, and presence. Some are\ninspired by stories. Others by the pursuit of a\nform that simply deserved to exist.",
            buttonText: "EXPLORE OUR COLLECTION",
            buttonLink: "/collection"
        },
        {
            id: "slide-4",
            bgImage: "", // Gradient applied via CSS
            contentImage: "/images/concept-designlog.png", // Rendered as <img> on right side
            bgPosition: "right center",
            theme: "dark",
            headerStyle: "light",
            subtitle: "DESIGN LOG",
            title: "FROM FORM\nTO CREATION.",
            desc: "Every piece begins long before it becomes jewellery.\n\nA record of original designs, dimensions and development before they become jewellery.",
            buttonText: "EXPLORE OUR DESIGN LOG",
            buttonLink: "/design-log"
        },
        {
            id: "slide-5",
            bgImage: "", // Gradient applied via CSS
            contentImage: "/images/concept-philosophy.png", // Rendered as <img> on right side
            bgPosition: "right center",
            theme: "olive",
            headerStyle: "dark",
            subtitle: "PHILOSOPHY",
            title: "OTHERS FOLLOW WHAT\nALREADY EXISTS.\nPINTAARA SEARCHES FOR\nFORMS THAT DON'T.",
            desc: "Originality begins with a different question:\n\"What is yet to be explored?\"",
            buttonText: "READ MORE",
            buttonLink: "/about/philosophy"
        },
        {
            id: "slide-6",
            bgImage: "/images/concept-ourstory.png", // Glowing green mountain peak rising through clouds – OUR STORY (Full Size BG)
            bgPosition: "center",
            theme: "dark",
            headerStyle: "light",
            subtitle: "OUR STORY",
            title: "THIS IS BECOMING.",
            desc: "Inspired by aspiration, transformation and the\npursuit of something greater than oneself.",
            buttonText: "READ MORE",
            buttonLink: "/about/story"
        },
        {
            id: "slide-7",
            bgImage: "/images/concept-footer.png", // Dark moody mountain in fog – FOOTER
            bgPosition: "center",
            theme: "dark",
            headerStyle: "footer-only-icons",
            isFooter: true, // Special footer flag to render footer structure
            title: "THIS IS PINTAARA.",
            subtitle: "Rare. Intentional. Timeless."
        }
    ]
};
