$(document).ready(function() {

    $('#btnToggle').on('click', function(e){
        let status;
        if($(this).text() == 'Rele Turn ON') {
            $(this).text('Rele Turn OFF');
            $(this).removeClass().addClass('btn btn-block btn-light');
            status = 'on';
        } else {
            $(this).text('Rele Turn ON');
            $(this).removeClass().addClass('btn btn-block btn-dark');
            status = 'off';
        }
        
        $.ajax({
            url: '/led?status=' + status,
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();
    });
});