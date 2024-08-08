interface IComponentCollection {
  path: string;
  name: string;
}

interface ComponentCollectionsType {
  [key: string]: IComponentCollection[];
}

const componentCollections: ComponentCollectionsType = {
  blog: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/7/",
      name: "Example 7",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/8/",
      name: "Example 8",
    },
  ],
  content: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about/",
      name: "About section",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about-2/",
      name: "About section2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about-3/",
      name: "About section3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/image-on-right/",
      name: "Image on right",
    },
  ],
  cta: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/cta/6/",
      name: "Example 6",
    },
  ],
  featureservice: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/7/",
      name: "Example 7",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/8/",
      name: "Example 8",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/9/",
      name: "Example 9",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/10/",
      name: "Example 10",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/11/",
      name: "Example 11",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/12/",
      name: "Example 12",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/13/",
      name: "Example 13",
    },
  ],

  footers: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/footer/6/",
      name: "Example 6",
    },
  ],
  hero: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/agency/",
      name: "Agency Website",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/architecture/",
      name: "Architecture",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/creative-agency/",
      name: "Creative Agency",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/digital-agency/",
      name: "Digital Agency",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/grocerystore/",
      name: "Grocery Store",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/healthcare/",
      name: "Health Care",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/hero-section/",
      name: "Hero Section",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/medcare/",
      name: "Medcare",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/personnal-porfolio/",
      name: "Personnal Portfolio",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/podcast/",
      name: "Podcast",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/podcast-agency/",
      name: "Podcast Agency",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/saas/",
      name: "Saas",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/saas-product/",
      name: "Saas Product",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/software-agency/",
      name: "Software Agency",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/hero-sections/with-slider/",
      name: "With Slider",
    },
  ],
  logocloud: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/4/",
      name: "Example 4",
    },
  ],
  metrics: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/metrics/7/",
      name: "Example 7",
    },
  ],
  navbar: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/navbar/7/",
      name: "Example 7",
    },
  ],
  portfolio: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/portfolio/1/",
      name: "Example 1",
    },
  ],
  pricing: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/5/",
      name: "Example 5",
    },
  ],
  sidebar: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/4/",
      name: "Example 4",
    },
  ],
  testimonialsuccess: [
    {
      path: "https://kohi-unifyui.pages.dev/resources/testimonial_success/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/testimonial_success/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/testimonial_success/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/testimonial_success/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/testimonial_success/5/",
      name: "Example 5",
    },
  ],
};

export default componentCollections;

export type { ComponentCollectionsType, IComponentCollection };
