var mongoose = require('mongoose');

var standupSchema = new mongoose.Schema({
    memberName: {type: String, required: true},
    project: {type: String, required: true},
    workYesterday: {type: String, required: true},
    workToday: {type: String, required: true},
    impediment: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Export model...
// module.export = mongoose.model('Standup', standupSchema);
module.exports = mongoose.model('Standup', standupSchema);

// disabled _id
// var noIdSchema = new Schema({ name: String}, {_id: false});

// // Example of using Schema.add ...
// var includeMiddleName = true;

// var exampleSchema = new Schema;

// if(includeMiddleName){
//     exampleSchema.add({
//         memberName: {
//             first: String,
//             middle: String,
//             last: String
//         }
//     });
// }else{
//     exampleSchema.add({
//         memberName: {
//             first: String,
//             last: String
//         }
//     });
// };

// exampleSchema.add({
//     project: String,
//     workYesterday: String,
//     workToday: String,
//     impediment: String,
//     createdOn: {type: Date, default: Date.now}
// });