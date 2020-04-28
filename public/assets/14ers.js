
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-climbed").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      console.log(id);
      let newClimbedState= {
        climbed:1
      };

      // Send the PUT request.
      $.ajax("/api/14ers/" + id, {
        type: "PUT",
        data: newClimbedState
      }).then
         console.log("changed climbed to", newClimbedState);
          // Reload the page to get the updated list
          location.reload();
      
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFourteener = {
        name: $("#14er").val().trim(),
        climbed: $("[name=climbed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/14ers", {
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
  