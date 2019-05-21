$(function() {

    $('#addPerson').on('click', function(){

        // Add LI-element inside UL-element
        let ppl = document.getElementById('people');
        let li = document.createElement('LI');
        ppl.appendChild(li);

        // Add SPAN-element inside LI-element and fill it with name in textbox
        let sp = document.createElement('SPAN');
        let node1 = document.createTextNode($('#name').val());
        sp.appendChild(node1);
        li.appendChild(sp);

        // Add I-element inside LI-element, attach a class to it and fill it with 'X'
        let i = document.createElement('I');
        i.setAttribute('class', 'del');
        let node2 = document.createTextNode('X');
        i.appendChild(node2);
        li.appendChild(i);

        // remove the whole list item containing this person
        i.onclick = function () {
            this.parentNode.remove();
        };
    });
});