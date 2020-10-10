$(function() {
    // Changes the state of a burger to devoured=true when its button is pressed using an ajax call
    $(".devour-button").on("click", function(event) {
        // The clicked burger's id
        var id = $(this).data("id");
        console.log($(this));
        // Ajax call to update the burger in the table
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            console.log("devoured it...");
            location.reload();
        });
    });


    // Adds a burger to the database when submit is pressed and a new burger name is given
    $("#burger-submit").on("click", function(event) {
        // Prevents page reload before actions are taken
        event.preventDefault();

        // Creates the necessary data for the new burger, a name.
        var newBurger = {name: $("#burger-input").val().trim()}
        console.log("Adding " + newBurger.name);

        // Ajax call to add the burger with the appropriate name
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log(`Added "${newBurger.name}" to the database`);
            location.reload();
        });
    });

});