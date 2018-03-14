class HTMLFactory {
  constructor() {
  }

  getH2(text) {
    return "<h2>" + text + "</h2>"
  }

  getH3(text) {
    return "<h3>" + text + "</h3>"
  }

  getP(text) {
    return "<p>" + text + "</p>"
  }

  getList(textArr) {
    var result = "<ul>";
    for (var i = 0; i < textArr.length; i++) {
      result += "<li>" + textArr[i] + "</li>";
    }
    return (result += "</ul>");
  }

  getLink(text, link) {
    return "<a href='" + link + "'>" + text + "</a>";
  }
}

fac = new HTMLFactory();

class ReadMore {
  constructor(label) {
    this.label = label;
    this.hidden = true;
    this.text = "Text not set in code"
  }
  changeText() {
    if(this.hidden) {
      $("#" + this.label)[0].innerHTML = this.text;
      $("#" + this.label + "Label")[0].innerHTML = "Read Less...&#9206;"
    } else {
      $("#" + this.label)[0].innerHTML = "";
      $("#" + this.label + "Label")[0].innerHTML = "Read More...&#9207;"
    }
    this.hidden = !this.hidden;
  }
}

class ReadMoreHome extends ReadMore {
  constructor() {
    super("home");
    this.text = fac.getH3("Welcome") +
      fac.getP("Welcome to the course, you will learn about web development.") +
      fac.getH3("News") +
      fac.getList(["Slides of Lecture 4 have been published.", "Slides of Lecture 3 have been published.", "Slides of Lecture 2 have been published.", "Slides of Lecture 1 have been published."]) +
      fac.getLink("Schedule", "#scheduleTitle") +
      fac.getH3("Formal Data") +
      "<table> <tr> <th>Lectures</th> <td> Wednesday (13:15 - 15:00)<br> Friday (11:00 - 12:45) </td> <td rowspan='5'> <img src='sosnovsk.jpg' alt='dr. sosnovsky' width='150' height='200'> </td> </tr> <tr> <th>Practice</th> <td> Wednesday (15:15 - 17:00)<br> Friday (13:15 - 15:00) </td> </tr> <tr> <th>Instructor</th> <td>" +
      fac.getLink("Sergey Sosnovsky", "https://www.uu.nl/staff/SASosnovsky/") + "</td> </tr> <tr> <th>Teaching assistants</th><td>" +
      fac.getLink("Christopher Ferguson", "http://www.cs.uu.nl/staff/ferguson.html") + "<br>Sander Vanheste</a> /td> </tr> <tr> <th>Student assistants</th> <td>Michiel van Heusden<br>Rick de Boer<br>Silvan Eelman</td> </tr> </table>";
  }
}

class ReadMoreGrading extends ReadMore {
  constructor() {
    super("grading");
    this.text = fac.getP("50% of the course grade you will earn individually at exams; another 50% - by completing group assignments. There will be two exams:") +
      fac.getList(["Midterm (20%)", "Final(30%)"]) +
      fac.getP("..and three programming assignments:") +
      fac.getList(["Assignment 1 (5%)","Assignment 2 (15%)","Assignment 3 (30%)"]) +
      fac.getP("You can retake both oxams at once at 06/07/18, you cannot retake the assignments.");
  }
}

class ReadMoreSchedule extends ReadMore {
  constructor() {
    super("schedule");
    this.text = "<table style='border: 1px solid #ffcd00'> <tr> <th>Week</th> <th>Date</th> <th>Topic</th> <th>Slides</th> <th>Deadlines</th> </tr><tr class='tableborder'> <td>6</td> <td>Wednesday, Feb. 7</td> <td>Intro Course overview History of Internet</td> <td></td> <td></td> </tr> <tr> <td rowspan='2' class='tableborder'>7</td> <td>Wednesday, Feb. 14</td> <td>Internet architecture; Internet and Web protocols; Brief intro into HTML</td> <td></td> <td></td> </tr> <tr class='tableborder'> <td>Friday, Feb. 16</td> <td>HTML5; CSS3</td><td></td> <td></td> </tr>" +
      "<tr> <td rowspan='2' class='tableborder'>8</td> <td>Wednesday, Feb. 21</td> <td>Intro to JavaScript; Imperative and OO programming with JavaScript; DOM</td> <td></td> <td></td> </tr> <tr class='tableborder'> <td>Friday, Feb. 23</td> <td>Functional and event-driven programming with JavaScript	</td> <td></td> <td></td> </tr> <tr> <td rowspan='2' class='tableborder'>9</td> <td>Wednesday, Feb. 28	</td> <td>Recent JavaScript Developments; JavaScript Frameworks</td> <td></td> <td>" +
      fac.getLink("Assignment 1", "#assignmentTitle") + " is due " +
      fac.getLink("Assignment 2", "#assignmentTitle") +
      " is published</td> </tr> <tr class='tableborder'> <td>Friday, Mar. 02</td> <td>SGML; XML; Jason; SVG, WebGL; MathML; Web APIs	</td> <td></td> <td></td> </tr> </table>";
  }
}

