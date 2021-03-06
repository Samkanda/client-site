export const pageAnimation = {
    hidden: {
        opacity: 0,
        x: 400
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        x: 400,
        transition: {
            duration: 0.5,
        },
    }
};

export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  export const contactAnimation = {
    hidden: {
        opacity: 0,
        x: 400
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,  
        },
    },
    exit: {
        opacity: 0,
        x: 400,
        transition: {
            duration: 0.5,
        },
    }
};