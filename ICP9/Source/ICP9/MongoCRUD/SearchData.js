/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://sreeram43:qwerty@ds213229.mlab.com:13229/mydb';
var findUser = function(db, callback) {
    var cursor =db.collection('ase').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};
var findUserwithName = function(db,callback) {
    var cursor = db.collection('ase').find({"email":"abc@abc.com"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            //console.log("city:" + doc.address.city);
            console.log("email:" + doc.email);
        }
    });
}
var findUserwithUniversity = function(db, callback) {
    var cursor = db.collection('ase').find({"education.university":"UMKC"});
    cursor.each(function(err,doc){
       assert.equal(err,null);
       if(doc != null)
       {
           console.log("First Name:" + doc.fname);
           console.log("University:" + doc.education.university);
           console.log("Degree:" + doc.education.degree);
           console.log("Major:" + doc.education.major);
           console.log("mail:" + doc.mail);
       }
    });
}
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var db =client.db('mydb')
    findUserwithName(db, function() {
        db.close();
    });
});