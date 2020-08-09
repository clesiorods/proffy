const proffys = [
   {name: "Clesio Rodrigues",
   avatar: "https://avatars0.githubusercontent.com/u/20101892?v=4",
   whatsapp: "990438723",
   bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atravez de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
   subject: "Química",
   cost: "40",
   weekday: [0],
   time_from:[720],
   time_to: [1120]
   },

   {name: "Mário Sérgio",
   avatar: "https://avatars0.githubusercontent.com/u/7073?v=4",
   whatsapp: "953324223",
   bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atravez de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
   subject: "Química",
   cost: "40",
   weekday: [3],
   time_from:[720],
   time_to: [1120]
   }
]

const subjects = [
   "Artes",
   "Biologia",
   "Ciência",
   "Educação Física",
   "Física",
   "Geografia",
   "História",
   "Matemática",
   "Português",
   "Química"
]

const weekdays = [
   "Domingo",
   "Segunda",
   "Terça",
   "Quarta",
   "Quinta",
   "Sexta",
   "Sábado",
]


const express = require('express');
const server = express();

//Confighurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
   express: server,
   noCache: true,
});

function getSubject(subjectNumber) {
   const position = +subjectNumber - 1;
   return (subjects[position]);
}


//Configurar arquivos estáticos
server.use(express.static("public"))

//Rotas da aplicação
////////////////////////////////////////////////////////////////////////////
.get("/",(req, res) => {
   return res.render("index.html")
})

////////////////////////////////////////////////////////////////////////////
.get("/study", (req, res) => {
   const filters = req.query;
   return res.render("study.html", {proffys, filters, subjects, weekdays})
})

////////////////////////////////////////////////////////////////////////////
.get("/give-classes", (req, res) => {
   const data = req.query;
   const isEmpty = Object.keys(data).length > 0;

   if(isEmpty) {

      data.subject = getSubject(data.subject);

      //adiconar o data a lista de proffys
      proffys.push(data);

      return res.redirect("/study");
   }
   //se não, mostrar a página
   return res.render("give-classes.html", {weekdays, subjects})
})

////////////////////////////////////////////////////////////////////////////
.listen(5500);