class ReadMoreTools extends ReadMore {
  constructor() {
    super("tools");
    this.text = fac.getH3("BlackBoard") +
    fac.getP("Central course management system: discussion forums, submission of assignments ") +
    fac.getLink("Click here", "https://uu.blackboard.com/webapps/portal/frameset.jsp") +
    fac.getH3("Visual Studio Code") +
    fac.getP("Not the only nice free code editor out there. Yet, this one is warmly recommended ") +
    fac.getLink("Click here", "https://code.visualstudio.com/") +
    fac.getH3("Node.js") +
    fac.getP("Node.js &ndash; server-side platform used in this course. ") +
    fac.getLink("Click here", "https://nodejs.org") +
    fac.getP("Express.js &ndash; Web development framework for Node.js. ") +
    fac.getLink("Click here", "https://expressjs.com/");
  }
}

class ReadMoreAssignment extends ReadMore {
  constructor() {
    super("assignment");
    this.text = fac.getH3("Assignment 1") +
      fac.getP("Develop a static website on the topic of your interest. It can be a website of your favourite team, movie, band, pet, book, etc. Use the Web-representation technologies discussed during the first three lectures (HTML5 and CSS3). The visual appeal of your design is welcomed but not required; yet, avoid deliberately repulsive color combinations. Your website is expected to present meaningful information about the topic. The pages should be bigger than a paragraph, but smaller than a book chapter.") +
      fac.getH3("Assignment 2") +
      fac.getP("Develop a dynamic version of the website created in Assignment 1 using JavaScript (if necessary, you can change/extend the main theme). Use DOM methods, elements and events to interactively modify the content and appearance of your web-pages according to user actions. Use event listeners to process the events. Implement at least 1 case of event propagation (W3C model).") +
      fac.getP("Create an additional page whose main content part is constructed purely through DOM manipulation. It should represent a (small) structured knowledge base of your theme. Entries of this \"Knowledge Base\" should be objects of different classes. Their content should be shortened versions of the content constituting the rest of the Website. A class model of your theme should have at least 3 classes and at least 1 case of inheritance (can be more). Classes/objects should be connected between each other. Links should be provided to browse across connected entries of the knowledge base. Use ES6 classes and ES6-style object construction.") +
      fac.getP("Use external JavaScript libraries (jQuery and jQuery UI) to speed up the development. Implement a contextual menu that allows the user to change the appearance of particular elements on your web-pages."); +
      fac.getP("Add a \"Plot\" page to your website; use Flot library or any other to implement an interactive plot, supply it with data relevant to the topic of your website. The plot must by interactive, i.e. user's clicks on something in a plot should cause change in data visualisation.") +
      fac.getP("Extra credit assignment: a user can use the contextual menu also to copy, cut and paste content at any place of the Website. Page reloads should refresh HTML back to its original stage.");
  }
}

home = new ReadMoreHome();
grading = new ReadMoreGrading();
schedule = new ReadMoreSchedule();
tools = new ReadMoreTools();
assignment = new ReadMoreAssignment();

$(document).ready(function() {
  $("#homeLabel").bind("click", function() {
      home.changeText();
  });
  $("#gradingLabel").bind("click", function() {
      grading.changeText();
  });
  $("#scheduleLabel").bind("click", function() {
      schedule.changeText();
  });
  $("#toolsLabel").bind("click", function() {
      tools.changeText();
  });
  $("#assignmentLabel").bind("click", function() {
      assignment.changeText();
  });
});
