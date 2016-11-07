//Assignment #1 for Coding the Humanities 2016: command line interface for a bookstore
//Vivien van Veldhuizen, 11052929

var program = require('commander');

  //Variables: The info about the books can be written here.
var book1_title = "The Complete Stories";
var book1_author = "Flannery O'Connor";
var book1_price = "21,50";
var book1_kind = "paperback";

var book2_title = "Why Grow Up?";
var book2_author = "Susan Neiman";
var book2_price = "16,95";
var book2_kind = "paperback";

var book3_title = "Juliana";
var book3_author = "Jolande Withuis";
var book3_price = "39,99";
var book3_kind = "hardcover";

var book4_title = "Notendop";
var book4_author = "Ian McEwan";
var book4_price = "19,90";
var book4_kind = "hardcover";

var book5_title = "Poems";
var book5_author = "Elizabeth Bishop";
var book5_price = "18,95";
var book5_kind = "paperback";

  //Program: Variables the user can search on can be set here as options.
program
  .version('0.0.1')
  .option('-t, --title [value]', "Title of Book", "empty")
  .option('-a, --author [value]', "Author of Book", "empty")
  .option('-p  --price [value]', "Price of Book", "empty")
  .option('-k --kind [value]', "Kind of Book", "empty")
  .parse(process.argv);

    //The program that will be run in case the user searches on Title of Book
  switch(program.title)
  {
      case book1_title:
  		console.log("Title:", book1_title);
  		console.log("Author:", book1_author);
  		console.log("Price:", book1_price);
      console.log("Kind:", book1_kind);
  		break;

  		case book2_title:
      console.log("Title:", book2_title);
      console.log("Author:", book2_author);
      console.log("Price:", book2_price);
      console.log("Kind:", book2_kind);
  		break;

  		case book3_title:
      console.log("Title:", book3_title);
      console.log("Author:", book3_author);
      console.log("Price:", book3_price);
      console.log("Kind:", book3_kind);
  		break;

      case book4_title:
      console.log("Title:", book4_title);
      console.log("Author:", book4_author);
      console.log("Price:", book4_price);
      console.log("Kind:", book4_kind);
      break; 

      case book5_title:
      console.log("Title:", book5_title);
      console.log("Author:", book5_author);
      console.log("Price:", book5_price);
      console.log("Kind:", book5_kind);
      break;

      case "empty":
      break;     

    default:
      console.log("Book title did not give any match");
      break;
  }

    //The program that will be run in case the user searches on Author of Book
  switch(program.author)
  {
      case book1_author:
      console.log("Title:", book1_title);
      console.log("Author:", book1_author);
      console.log("Price:", book1_price);
      console.log("Kind:", book1_kind);
      break;

      case book2_author:
      console.log("Title:", book2_title);
      console.log("Author:", book2_author);
      console.log("Price:", book2_price);
      console.log("Kind:", book2_kind);
      break;

      case book3_author:
      console.log("Title:", book3_title);
      console.log("Author:", book3_author);
      console.log("Price:", book3_price);
      console.log("Kind:", book3_kind);
      break;

      case book4_author:
      console.log("Title:", book4_title);
      console.log("Author:", book4_author);
      console.log("Price:", book4_price);
      console.log("Kind:", book4_kind);
      break; 

      case book5_author:
      console.log("Title:", book5_title);
      console.log("Author:", book5_author);
      console.log("Price:", book5_price);
      console.log("Kind:", book5_kind);
      break;

      case "empty":
      break; 

      default:
      console.log("Book author did not give any match");
      break;   
  }

      //The program that will be run in case the user searches on Price of Book
  switch(program.price)
  {
      case book1_price:
      console.log("Title:", book1_title);
      console.log("Author:", book1_author);
      console.log("Price:", book1_price);
      console.log("Kind:", book1_kind);
      break;

      case book2_price:
      console.log("Title:", book2_title);
      console.log("Author:", book2_author);
      console.log("Price:", book2_price);
      console.log("Kind:", book2_kind);
      break;

      case book3_price:
      console.log("Title:", book3_title);
      console.log("Author:", book3_author);
      console.log("Price:", book3_price);
      console.log("Kind:", book3_kind);
      break;

      case book4_price:
      console.log("Title:", book4_title);
      console.log("Author:", book4_author);
      console.log("Price:", book4_price);
      console.log("Kind:", book4_kind);
      break; 

      case book5_price:
      console.log("Title:", book5_title);
      console.log("Author:", book5_author);
      console.log("Price:", book5_price);
      console.log("Kind:", book5_kind);
      break;

      case "empty":
      break; 

      default:
      console.log("Book price did not give any match");
      break;
  }

  //The program that will be run in case the user searches on Kind of Book
  switch(program.kind)
  {
      case "paperback":
      console.log("Title:", book1_title);
      console.log("Author:", book1_author);
      console.log("Price:", book1_price);
      console.log("Kind", book1_kind);

        console.log(" ");

      console.log("Title:", book2_title);
      console.log("Author", book2_author);
      console.log("Price:", book2_price);
      console.log("Kind:", book2_kind);
        
        console.log(" ");
      
      console.log("Title:", book5_title);
      console.log("Author:", book5_author);
      console.log("Price:", book5_price);
      console.log("Kind:", book5_kind);
      break;  

      case "hardcover":
      console.log("Title:", book3_title);
      console.log("Author:", book3_author);
      console.log("Price:", book3_price);
      console.log("Kind:", book3_kind);
      
        console.log(" ");
      
      console.log("Title:", book4_title);
      console.log("Author:", book4_author);
      console.log("Price:", book4_price);
      console.log("Kind:", book4_kind);
      break;  

      case "empty":
      break; 

    default:
      console.log("Book kind did not give any match");
      break;
  }