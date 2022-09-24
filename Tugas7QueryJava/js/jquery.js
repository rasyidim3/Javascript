$("document").ready(function () {
  $("#imgharimau").hide();
  $("#harimau").click(function () {
    $("#imgharimau").show();
    // $("#harimau").audio.pause();

    $("<audio></audio>")
      .attr({
        src: "audio/harimau.mp3",
        volume: 0.4,
        autoplay: "autoplay",
    })
      .appendTo("body");

      
  });

  $("#imgmonyet").hide();
  $("#monyet").click(function () {
    $("#imgmonyet").show();
    // $("#monyet").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/monyet.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgsinga").hide();
  $("#singa").click(function () {
    $("#imgsinga").show();
    // $("#singa").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/singa.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgsrigala").hide();
  $("#srigala").click(function () {
    $("#imgsrigala").show();
    // $("#srigala").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/srigala.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imganjing").hide();
  $("#anjing").click(function () {
    $("#imganjing").show();
    // $("#anjing").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/anjing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgburung").hide();
  $("#burung").click(function () {
    $("#imgburung").show();
    // $("#burung").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/burung.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgkucing").hide();
  $("#kucing").click(function () {
    $("#imgkucing").show();
    // $("#kucing").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/kucing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgayam").hide();
  $("#ayam").click(function () {
    $("#imgayam").show();
    $("#ayam").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/ayam.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgbebek").hide();
  $("#bebek").click(function () {
    $("#imgbebek").show();
    $("#bebek").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/bebek.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgkambing").hide();
  $("#kambing").click(function () {
    $("#imgkambing").show();
    $("#kambing").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/kambing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgsapi").hide();
  $("#sapi").click(function () {
    $("#imgsapi").show();
    $("#sapi").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/sapi.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgjil").hide();
  $("#jil").click(function () {
    $("#imgjil").show();
    // $("#jil").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/jil.webm",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgmurahbanget").hide();
  $("#murahbanget").click(function () {
    $("#imgmurahbanget").show();
    // $("#murahbanget").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/murahbanget.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgmursid").hide();
  $("#mursid").click(function () {
    $("#imgmursid").show();
    // $("#mursid").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/mursid.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $("#imgslebew").hide();
  $("#slebew").click(function () {
    $("#imgslebew").show();
    // $("#slebew").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/slebew.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });

  $("#imgsultan").hide();
  $("#sultan").click(function () {
    $("#imgsultan").show();
    // $("#sultan").hide();

    $("<audio></audio>")
      .attr({
        src: "audio/sultan.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  //   $(".monyet").click(function () {
  //     $(this).css({
  //       background: "url(images/monyet.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/monyet.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".singa").click(function () {
  //     $(this).css({
  //       background: "url(images/singa.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/singa.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".kucing").click(function () {
  //     $(this).css({
  //       background: "url(images/kucing.png)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/kucing.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".anjing").click(function () {
  //     $(this).css({
  //       background: "url(images/anjing.png)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/anjing.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".burung").click(function () {
  //     $(this).css({
  //       background: "url(images/burung.png)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/burung.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".sapi").click(function () {
  //     $(this).css({
  //       background: "url(images/sapi.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/sapi.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".kambing").click(function () {
  //     $(this).css({
  //       background: "url(images/kambing.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/kambing.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".bebek").click(function () {
  //     $(this).css({
  //       background: "url(images/bebek.png)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/monyet.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".ayam").click(function () {
  //     $(this).css({
  //       background: "url(images/ayam.png)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/ayam.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".jil").click(function () {
  //     $(this).css({
  //       background: "url(images/jil.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/jil.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".mursid").click(function () {
  //     $(this).css({
  //       background: "url(images/mursid.jpeg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/mursid.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".sultan").click(function () {
  //     $(this).css({
  //       background: "url(images/sultan.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/sultan.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".slebew").click(function () {
  //     $(this).css({
  //       background: "url(images/slebew.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/slebew.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
  //   $(".murahbanget").click(function () {
  //     $(this).css({
  //       background: "url(images/murahbanget.jpg)",
  //     });
  //     $("<audio></audio>")
  //       .attr({
  //         src: "audio/murahbanget.mp3",
  //         volume: 0.4,
  //         autoplay: "autoplay",
  //       })
  //       .appendTo("body");
  //   });
});
