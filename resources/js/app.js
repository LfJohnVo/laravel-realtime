require('./bootstrap');

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
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
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
