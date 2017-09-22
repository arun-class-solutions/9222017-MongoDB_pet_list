$(document).ready(function() {

  $(".remove-owner-button").on("click", function() {
    var ownerId = $(this).attr("data-owner-id");

    var deleteConfirm = confirm("Are you sure you want to delete this owner?");

    if (deleteConfirm) {
      $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/owners/" + ownerId
      })
      .then(function() {
        window.location.reload();
      })
      .catch(function() {
        alert("Delete failed!");
      });
    }
  });

  $(".remove-pet-button").on("click", function() {
    var petId = $(this).attr("data-pet-id");

    var deleteConfirm = confirm("Are you sure you want to delete this pet?");

    if (deleteConfirm) {
      $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/pets/" + petId
      })
      .then(function() {
        window.location.reload();
      })
      .catch(function() {
        alert("Delete failed!");
      });
    }
  });

});
