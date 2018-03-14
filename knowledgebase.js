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

home = new ReadMore("home");
home.text = "Dit is een sammenvatting van de pagina home";
grading = new ReadMore("grading");
grading.text = "Dit is een sammenvatting van de pagina grading";
schedule = new ReadMore("schedule");
schedule.text = "Dit is een sammenvatting van de pagina schedule";
tools = new ReadMore("tools");
tools.text = "Dit is een sammenvatting van de pagina tools";
assignment = new ReadMore("assignment");
assignment.text = "Dit is een sammenvatting van de pagina assignment";

$(document).ready(function() {
  $("#homeLabel").bind("click", homeLabel);
  $("#gradingLabel").bind("click", gradingLabel);
  $("#scheduleLabel").bind("click", scheduleLabel);
  $("#toolsLabel").bind("click", toolsLabel);
  $("#assignmentLabel").bind("click", assignmentLabel);
});

function homeLabel() {
  home.changeText();
}

function gradingLabel() {
  grading.changeText();
}

function scheduleLabel() {
  schedule.changeText();
}

function toolsLabel() {
  tools.changeText();
}

function assignmentLabel() {
  assignment.changeText();
}
