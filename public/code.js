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
      homepage2:true,
      our_awards: false,
      our_customers: false,
      our_evolution: false,
      why_we_are_different: false,

      openHome(currentSection) {
        this.why_us = false;
        this.homapage = true;
        this.contact_us = false;
        this.about = false;
        this.tracking = false;
        this.faq = false;
        this.our_services = false;
        this.our_awards = false;
        this.homepage2=true;
        this.our_customers = false;
        this.our_evolution = false;
        this.why_we_are_different = false;
        if (currentSection == "contact_us") {
          this.why_us = false;
          this.homepage = false;
          this.contact_us = true;
          this.about = false;
          this.tracking = false;
          this.homepage2=false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
        } else if (currentSection == "why_us") {
          this.why_us = true;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
        } else if (currentSection == "tracking") {
          this.why_us = false;
          this.homepage2=false;
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
        } else if (currentSection == "about") {
          this.why_us = false;
          this.homepage2=false;
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
        } else if (currentSection == "faq") {
          this.why_us = false;
          this.homepage2=false;
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
        } else if (currentSection == "our_services") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = true;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
        }else if (currentSection == "our_awards") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = true;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = false;
        }else if (currentSection == "our_customers") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = true;
          this.our_evolution = false;
          this.why_we_are_different = false;
        }else if (currentSection == "our_evolution") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = true;
          this.why_we_are_different = false;
        }else if (currentSection == "why_we_are_different") {
          this.why_us = false;
          this.homepage = false;
          this.homepage2=false;
          this.contact_us = false;
          this.about = false;
          this.tracking = false;
          this.faq = false;
          this.our_services = false;
          this.our_awards = false;
          this.our_customers = false;
          this.our_evolution = false;
          this.why_we_are_different = true;
        }
      },

      images: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
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
      imageStart: [
        {
          image: "/images/4.jpg",
          text: "With years of experience in the freight industry, GLOBAL CARGO LOGISTICS is known for offering reliable and efficient air-freight forwarding service throughout the world.",
          title: "AIRFREIGHT SERVICES",
        },
        {
          image: "/images/5.jpg",
          text: "With limited restrictions in the size and weight of the goods, we provide a full array of ocean freight forwarding services right from door to door pick up, advance tracking technology and managing shipping documents.",
          title: "SEA FREIGHT SERVICES",
        },
        {
          image: "/images/6.jpg",
          text: "We aspire to be your reliable Supply Chain Partner by providing high level professional warehousing services and provide assurance of the safe arrival of your right product anywhere and at anytime.",
          title: "WAREHOUSING AND DISTRIBUTION",
        },
      ],
      currentIndex: 0,

      startTimer() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.imageStart.length;
          this.text1 = "";
        }, 8000);
      },

      imageShareholder: [
        {
          image: "/images/4.jpg",
          name: "Rijraj",
          position: "CEO",
          country: "Cameroon",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/5.jpg",
          name: "Damian",
          position: "Director",
          country: "South Africa",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/6.jpg",
          name: "Iniesta",
          position: "Contact Person",
          country: "Australia",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/7.jpg",
          name: "Renzo",
          position: "CEO",
          country: "Brazil",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/8.jpg",
          name: "Simon",
          position: "CEO",
          country: "Poland",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/9.jpg",
          name: "Fabchi",
          position: "CEO",
          country: "Netherlands",
          biograpghy:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut obcaecati cum magnam quidem harum vel? Voluptatem aliquid molestiae nobis beatae perspiciatis non possimus repellendus, quo esse autem nulla.",
        },
        {
          image: "/images/1.jpg",
          name: "Jumfan",
          position: "CEO",
          country: "USA",
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

      init() {
        this.activeImage = this.images.length > 0 ? this.images[0] : null;
        this.startTimer();
        this.startTimerWhyUs();
      },

      // get all price plans ends here
    };
  });
});
