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
home.text = "<hr> Welcome to the course. Internet is the most relevant information technology of our age. World Wide Web is its most important application. In this course we will learn the architecture of WWW, its main protocols and representation formats. The practical component of the course will focus on design and implementation of Web applications. Additional topics such as Semantic Web, Social Web and Adaptive Web will help us better undestand current trends of Web development.";
grading = new ReadMore("grading");
grading.text =   "<hr/><p>50% of the course grade you will earn individually at exams; another 50% - by completing group assignments. There will be two exams:</p><ul><li>Midterm (20%)</li><li>Final(30%)</li></ul><p>..and three programming assignments:</p><ul><li>Assignment 1 (5%)</li><li>Assignment 2 (15%)</li><li>Assignment 3 (30%)</li></ul><p>You can retake the both exams at once during on the official retake date - 06/07/18. You cannot keep only a part of the retake grade. If you retake the exam, its entire grade will be used as 50% of your course grade. You cannot retake the assignments.</p><p>If you want to get the best possible grade, treat the deadline for assignments as strict. A day ends at 23:59:59. If your submission is a second late, it is a day late. You still receive a grade for a late assignment, but for every extra day you lose 20% of the grade. Hence, after the late day #5 there is no point in submitting. Any assignment submitted later will not be graded.</p><hr/>";
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
