// Custom JS
// --------------------------------------------------


// Parse.initialize(
//   "Ohjc3hJYzjkUCQ3ixjg8ctT6PSLGMsJiV5iU3S5V",
//   "Pi77Xf3PQg3q7JKIJqpt5gj9VLfsMP3OJSGiBeSU"
// );
// Parse.serverURL = 'https://pg-app-63uqnhicgaqayd6rgdttg14cfeuuue.scalabl.cloud/1/';


// var GameScore = Parse.Object.extend("Category");
// var query = new Parse.Query(GameScore);
// query.find({
//   success: function(results) {
//     for (var i = 0; i < results.length; i++) {
//       var object = results[i];
//       $('#categoryList').append('<div><input name="cList" id="'+object.id+'" value="'+object.id+'" type="checkbox"><label for="'+object.id+'">'+object.get("name")+'</label></div>')
//     }
//     $('#pgbar .progress-meter').animate({width: "10%"}, 1500 );
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

// alert('working')
// var temp;
// var temp2;
// var previewImage;
// var base64;

// $('#newPost').submit(function(event){
//     event.preventDefault();
//     var categoriesArray=[];
//     //console.log('temp');
//     $('input[name=cList]:checked').each(function(index){
//      categoriesArray.push({"__type":"Pointer","className":"Category","objectId":$(this).val()});
//      console.log(JSON.stringify(categoriesArray));
//     });
//     $('#pgbar .progress-meter').animate({width: "20%"}, 1500 );
    
//     var url = $('#postURL').val();
//     var encodedurl = encodeURIComponent(url)
//     //console.log(encodedurl);

//     $.ajax({
//       url: "https://opengraph.io/api/1.0/site/"+encodedurl,
//       type: "get", //send it through get method
//       data:{app_id: "586142ebeab1500e00d245dd"},
//       success: function(data) {
//         //Do Something
//         $('#pgbar .progress-meter').animate({ width: "50%" }, 1500);
//         $('#postFetch').fadeOut();
//         $('#postPreview').delay().fadeIn();
//         //temp = data;

//         $('#FileUpload').bind("change", function(e) {
//          var fileUploadControl = $("#FileUpload")[0];
//          var file = fileUploadControl.files[0];
//          var name = file.name; //This does *NOT* need to be a unique name
//          var parseFile = new Parse.File(name, file);

//          var GameScore2 = Parse.Object.extend("Post");
//           var gameScore2 = new GameScore2();

//           //gameScore2.set("title", data.hybridGraph.title);
//           gameScore2.set("pic", parseFile);
//           gameScore2.set("category", categoriesArray);
//           if($('#adultCheck').prop("checked")){
//             gameScore2.set("adult", true);
//           }
//           else{
//             gameScore2.set("adult", false);
//           }
//           gameScore2.set('locale', $('#selectLocale').val());
//           gameScore2.set("url", url);
//           gameScore2.save(null, {
//             success: function(gameScore) {
//               //alert('New object created with objectId: ' + gameScore.id);
//               $('#pgbar .progress-meter').animate({width: "100%"}, 1500 );
//               $('#pgbar').addClass('success').removeClass('warning');
//             },
//             error: function(gameScore, error) {
//               alert('Failed to create new object, with error code: ' + error.message);
//             }
//           });
//         });
//       },
//       error: function(xhr) {
//         temp2=xhr;
//         //Do Something to handle error
//         console.log(xhr)
//       }
//     });

//     //$.get( "https://opengraph.io/api/1.0/site/"+encodedurl, function(data) {
        
//     //     });
//     // });
//     return false
// });

// function toDataUrl(src, callback, outputFormat) {
//   var img = new Image();
//   img.crossOrigin = 'Anonymous';
//   img.onload = function() {
//     var canvas = document.createElement('CANVAS');
//     var ctx = canvas.getContext('2d');
//     var dataURL;
//     canvas.height = this.height;
//     canvas.width = this.width;
//     ctx.drawImage(this, 0, 0);
//     dataURL = canvas.toDataURL(outputFormat);
//     callback(dataURL);
//   };
//   img.src = src;
//   if (img.complete || img.complete === undefined) {
//     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//     img.src = src;
//   }
// }


// var img_b64 = canvas.toDataURL('image/png');
// var png = img_b64.split(',')[1];

// var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});

// var fr = new FileReader();
// fr.onload = function ( oFREvent ) {
//     var v = oFREvent.target.result.split(',')[1]; // encoding is messed up here, so we fix it
//     v = atob(v);
//     var good_b64 = btoa(decodeURIComponent(escape(v)));
//     document.getElementById("uploadPreview").src = "data:image/png;base64," + good_b64;
// };
// fr.readAsDataURL(the_file);
