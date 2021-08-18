let videos = [
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
        id: 2
    },
    {
        title: "세번째 비디오",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3
    }
];
export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos })
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching ${video.title}` });
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
