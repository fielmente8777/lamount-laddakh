import { imgUrl } from "./links";

export const NavData = {
  logo: imgUrl + "logo.webp",
  link: {
    name: "+91 96222 05133 ",
    href: "tel:+91 96222 05133",
  },
};

export const pageDate = {
  bannerdata: {
    title: "WHERE AFFORDABILITY MEETS AUTHENTICITY",
    subTitle: ["Affordable Luxury in the Heart of Ladakh"],
    src: imgUrl + "bnr.webp",
  },
  aboutUs: {
    title: "WELCOME TO LA MOUNT LADAKH",
    subTitle: "Ladakh’s Beauty, Right Outside Your Window",
    description: [
      "Located in the heart of Leh, Hotel La Mount Ladakh offers the perfect base to explore the beauty of Ladakh. With comfortable accommodations for families, adventurers, and honeymooners, we combine warm hospitality with breathtaking views and easy access to key attractions. Experience Ladakh like never before with us!",
    ],
  },

  accommodations: {
    title: "EXPLORE OUR STAYS",
    subTitle: "ACCOMMODATIONS",
    cards: [
      {
        title: "Luxury Cordillera",
        subTitle: "LA MOUNT STAYS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr.",
        images: [imgUrl + "im1.webp", imgUrl + "im2.webp", imgUrl + "im3.webp"],
        listOfServices: [
          "216 sq.ft (20 sq.mt)",
          "Comfortable & Spacious King Bed",
          "Mountain View",
        ],
        links: [
          {
            label: "GET EXCLUSIVE OFFERS!",
            href: "#",
          },
        ],
      },
      {
        title: "Deluxe Cordillera",
        subTitle: "LA MOUNT STAYS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr.",
        images: [imgUrl + "im1.webp", imgUrl + "im2.webp", imgUrl + "im3.webp"],
        listOfServices: [
          "224 sq.ft (21 sq.mt)",
          "Comfortable & Spacious King Bed",
          "Mountain View",
        ],
        links: [
          {
            label: "GET EXCLUSIVE OFFERS!",
            href: "#",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "EXPLORE OUR GALLERY",
    subTitle: "Experience Hotel La Mount Through Our Lens",
    images: [
      imgUrl + "im1.webp",
      imgUrl + "im2.webp",
      imgUrl + "im3.webp",
      imgUrl + "im4.webp",
      imgUrl + "im1.webp",
      imgUrl + "im2.webp",
      imgUrl + "im3.webp",
      imgUrl + "im4.webp",
    ],
    links: [
      {
        label: "GET EXCLUSIVE OFFERS!",
        href: "#",
      },
    ],
  },

  testimonial: {
    title: "Testimonials",
    subTitle: "Appreciation From Our Guests!",
    image: imgUrl + "im4.webp",

    cards: [
      {
        title: "Adam Nowicki",
        desc: "I really enjoyed staying in the LaMount, comfortable rooms and great service. They have an amazing rooftop with cafe restaurant with the best view of the mountains. It's located close to the centre of Leh.. I highly recommend!!",
      },
      {
        title: "Anjana Singh",
        desc: "The hospitality at La Mount was very warm and welcoming. The owner and the manager helped and guided us completely. Qadir our driver was too good with his driving skills and he is an excellent photographer too, helped us to capture lovely memories.",
      },
      {
        title: "Sheetal Joglekar Tamhankar",
        desc: "In our Ladakh trip stay in this hotel was great. Food is a special mention. Very good food. Overall hospitality was good. Very happy and recomend for sure.",
      },
      {
        title: "Snehal Gaike",
        desc: "It's an amazing hotel, we stayed here 3 nights and service is great food is good and room views are beautiful, it's on walking distance to the market. Rooms are spacious bathrooms are spacious...everything is just perfect and cozy.",
      },
    ],
  },
};

export const footerLinks = {
  src: "/logo.png",
  data: [
    {
      title: "Contact Us",
      links: [
        {
          label: "Tukcha Main Rd, Leh, Ladakh 194101",
          href: "",
        },
        {
          label: "Call: +91 96222 05133",
          href: "tel:+91 96222 05133",
          label2: "01982257868",
          href2: "tel:01982257868",
        },

        {
          label: "Email: info@lamountladakh.in",
          href: "mailto:info@lamountladakh.in",
        },
      ],
    },
    {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3301.321576844401!2d77.578686!3d34.163695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdebabd53fd349%3A0x4d4225574f68df74!2sHotel%20La%20Mount%20Ladakh!5e0!3m2!1sen!2sin!4v1752044866553!5m2!1sen!2sin",
    },
  ],
};
