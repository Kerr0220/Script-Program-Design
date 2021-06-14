class Task {
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.isFinished = false;
        this.priority = 0;
    }
}

var uncplTaskNum = 0;
var cplTaskNum = 0;

function openTask(taskDiv) {
    window.location.href = "editor.html";
    checkBox = taskDiv.firstElementChild;
    console.log(checkBox.checked);
}

function changeTaskStatement(taskDiv) {
    state = taskDiv.firstElementChild.checked;
    taskTitle = taskDiv.childNodes[3].childNodes[1];
    if (state == true) {
        taskTitle.style.textDecoration = "line-through";
        uncplTaskNum--;
        cplTaskNum++;
        taskTitle.style.color = "#9d9d9d";
        document.getElementById("finishedListDiv").append(taskDiv);
        if (uncplTaskNum == 0) {
            noticeShow();
        }
    } else {
        uncplTaskNum++;
        cplTaskNum--;
        taskTitle.style.textDecoration = "none";
        taskTitle.style.color = "#000000";
        document.getElementById("unfinishedTaskListDiv").append(taskDiv);
        if (uncplTaskNum != 0) {
            noticeHide();
        }
    }
}

var completedList = 0;

function showOrHideCompleted() {
    if (0 == completedList) {
        completedList = 1;
        document.getElementById("finishedListDiv").style.display = "none";
    } else {
        completedList = 0;
        document.getElementById("finishedListDiv").style.display = "";
    }
}

function addTask(newTaskDiv) {
    uncplTaskNum++;
    noticeHide();
    title = newTaskDiv.childNodes[3].value;
    ddl = "none";
    document.getElementById("unfinishedTaskListDiv").innerHTML += "<div class=\"taskDiv\">\n" +
        "            <input type=\"checkbox\" class=\"check\" onchange=\"changeTaskStatement(this.parentNode)\">\n" +
        "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
        "                <label class=\"checkTitle\">" + title + "</label><br/>\n" +
        "                <label class=\"checkDdl\">ddl: " + ddl + "</label>\n" +
        "            </div>\n" +
        "        </div>";
    newTaskDiv.childNodes[3].value = "";
}

function noticeHide() {
    p = document.getElementById("notice").childNodes;
    p[1].style.display="none";
    p[3].style.display="none";
}

function noticeShow() {
    p = document.getElementById("notice").childNodes;
    p[1].style.display="";
    p[3].style.display="";
}