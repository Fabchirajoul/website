document.addEventListener("alpine:init", () => {
  Alpine.data("CAPSTONEWIDGET", () => {
    return {
      title: "GLOBAL CARGO LOGISTICS",

      why_us: false,
      homapage: true,
      contact_us: false,
      tracking: false,
      about: false,
      faq: false,
      our_services: false,
      homepage2: true,
      our_awards: false,
      our_customers: false,
      our_evolution: false,
      why_we_are_different: false,

      faq_category1: false,
      faq_category2: false,
      faq_category3: false,
      faq_category4: false,
      faq_category5: false,
      INTERNATIONAL: false,
      LOCAL: false,
      IMPORT: false,

      openHome(currentSection) {
        this.why_us = false;
        this.homapage = true;
        this.contact_us = false;
        this.about = false;
        this.tracking = false;
        this.faq = false;
        this.our_services = false;
        this.our_awards = false;
        this.homepage2 = true;
        this.our_customers = false;
        this.our_evolution = false;
        this.why_we_are_different = false;
        this.INTERNATIONAL = false;
        this.LOCAL = false;
        this.IMPORT = false;
        if (currentSection == "contact_us") {
          this.why_us = false;
          this.homepage = false;
          this.contact_us = true;
          this.about = false;
          this.tracking = false;
          this.homepage2 = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "why_us") {
          this.why_us = true;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "tracking") {
          this.why_us = false;
          this.homepage2 = false;
          this.homepage = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = true;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "about") {
          this.why_us = false;
          this.homepage2 = false;
          this.homepage = false;
          this.contact_us = false;
          this.about = true;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.shareholders = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "faq") {
          this.why_us = false;
          this.homepage2 = false;
          this.homepage = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = true;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "our_services") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = true;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "our_awards") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = true;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "our_customers") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = true;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "our_evolution") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = true;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        } else if (currentSection == "why_we_are_different") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = true;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = false;
        }


        else if (currentSection == "INTERNATIONAL") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = true;
          this.LOCAL = false;
          this.IMPORT = false;
        }
        else if (currentSection == "LOCAL") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = true;
          this.IMPORT = false;
        }
        else if (currentSection == "IMPORT") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2 = false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
          this.INTERNATIONAL = false;
          this.LOCAL = false;
          this.IMPORT = true;
        }
      },

      init() {
        this.activeImage = this.images.length > 0 ? this.images[0] : null;
        this.startTimer();
        this.startTimerWhyUs();
        this.differentImage();
        this.differentImage1();
        this.differenText();
        this.startLoop1();
      },

      images: [
        "/images/homepage/1.jpg",
        "/images/homepage/2.jpg",
        "/images/homepage/3.jpg",
        "/images/homepage/4.jpg",
        "/images/homepage/5.jpg",
        "/images/homepage/6.jpg",
        "/images/homepage/7.jpg",
        "/images/homepage/8.jpg",
        "/images/homepage/9.jpg",
        "/images/homepage/10.jpg",
        "/images/homepage/11.jpg",
      ],
      activeImage: null,

      prev() {
        let index = this.images.indexOf(this.activeImage);
        if (index === 0) index = this.images.length;
        this.activeImage = this.images[index - 1];
      },

      next() {
        let index = this.images.indexOf(this.activeImage);
        if (index === this.images.length - 1) index = -1;
        this.activeImage = this.images[index + 1];
      },

      imageShareholderhomepage: [
        {
          image: "/images/our_services/airfright.jpg",
          text: "With years of experience in the freight industry, GLOBAL CARGO LOGISTICS is known for offering reliable and efficient air-freight forwarding service throughout the world.",
          title: "AIRFREIGHT SERVICES",
        },
        {
          image: "/images/our_services/Sea-Freight.jpg",
          text: "With limited restrictions in the size and weight of the goods, we provide a full array of ocean freight forwarding services right from door to door pick up, advance tracking technology and managing shipping documents.",
          title: "SEA FREIGHT SERVICES",
        },
        {
          image: "/images/our_services/warehouse.jpg",
          text: "We aspire to be your reliable Supply Chain Partner by providing high level professional warehousing services and provide assurance of the safe arrival of your right product anywhere and at anytime.",
          title: "WAREHOUSING AND DISTRIBUTION",
        },

        {
          image: "/images/our_services/warehouse.jpg",
          text: "We aspire to be your reliable Supply Chain Partner by providing high level professional warehousing services and provide assurance of the safe arrival of your right product anywhere and at anytime.",
          title: "INTERNATIONAL PET TRANSPORT",
        },
      ],
      currentIndex: 0,

      startTimer() {
        setInterval(() => {
          this.currentIndex =
            (this.currentIndex + 1) % this.imageShareholderhomepage.length;
        }, 8000);
      },

      imageShareholder: [
        {
          image: "/images/shareholder/1.jpg",
          name: "Image 1",
          position: "CEO",
          country: "Cameroon",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/shareholder/2.jpg",
          name: "Image 2",
          position: "Director",
          country: "South Africa",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/shareholder/3.jpg",
          name: "Image 3",
          position: "Contact Person",
          country: "Australia",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/shareholder/4.jpg",
          name: "Image 4",
          position: "CEO",
          country: "Brazil",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/shareholder/5.jpeg",
          name: "Image 5",
          position: "CEO",
          country: "Poland",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
      ],
      currentIndex: 0,

      startTimer() {
        setInterval(() => {
          this.currentIndex =
            (this.currentIndex + 1) % this.imageShareholder.length;
          this.text1 = "";
        }, 8000);
      },

      imageWhyUs: [
        {
          image: "/images/why_us/1.jpg",
          text1: "No hidden charges*",
          text2:
            "Account keeping and other hidden fees can spiral your freight costs.",
        },
        {
          image: "/images/why_us/2.jpg",
          text1: "Parcel coverage*",
          text2: "We include limited liability coverage at no extra cost.",
        },
        {
          image: "/images/why_us/3.jpg",
          text1: "Online track and trace facilities",
          text2:
            "Online parcel tracking and signature proof of delivery within minutes.",
        },
        {
          image: "/images/why_us/4.jpg",
          text1: "No redelivery fees",
          text2:
            "These can really add up and are particularly important when delivering to residential customers.",
        },
        {
          image: "/images/why_us/5.jpg",
          text1: "Simple, reliable and economical service",
          text2:
            "Save costs and focus on your business and customers with our affordable and convenient service.",
        },
        {
          image: "/images/why_us/6.jpg",
          text1: "Residential expertise",
          text2:
            "The ability to leave a calling card and rearrange the delivery at no extra cost* if the recipient is not at home and the flexibility for the sender to authorise delivery without a signature.",
        },
      ],
      currentIndex: 0,

      startTimerWhyUs() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.imageWhyUs.length;
          this.text1 = "";
        }, 2000);
      },

      imagesDifferent: [
        "images/why_different/1.png",
        "images/why_different/2.png",
        "images/why_different/3.png",
        "images/why_different/4.png",
        "images/why_different/5.png",
        "images/why_different/6.png",
      ],

      currentIndexdiferent: 0,
      differentImage() {
        this.currentIndexdiferent =
          (this.currentIndexdiferent + 1) % this.imagesDifferent.length;
      },

      textsDifferent: [
        {
          text1: "Automatic label printing",
          text2:
            "Dispatching is made simple with our easy to use eWallet system.",
        },
        {
          text1: "Economical service",
          text2: "A budget-priced service to enhance your bottom line.",
        },
        {
          text1: "No fuel levies",
          text2: "A common hidden cost amongst many freight providers.",
        },
        {
          text1: "No re-delivery fees",
          text2:
            "Particularly important when delivering to residential customers.",
        },
        {
          text1: "Parcel coverage*",
          text2: "We include limited liability coverage at no extra cost",
        },
        {
          text1: "Reliability",
          text2: "No booking required with our daily designated pick-up times.",
        },
      ],
      currentIndexdiferentText: 0,
      differenText() {
        this.currentIndexdiferentText =
          (this.currentIndexdiferentText + 1) % this.textsDifferent.length;
      },

      textsDifferent1: [
        {
          text3: "no-hidden-fees",
          text4: "No booking required with our daily designated pick-up times.",
        },
        {
          text3: "online-track-and-trace",
          text4:
            "Making it easy to order, track and report on all your shipping movements with the customer portal.",
        },
        {
          text3: "our-technology",
          text4:
            "Fastway is dedicated to producing technology solutions to make business easier for our customers.",
        },
        {
          text3: "savings",
          text4:
            "Fastway has shown through many case studies show it has dramatically reduced customers freight bills, up to and in excess of 35% whilst improving service levels.",
        },
        {
          text3: "simplicity",
          text4:
            "An easy to use system which frees you up to focus on your core business and your customers",
        },
        {
          text3: "residential-expertise",
          text4:
            "When a customer isn’t at home a calling card is left and redelivery is arranged at no extra cost. We also have the flexibility for the sender to leave authorisation on specific parcels to deliver without a signature or provide direction to leave goods without a signature when no one is at home. This can be done at any time of the day or night by utilising Fastway’s easy to use online customer website.",
        },
      ],
      currentIndexdiferentText1: 0,
      differenText() {
        this.currentIndexdiferentText1 =
          (this.currentIndexdiferentText1 + 1) % this.textsDifferent1.length;
      },

      imagesDifferent1: [
        "images/why_different/7.png",
        "images/why_different/8.png",
        "images/why_different/9.png",
        "images/why_different/11.png",
        "images/why_different/12.png",
        "images/why_different/10.png",
      ],
      currentIndexdiferent1: 0,
      differentImage1() {
        this.currentIndexdiferent1 =
          (this.currentIndexdiferent1 + 1) % this.imagesDifferent1.length;
      },

      // get all price plans ends here
    };
  });
});
