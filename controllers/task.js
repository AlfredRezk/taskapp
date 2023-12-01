const Task = require("../models/Task");

// @URL     GET /
// @des     Render TakList
exports.getTasks = async (req, res) => {
  let tasks = await Task.find().lean();
  tasks = tasks.map((task) => ({
    ...task,
    createdAt: task.createdAt.toLocaleDateString(),
    low: task.priority === "low"? true: false,
    medium: task.priority === "medium"? true: false,
    heigh: task.priority === "heigh"? true: false,
  }));

  res.render("home", { docTitle: "Home", tasks });
};

// @URL     GET /add
// @des     Render Add page
exports.getAdd = async (req, res) => {
  res.render("add", { docTitle: "Add" });
};

// @URL     POST /add
// @des      process add task
exports.postAdd = async (req, res) => {
  const data = await Task.create(req.body);
  res.redirect("/");
};

// @URL     GET /edit/:id
// @des     Render Edit page
exports.getEdit = async(req, res)=>{

  const task = await Task.findById(req.params.id)
  const edit = true;
  console.log(task)
  res.render('add', {docTitle:'Edit', task, edit})
}
// @URL     POST /edit
// @des     process Edit page
exports.postEdit = async(req, res)=>{
  const id = req.body.id;

  await Task.findByIdAndUpdate(id, req.body, {new:true, runValidators:true})
  res.redirect('/')
}

// @URL     GET /delete/:id
// @des     delete a task
exports.getDelete = async(req, res)=>{

  await Task.findByIdAndDelete(req.params.id)
  res.redirect('/')
}