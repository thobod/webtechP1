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
    return "<a href='#" + link + "'>" + text + "</a>";
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
    this.text = fac.getH3("Welcome") + fac.getP("Welcome to the course, you will learn about web development.") + fac.getH3("News") + fac.getList(["Slides of Lecture 2 have been published.", "Slides of Lecture 3 have been published.", "Slides of Lecture 4 have been published."]);
  }
}

class ReadMoreGrading extends ReadMore {
  constructor() {
    super("grading");
    this.text= "Dit is een sammenvatting van de pagina grading";
  }
}

class ReadMoreSchedule extends ReadMore {
  constructor() {
    super("schedule");
    this.text= "Dit is een sammenvatting van de pagina schedule";
  }
}

class ReadMoreTools extends ReadMore {
  constructor() {
    super("tools");
    this.text= "Dit is een sammenvatting van de pagina tools";
  }
}

class ReadMoreAssignment extends ReadMore {
  constructor() {
    super("assignment");
    this.text= "Dit is een sammenvatting van de pagina assignment";
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
