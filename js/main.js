$("#view-about").on("click", function() {
  const about = $("#about").position().top;

  $("html, body").animate(
    {
      scrollTop: about
    },
    900
  );
});

$("#view-project-idea").on("click", function() {
  const contact = $("#project-idea").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});

$("#view-extra-info").on("click", function() {
  const contact = $("#extra-info").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});

$("#view-contact").on("click", function() {
  const contact = $("#contact").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});
