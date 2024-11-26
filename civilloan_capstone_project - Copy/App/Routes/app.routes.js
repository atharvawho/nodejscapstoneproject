module.exports = app => {
    const apps = require('../Controllers/app.controller.js');
    const AppError = require('../../utils/appError');

    app.get('/allservices', apps.allservices);
    app.get('/service/:type', apps.getservicesbytype);
    app.post('/service/:type/form', apps.addrequest);
    app.post('/member', apps.addmember);
    app.post('/service/:type/calculate', apps.calculateemi);
    app.put('/updaterequest', apps.updaterequest);
    app.put('/updatepassword', apps.updatepassword);
    app.delete('/deleterequest', apps.deleterequest);
    app.delete('/cancelmember', apps.deletemember);


    app.all('*', (req, res, next)=> {
        next(new AppError(`cant find ${req.originalUrl} on this server`,404));
        
    });
    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error';
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    });


}