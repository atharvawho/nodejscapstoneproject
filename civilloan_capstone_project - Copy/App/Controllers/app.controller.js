const members = require('../Models/app.model.members.js');
const requests = require('../Models/app.model.requests.js');
const services = require('../Models/app.model.services.js');

exports.allservices = (req, res) => {
    services.find()
    .then(services => {
        res.send(services);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving services."
        });
    });
}

exports.getservicesbytype = (req, res) => {
    services.find({type: req.params.type})
    .then(services => {
        res.send(services);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving services."
        });
    });
}

exports.addrequest = (req, res) => {
    const request = new requests(req.body);
    request.save()
    .then(request => {
        res.send({
            message: "Request added successfully",
            data: request
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Request."
        });
    });
}



exports.addmember = (req, res) => {
    members.create(req.body)
    .then(members => {
        res.send({
            message: "Member added successfully",
            data: members
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the member."
        });
    });
}

exports.calculateemi = (req, res) => {
    let emi = req.body.amt / req.body.tenure;
    res.send({
        emi: emi
    });
}

exports.updaterequest = (req, res) => {
    requests.findOneAndUpdate({mobile : req.body.mobile}, 
        {code : req.body.code, type : req.body.type, msg : req.body.msg})
    .then(request => {
        res.send({
            message: "Request updated successfully",
            data: request
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the Request."
        });
    });
}

exports.updatepassword = (req, res) => {
    members.findOneAndUpdate({mobile : req.body.mobile},
        {createpassword : req.body.createpassword})
        .then(members => {
            res.send({
                message: "Password updated successfully",
                data: members
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the password."
            });
        });
}

exports.deleterequest = (req, res) => {
    requests.findOneAndDelete({mobile : req.body.mobile})
    .then(request => {
        res.send({
            message: "Request deleted successfully",
            data: request
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the Request."
        });
    });
}

exports.deletemember = (req, res) => {
    members.findOneAndDelete({mobile : req.body.mobile})
    .then(members => {
        res.send({
            message: "Member deleted successfully",
            data: members
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the member."
        });
    });
}