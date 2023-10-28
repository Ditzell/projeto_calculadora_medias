$(document).ready(function() {
    $("#tarefas").submit(function(e) {
        e.preventDefault();
        var taskName = $("#adicionar-tarefa").val();
        if (taskName.trim() !== "") {
            $("#lista-tarefas").append('<li>' + taskName + '</li>');
            $("#adicionar-tarefa").val("");
        }
    });

    $("#lista-tarefas").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
