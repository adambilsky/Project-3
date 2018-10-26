var Student = {
    userName: "Super8isGreat",
    firstName: "Marty",
    lastName: "Scorsese",
    schoolName: "DePaul University",
    schoolValid: "True",

    degree: "Film",
    concentration: "Directing",
    city: "Chicago",
    contactInfo: {
        email: "marty@damob.net",
mobile: "800 - 555 - 5297",
    },

positionExp: {
    producer: {
        name: "Producer",
        value: true,
            type: Boolean,
            default: false
    },
    director: {
        name: "Director",
        value: true,
            type: Boolean,
            default: false
    },
    writer: {
        name: "Writer",
        value: true,
            type: Boolean,
            default: false
    },
    dp: {
        name: "Director of Photography",
        value: false,
            type: Boolean,
            default: false
    },
    camOp: {
        name: "Camera Operator",
        value: "",
        type: Boolean,
            default: false
    },
    dit: {
        name: "DIT",
        value: "",
        type: Boolean,
            default: false
    },
    gaffer: {
        name: "Gaffer",
        value: "",
        type: Boolean,
            default: false
    },
    prodDes: {
        name: "Production Designer",
        value: "",
        type: Boolean,
            default: false
    },
    props: {
        name: "Prop Master",
        value: "",
        type: Boolean,
            default: false
    },
    prodAsst: {
        name: "Production Assistant",
        value: "",
        type: Boolean,
            default: false
    },
    hairMakeup: {
        name: "Hair & Makeup",
        value: "",
        type: Boolean,
            default: false
    },
    locationMgr: {
        name: "Locations Manager",
        value: "",
        type: Boolean,
            default: false
    },

},
bio: "Scorsese’s passion for films started at a young age, when he made his first"
}

export default Student;