function show_contact(){
    var div = document.getElementById('contact')
    if(div.classList.contains('hidden')){
        var open = document.getElementById('open')
        var close = document.getElementById('close')
        div.classList.add('translate-x-60')
        div.classList.remove('hidden')
        div.classList.add('flex')
        div.classList.add('opacity-0')
        setTimeout(() => {
            div.classList.remove('opacity-0')
            div.classList.remove('translate-x-60')
            open.classList.add('opacity-0')
            close.classList.add('opacity-0')
        }, 0);
        setTimeout(() => {
            open.classList.add('hidden')
            close.classList.remove('hidden')
            close.classList.remove('opacity-0')
        }, 150)
    }
}

function hide_contact(load=false){
    var div = document.getElementById('contact')
    if(load){
        var open = document.getElementById('load')
    }
    else{
        var open = document.getElementById('open')
    }
    var close = document.getElementById('close')
    setTimeout(() => {
        div.classList.add('translate-x-60')
        div.classList.add('opacity-0')
        close.classList.add('opacity-0')
    }, 0);
    setTimeout(() => {
        close.classList.add('hidden')
        close.classList.remove('opacity-0')
        open.classList.remove('opacity-0')
        open.classList.remove('hidden')
    }, 150)
    setTimeout(() => {
        div.classList.remove('translate-x-60')
        div.classList.remove('flex')
        div.classList.add('hidden')
        div.classList.remove('opacity-0')
    }, 350);
}


function toggle_contact(){
    var div = document.getElementById('contact')
    if(div.classList.contains('hidden')){
        show_contact()
    }
    else{
        hide_contact()
    }
}

function post_submit(){
    hide_contact(true)
    document.getElementById('fn').value = ''
    document.getElementById('ewp').value = ''
    document.getElementById('msg').value = ''
    setTimeout(() => {
        document.getElementById('load').classList.add('hidden')
        document.getElementById('done').classList.remove('hidden')
    }, 1000);
    setTimeout(() => {
        document.getElementById('done').classList.add('opacity-0')
    }, 2000);
    setTimeout(() => {
        document.getElementById('open').classList.remove('hidden')
        document.getElementById('open').classList.remove('opacity-0')
        document.getElementById('done').classList.add('hidden')
    }, 2150);
}

function send_inquiry(){
    var name = document.getElementById('fn')
    var email = document.getElementById('ewp')
    var msg = document.getElementById('msg')
    if(!name.value){
        name.style.borderColor = '#ff0000'
    }
    else{
        name.style.borderColor = '#000000'
        if(!email.value){
            email.style.borderColor = '#ff0000'
        }
        else{
            email.style.borderColor = '#000000'
            if(!msg.value){
                msg.style.borderColor = '#ff0000'
            }
            else{
                msg.style.borderColor = '#000000'
                const form_url = `https://docs.google.com/forms/d/e/1FAIpQLSd5cn-GOgeEWHCExdPXmZ7Vhsr5tytEcGZgxxiGZjFxhLukUA/formResponse?entry.141144960=${name.value}&entry.1071902948=${email.value}&entry.280303796=${msg.value}`
                fetch(form_url)
                post_submit()
            }
        }
    }
}