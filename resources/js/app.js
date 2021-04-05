require('./bootstrap');

var Turbolinks = require("turbolinks")
Turbolinks.start()

Echo.channel('notifications')
    .listen('UserSessionChanged', (e) => {
        console.log(e);
        // const notificationElement = document.getElementById('notification');

        // notificationElement.innerText = e.message;

        // notificationElement.classList.remove('invisible');
        // notificationElement.classList.remove('alert-success');
        // notificationElement.classList.remove('alert-danger');

        // notificationElement.classList.add('alert-' + e.type);

        toastr.options = {
            "closeButton": true,
            "debug": true,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "3000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        toastr.info(e.message);

    });

Echo.channel('notifications')
