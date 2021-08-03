// #! /usr/bin/env node

// var userArgs = process.argv.slice(2);
// var async = require("async");
// var Rate = require("./models/rate");
// var Post = require("./models/post");

// var mongoose = require("mongoose");
// var mongoDB = userArgs[0];
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// var posts = [];
// var rates = [];

// function postPopulateDb(_id, post, rate, cb) {
//   var post = new Post({ _id: _id, post: post, rate: rate });

//   post.save(function (err) {
//     if (err) {
//       cb(err, null);
//       return;
//     }
//     console.log("New Post: " + post);
//     posts.push(post);
//     cb(null, post);
//   });
// }

// function ratePopulateDb(rate, postid, cb) {
//   var rate = new Rate({ rate: rate, postid: postid });

//   rate.save(function (err) {
//     if (err) {
//       cb(err, null);
//       return;
//     }
//     console.log("New Rate: " + rate);
//     rates.push(rate);
//     cb(null, rate);
//   });
// }

// function createsyncingPost(cb) {
//   async.parallel(
//     [
//       function (callback) {
//         postPopulateDb(
//           "61086ee01560f8052200f458",
//           "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization",
//           4,
//           callback
//         );
//       },
//       function (callback) {
//         postPopulateDb(
//           "61086f0dff6b7bc35423166d",
//           "There are two ways to write error-free programs; only the third one works.",
//           3,
//           callback
//         );
//       },
//       function (callback) {
//         postPopulateDb(
//           "61086f18ebaf82e2fc72df60",
//           "Before software can be reusable it first has to be usable",
//           5,
//           callback
//         );
//       },
//       function (callback) {
//         postPopulateDb(
//           "61086f22017187f53e4cf814",
//           "One man’s crappy software is another man’s full-time job.",
//           5,
//           callback
//         );
//       },
//       function (callback) {
//         postPopulateDb(
//           "61086fd326316f1bebdb88f3",
//           "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
//           5,
//           callback
//         );
//       },
//     ],
//     cb
//   );
// }
// function createsyncingRate(cb) {
//   async.series(
//     [
//       function (callback) {
//         ratePopulateDb(4, "61086ee01560f8052200f458", callback);
//       },
//       function (callback) {
//         ratePopulateDb(3, "61086f0dff6b7bc35423166d", callback);
//       },
//       function (callback) {
//         ratePopulateDb(5, "61086f18ebaf82e2fc72df60", callback);
//       },
//       function (callback) {
//         ratePopulateDb(5, "61086f22017187f53e4cf814", callback);
//       },
//       function (callback) {
//         ratePopulateDb(5, "61086fd326316f1bebdb88f3", callback);
//       },
//     ],
//     cb
//   );
// }

// async.series([createsyncingPost, createsyncingRate], function (err, results) {
//   if (err) {
//     console.log("FINAL ERR: " + err);
//   }
//   mongoose.connection.close();
// });
