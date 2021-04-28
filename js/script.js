$(document).ready(function () {
    $(window).scroll(function () {

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });
});


const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Mengirim...';

        const serviceID = 'default_service';
        const templateID = 'template_wd9hczf';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Kirim Pesan';
                alert('Pesan telah terkirim!');
            }, (err) => {
                btn.value = 'Kirim Pesan';
                alert(JSON.stringify(err));
            });
    });