var pwgScript = document.createElement("script");
pwgScript.src = "https://form.crmmedyaglobal.com/Templates/pwg.js";
document.getElementsByTagName("head")[0].appendChild(pwgScript);
pwgScript.onload = function () {
  var validasyonDilScript = document.createElement("script");
  validasyonDilScript.src =
    "https://form.crmmedyaglobal.com/Templates/validateenginelanguages/jquery.validationEngine-tr.js";
  document.getElementsByTagName("head")[0].appendChild(validasyonDilScript);
  validasyonDilScript.onload = function () {
    var validasyonScript = document.createElement("script");
    validasyonScript.src =
      "https://form.crmmedyaglobal.com/Templates/validateengine.js";
    document.getElementsByTagName("head")[0].appendChild(validasyonScript);
    validasyonScript.onload = function () {
      var inputMaskScript = document.createElement("script");
      inputMaskScript.src =
        "https://form.crmmedyaglobal.com/Templates/inputmask.js";
      document.getElementsByTagName("head")[0].appendChild(inputMaskScript);
      inputMaskScript.onload = function () {
        var dateTimePickerScript = document.createElement("script");
        dateTimePickerScript.src =
          "https://form.crmmedyaglobal.com/Templates/datepicker.min.js";
        document
          .getElementsByTagName("head")[0]
          .appendChild(dateTimePickerScript);
        dateTimePickerScript.onload = function () {
          var numericJs = document.createElement("script");
          numericJs.src =
            "https://form.crmmedyaglobal.com/Templates/numeric.min.js";
          document.getElementsByTagName("head")[0].appendChild(numericJs);
          numericJs.onload = function () {
            var htmlLoading = "";
            htmlLoading +=
              '<div id="fade"></div> <div id="modal"><div class="loader"></div></div>';
            htmlLoading += "<style>";
            htmlLoading += "    #fade {";
            htmlLoading += "        display: none;";
            htmlLoading += "    position: absolute;";
            htmlLoading += "    top: 0%;";
            htmlLoading += "    left: 0%;";
            htmlLoading += "    width: 100%;";
            htmlLoading += "    height: 100%;";
            htmlLoading += "    background-color: #ababab;";
            htmlLoading += "    z-index: 1001;";
            htmlLoading += "    -moz-opacity: 0.8;";
            htmlLoading += "    opacity: .70;";
            htmlLoading += "    filter: alpha(opacity=80);";
            htmlLoading += "}";
            htmlLoading += "";
            htmlLoading += "        #modal {";
            htmlLoading += "        display: none;";
            htmlLoading += "    position: absolute;";
            htmlLoading += "    top: 45%;";
            htmlLoading += "    left: 45%;";
            htmlLoading += "    width: 95px;";
            htmlLoading += "    height: 95px;";
            htmlLoading += "    overflow-y: hidden !important;";
            htmlLoading += "    overflow-x: hidden !important;";
            htmlLoading += "    padding: 15px 1px 0px 20px;";
            htmlLoading += "    border: 3px solid #ababab;";
            htmlLoading += "    box-shadow: 1px 1px 10px #ababab;";
            htmlLoading += "    border-radius: 20px;";
            htmlLoading += "    background-color: white;";
            htmlLoading += "    z-index: 1002;";
            htmlLoading += "    text-align: center;";
            htmlLoading += "    overflow: auto;";
            htmlLoading += "}";
            htmlLoading += ".loader {";
            htmlLoading += "    border: 16px solid #f3f3f3;";
            htmlLoading += "    border-top: 16px solid #3498db;";
            htmlLoading += "    border-radius: 50%;";
            htmlLoading += "    width: 50px;";
            htmlLoading += "    height: 50px;";
            htmlLoading += "    animation: spin 2s linear infinite;";
            htmlLoading += "}";
            htmlLoading += "";
            htmlLoading += "@keyframes spin {";
            htmlLoading += "    0% {";
            htmlLoading += "        transform: rotate(0deg);";
            htmlLoading += "    }";
            htmlLoading += "";
            htmlLoading += "    100% {";
            htmlLoading += "        transform: rotate(360deg);";
            htmlLoading += "    }";
            htmlLoading += "}";

            htmlLoading += "</style>";

            function openModal() {
              document.getElementById("modal").style.display = "block";
              document.getElementById("fade").style.display = "block";
            }

            function closeModal() {
              document.getElementById("modal").style.display = "none";
              document.getElementById("fade").style.display = "none";
            }

            $("body").append(htmlLoading);

            $(document).ajaxStart(function () {
              openModal();
            });

            $(document).ajaxComplete(function () {
              closeModal();
            });

            function GetQueryStringParams(a) {
              for (
                var b = window.location.search.substring(1),
                  c = b.split("&"),
                  d = 0;
                d < c.length;
                d++
              ) {
                var e = c[d].split("=");
                if (e[0] == a) return e[1];
              }
            }

            var host = window.location.hostname;
            var tesekkurlerScript = "";

            var n = host.indexOf("localhost");

            if (n > -1) {
              if (host != "localhost:2493") {
                host = "localhost:2493";
              }
              var uri = "/Form/SaveForm";
            } else {
              if (host != "form.crmmedyaglobal.com") {
                host = "form.crmmedyaglobal.com";
              }
              var uri = "https://form.crmmedyaglobal.com/Form/SaveForm";
            }

            var link =
              "https://" +
              host +
              "/Form/FormSablonu?sablonID=42a3dac8-4b0c-4620-896f-92ef9bba95aa";
            var formbase = "evnFormHolder";
            var formid = "evnFormHolder";

            if (!document.getElementById(formbase)) {
              console.log("Taşıyıcı div bulunamadı.");
            } else {
              //document.getElementById(formbase).innerHTML = "";
              $.get(link, function (res) {
                $('[id="' + formbase + '"]').each(function () {
                  $(this).append(res);
                });

                //var pgwBrowser = $.pgwBrowser();
                var CurrentUrl = document.location.href;
                var refUrl = document.referrer;

                $('[id="Cururl"]').val(CurrentUrl);
                $('[id="Refurl"]').val(refUrl);
                $('[id="Os"]').val(window.navigator.oscpu) //pgwBrowser.os.name);
                $('[id="Browser"]').val(window.navigator.appCodeName)//pgwBrowser.browser.name);
                $(".numeric").numeric();
                $("form").validationEngine("attach", {
                  promptPosition: "topLeft",
                  scroll: false,
                });
                $(".mask").mask("0 - (599) 999-9999");

                if ($(".dateTimePicker").length > 0) {
                  $(".dateTimePicker").datepicker({
                    autoclose: true,
                    format: "dd.mm.yyyy",
                    maxViewMode: 0,
                    startDate: "now",
                  });

                  if ($(".dateTimePicker").length > 1) {
                    var loop = false;
                    $(".dateTimePicker")
                      .first()
                      .on("change", function () {
                        if (!loop) {
                          var __customDate = $(".dateTimePicker").first().val();
                          var _dateArray = __customDate.split(".");
                          var _customDate = new Date(
                            _dateArray[2] +
                              "-" +
                              _dateArray[1] +
                              "-" +
                              _dateArray[0]
                          );
                          loop = true;
                          $(".dateTimePicker").last().datepicker("destroy");
                          $(".dateTimePicker").last().datepicker({
                            autoclose: true,
                            format: "dd.mm.yyyy",
                            maxViewMode: 0,
                            startDate: _customDate,
                          });
                        } else {
                          loop = false;
                        }
                      });

                    $(".dateTimePicker")
                      .last()
                      .on("change", function () {
                        if (!loop) {
                          var __customDate = $(".dateTimePicker").last().val();
                          var _dateArray = __customDate.split(".");
                          var _customDate = new Date(
                            _dateArray[2] +
                              "-" +
                              _dateArray[1] +
                              "-" +
                              _dateArray[0]
                          );
                          loop = true;
                          $(".dateTimePicker").first().datepicker("destroy");
                          $(".dateTimePicker").first().datepicker({
                            autoclose: true,
                            format: "dd.mm.yyyy",
                            maxViewMode: 0,
                            endDate: _customDate,
                          });
                        } else {
                          loop = false;
                        }
                      });
                  }
                }

                $("#" + formid).submit(function (event) {
                  event.preventDefault();

                  if ($("#" + formid).validationEngine("validate")) {
                    $("form#" + formid + " input[type='submit']").prop(
                      "disabled",
                      true
                    );
                    $("form#" + formid + " input[type='submit']").hide();

                    var inputIdler = new Array();
                    var inputValueler = new Array();

                    var adSoyad = "";
                    var telefon = "";
                    var email = "";
                    var mesaj = "";
                    var izin = "-1";

                    $("form#" + formid + " [data-forminputid]").each(
                      function () {
                        var type = $(this).attr("type");
                        var onTanimliMi = $(this).hasClass("defInput");
                        if (
                          type != undefined &&
                          (type == "text") |
                            (type == "password") |
                            (type == "email") |
                            (type == "tel")
                        ) {
                          if (!onTanimliMi) {
                            var inputid = $(this).attr("data-forminputid");
                            var inputvalue = $(this).val();
                            inputIdler.push(inputid);
                            inputValueler.push(inputvalue);
                          } else {
                            // adsoyad, telefon, email
                            var id = $(this).attr("id");

                            if (id == "AdSoyad") {
                              adSoyad = $(this).val();
                            } else if (id == "Telefon") {
                              telefon =
                                $(
                                  "#" + formid + " .iti__selected-dial-code"
                                ).text() + $(this).val();
                            } else {
                              email = $(this).val();
                            }
                          }
                        }
                      }
                    );

                    $("form#" + formid + " input[type=radio]").each(
                      function () {
                        if ($(this).is(":checked")) {
                          var inputid = $(this).attr("data-forminputid");
                          var inputvalue = $(this).is(":checked");
                          var onTanimliMi = $(this).hasClass("defInput");
                          if (!onTanimliMi) {
                            inputIdler.push(inputid);
                            inputValueler.push(inputvalue);
                          } else {
                            if (izin == "-1") {
                              izin = $(this).attr("data-permission");
                            } else {
                              izin =
                                izin + "," + $(this).attr("data-permission");
                            }
                          }
                        }
                      }
                    );

                    $("form#" + formid + " input[type=checkbox]").each(
                      function () {
                        if ($(this).attr("name") === "izin") {
                          izin = $(this).is(":checked") ? "1" : "0";
                        } else {
                          var inputid = $(this).attr("data-forminputid");
                          var inputvalue = $(this).is(":checked").toString();
                          inputIdler.push(inputid);
                          inputValueler.push(inputvalue);
                        }
                      }
                    );

                    $("form#" + formid + " textarea").each(function () {
                      var onTanimliMi = $(this).hasClass("defInput");
                      if (!onTanimliMi) {
                        var inputid = $(this).attr("data-forminputid");
                        var inputvalue = $(this).val();
                        inputIdler.push(inputid);
                        inputValueler.push(inputvalue);
                      } else {
                        // mesaj
                        mesaj = $(this).val();
                      }
                    });

                    $("form#" + formid + " select option:selected").each(
                      function () {
                        var inputid = $(this).parent().attr("data-forminputid");
                        var inputvalue = $(this).html();
                        inputIdler.push(inputid);
                        inputValueler.push(inputvalue);
                      }
                    );

                    var curUrl = $("#Cururl").val();
                    var refUrl = $("#Refurl").val();
                    var os = $("#Os").val();
                    var browser = $("#Browser").val();
                    var sablonID = $("#" + formid + " #SablonID").val();
                    var utm_source = GetQueryStringParams("utm_source")
                      ? GetQueryStringParams("utm_source")
                      : "direct";
                    var utm_medium = GetQueryStringParams("utm_medium")
                      ? GetQueryStringParams("utm_medium")
                      : "";
                    var utm_campaign = GetQueryStringParams("utm_campaign")
                      ? GetQueryStringParams("utm_campaign")
                      : "";
                    var gclid = GetQueryStringParams("gclid")
                      ? GetQueryStringParams("gclid")
                      : "";

                    var utm =
                      utm_source + "/" + utm_medium + "/" + utm_campaign;
                    var yonlenmeYapilacakMi = $("#yonlenmeYapilacakMi").val();
                    var yonlenmeSuresi = $("#yonlenmeSuresi").val();
                    var yonlenmeAdresi = $("#yonlenmeAdresi").val();

                    var postData = {
                      inputIdler: inputIdler,
                      inputValueler: inputValueler,
                      curUrl: curUrl,
                      refUrl: refUrl,
                      os: os,
                      browser: browser,
                      utm: utm,
                      adSoyad: adSoyad,
                      telefon: telefon,
                      email: email,
                      mesaj: mesaj,
                      izin: izin,
                      gclid: gclid,
                    };

                    $.ajax({
                      type: "POST",
                      url: uri,
                      data: {
                        form: JSON.stringify(postData),
                        sablonID: sablonID,
                      },
                      dataType: "json",
                      success: function (jsonResult) {
                        Do();

                        function Do() {
                          if (jsonResult.FormKaydedildi) {
                            $("#" + formid).remove();

                            window.top.location.href = "tesekkurler";
                          } else {
                            if (
                              $("#" + formbase).find("#" + formid).length > 0
                            ) {
                              var those = $("#" + formbase).find("#" + formid);
                              $("#" + formid).remove();
                              those.append(
                                jsonResult.FormBasarisizIseDonecekHtml
                              );
                            }

                            console.log(jsonResult.Desc);
                          }
                        }
                      },
                    });
                  }
                });
              });
            }

            $(document)
              .ajaxStart(function () {
                console.log("YÜkleniyor");
              })
              .ajaxSuccess(function () {
                console.log("yükleme tamamlandı");
              });
          };
        };
      };
    };
  };
};
function soyad2harfkontrol(field, rules, i, options) {
  var res = field.val().split(" ");
  if (res[res.length - 1].length < 2) {
    return "* Soyad 2 harften az olamaz";
  }
}
