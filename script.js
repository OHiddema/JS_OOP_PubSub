$(function() {

    $('#addPerson').on('click', function(){

        let ppl = document.getElementById('people')
        let li = document.createElement('LI');
        ppl.appendChild(li);

        let sp = document.createElement('SPAN');
        let node1 = document.createTextNode($('#name').val());
        sp.appendChild(node1);

        li.appendChild(sp);

        let i = document.createElement('I');
        i.setAttribute('class', 'del');
        let node2 = document.createTextNode('X');
        i.appendChild(node2);

        li.appendChild(i);

        i.onclick = function () {
            this.parentNode.remove();
        };
    });
});