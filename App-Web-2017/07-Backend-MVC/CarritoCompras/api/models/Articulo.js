module.exports = {
    attributes: {
        title: {
            type: "string"
        },
        country: {
            type: "string"
        },
        number: {
            type: "string"
        },
        volume: {
            type: "string"
        },
        year: {
            type: "string"
        },
        abstract: {
            type: "string"
        },
        link: [
            {
                url: "string"
            }
        ],
        author: [
            {
                name: "string"
            }
        ],
    }
};
