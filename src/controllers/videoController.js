const videos = [
    {
        title: "첫번째 비디오",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "두번째 비디오",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "세번째 비디오",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1
    }
];
export const trending = (req, res) => res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
