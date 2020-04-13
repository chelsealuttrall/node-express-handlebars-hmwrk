// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-climbed").on("click", function(event) {
      var id = $(this).data("id");
      var newClimbed = $(this).data("newclimbed");
  
      var newClimbedState = {
        climbed: newClimbed
      };
  
      // Send the PUT request.
      $.ajax("/api/fourteeners/" + id, {
        type: "PUT",
        data: newClimbedState
      }).then(
        function() {
          console.log("changed climbed to", newClimbed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFourteener = {
        name: $("#14ers").val().trim(),
        climbed: $("[name=climbed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/fourteeners", {
        type: "POST",
        data: newFourteener
      }).then(
        function() {
          console.log("created new 14er");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  