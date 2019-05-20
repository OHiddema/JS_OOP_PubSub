$(function() {

    $('#addPerson').on('click', function(){
        let name = $('#name').val();
        // alert (name);
        appendStr = '<li><span>' + name + '</span><i class="del">X</i></li>'
        $('#people').append(appendStr);
    });

});