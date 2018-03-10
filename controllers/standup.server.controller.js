var Standup = require('../models/standup.server.model.js');

exports.list = function (req, res) {
    var query = Standup.find();
    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function (err, results) {
            res.render('index', { title: 'Standup - List', notes: results });
        });
}

exports.create = function (req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    console.log('entry:', entry);

    // entry.save();
    entry.save(function (err) {
        if (err) {
            console.warn(err);
            var errMsg = 'Sorry, there was an error saving the stand-up meeting note.' + err.message;
            res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
        }
        else {
            console.log('Stand-up meeting note was saved!');
            res.redirect(301, '/');
        }
    });

    // redirect to home page...
    // res.redirect(301, '/');
}

exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup - New Note' });
}