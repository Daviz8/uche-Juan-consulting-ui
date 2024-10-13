import express from "express";
import bodyParser from "body-parser";
import { promises as fs } from 'fs';
import path from 'path';




const app = express();
const port = 3030;




app.use(express.static("node_modules"));
app.set('view-engine', 'ejs');


app.use("/css" , express.static("dist"));
app.use( express.static("public"));  
app.use(bodyParser.urlencoded({ extended: true }));

//Quotes
async function getData() {
    try {
        const data = await fs.readFile(path.resolve('data/quotes.json'), 'utf8');
     return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return [];
    }
}
 const quotes =  await getData();

 //Survey
async function getQuestions() {
  try {
      const survey = await fs.readFile(path.resolve('data/questions.json'), 'utf8');
   return JSON.parse(survey);
  } catch (err) {
      console.error(err);
      return [];
  }
}
const question  =  await getQuestions();



//Routes
app.get("/" , (req,res) => {
  const randomQuote = quotes [Math.floor(Math.random()*57)]; 
  res.render("index.ejs"  , {Quote:  randomQuote.Quote });
});

app.get("/about" , (req,res) =>{
 res.render("about.ejs");
});


app.get("/welcome" , (req,res) =>{
  res.render("SurveyWelcome.ejs")
 });

app.get("/services" , (req,res)=> {
res.render("services.ejs")
});

app.get("/contact" , (req,res)=> {
  res.render("contact.ejs")
  });

  app.get("/contact" , (req,res)=> {
    res.render("contact.ejs")
    });
  
  
    app.get("/survey" , (req,res)=> {
      res.render("survey.ejs" , {question: question[0].question});
      });
    
    
  


app.listen( port , ()=> {
  console.log(`App is listening at port ${port}`);
  });