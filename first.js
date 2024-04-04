let main = document.getElementById('main');

let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'c':
                main.innerText = '';
                break;
            case '←':
                if(main.innerText){
                main.innerText = main.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                    main.innerText = eval(main.innerText );
                    } catch{
                        main.innerText = 'Error!';
                    }
                    break;
            default:
                main.innerText += e.target.innerText;
        }

    });
});