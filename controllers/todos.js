let todos = [
  {
    id: "2022-02-08T13:15:24.504Z",
    title: "Feed the cat",
    completed: false,
  },
  {
    id: "2022-02-08T15:25:40.504Z",
    title: "Fight against mutations",
    completed: false,
  },
  {
    id: "2022-02-08T10:32:10.504Z",
    title: "To wash a car",
    completed: true,
  },
];

export const getAll = (req, res) => {
  res.status(200).json(todos);
};
