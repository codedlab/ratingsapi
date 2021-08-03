const modelRate = require("../models/rate");

exports.execPostRate = (req, res) => {
  let postid = req.params.postId;
  const rate = new modelRate({
    rate: req.body.rate,
    postid,
  });
  rate
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "created post request",
        createdPost: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

exports.execAvgRate = (req, res) => {
  modelRate.aggregate(
    [
      {
        $group: {
          _id: null,
          average: { $avg: "$rate" },
        },
      },
    ],
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
};
