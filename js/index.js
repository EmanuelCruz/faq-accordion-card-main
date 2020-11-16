let buttons = document.querySelectorAll('.button--question')

buttons.forEach((button,index) => {
    button.addEventListener('click', function () {
        closeOtherAnswers()
        toggleTitleQuestion()
        toggleButtonQuestion()
    })

    //Cerrar las demas respuestas
    function closeOtherAnswers() {
        let otherAnswers = document.querySelectorAll('.question__answer')
        otherAnswers.forEach((answer,i) => {
            if (i!==index) {
                let classes = answer.classList
                let result = classes.contains('active')
                if (result) {
                    classes.replace('active','inactive')
                    //Rotar los iconos a la posicion inicial
                    let icon = document.querySelectorAll('.button__icon')[i]
                    let classesIcon = icon.classList
                    classesIcon.remove('rotate')
                }
            }
        });
    }

    //Desactivar titulo
    function toggleTitleQuestion() {
        let titles = document.querySelectorAll('.button__title')
        titles.forEach((title,i) => {
            if (i!==index) {
                let title = titles[i]
                console.log(title)
                let classesTitle = title.classList
                classesTitle.replace('title--active','title')
            }
        });
    }

    //Rotar flecha
    function rotateArrow() {
        
    }

    //Abrir la respuesta y cerrarla
    function toggleButtonQuestion() {
        let answer = document.querySelectorAll('.question__answer')[index]
        let classes = answer.classList
        let result = classes.contains('inactive')

        if (result) {
            //mostrar respuesta
            classes.replace('inactive','active')
            //Activar titulo
            let titles = document.querySelectorAll('.button__title')
            let title = titles[index]
            let classesTitle = title.classList
            classesTitle.replace('title','title--active')

            let icon = document.querySelectorAll('.button__icon')[index]
            let classesIcon = icon.classList
            classesIcon.add('rotate')

        } else {
            //mostrar respuesta
            classes.replace('active','inactive')
            //Desactivar titulo
            let titles = document.querySelectorAll('.button__title')
            let title = titles[index]
            let classesTitle = title.classList
            classesTitle.replace('title--active','title')

            let icon = document.querySelectorAll('.button__icon')[index]
            let classesIcon = icon.classList
            classesIcon.remove('rotate')
        }
    }
});



