import express from 'express';
// Create app with express
const app = express();
// Port it
const PORT = process.env.PORT || 5000;
app.use(express.json());
let students = [
    {id:1, name: 'Fred', age:16},
    {id:2, name: 'Michael', age:17},
    {id:3, name: 'Kyle', age:14},
]
// Routes
app.get('/api/students', (req, res) => {
    res.send(students);
})

app.get('/api/students/:id', (req, res) => {
const student = students.find(s => s.id === parseInt(req.params.id));
if (!student) res.status(404).send('The student with the given ID was not found.');
res.send(student);
})

app.post('/api/students', (req, res) => {

    if (!req.body.name)res.status(400).send('Name is required.');
    console.log(req.body.name)
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student);
});
// Start the server
app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) res.status(404).send('The student with the given ID was not found.');
    if (!req.body.name)res.status(400).send('Name is required.');
    student.name = req.body.name;
    student.age = req.body.age;
    res.send(student);
})

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) res.status(404).send('The student with the given ID was not found.');
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);

})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});