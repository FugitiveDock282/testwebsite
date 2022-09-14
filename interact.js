if(document.readyState=='loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

noOfTimesClicked=0
function ready() {
    buttons = document.getElementsByClassName('btn')
    buttons[1].addEventListener('click', modifyButton1)
    buttons[0].addEventListener('click', modifyButton0)

    var inputValue=''
    var textinput=document.getElementsByClassName('msg-input')
    textinput[0].addEventListener('input',function(event){
        var stringinput=event.target.value
        inputValue=stringinput
    })
    var inputButton=document.getElementsByClassName('input-btn')
    inputButton[0].addEventListener('click', function(){
        const para=document.createElement('p')
        const node=document.createTextNode('Ok, no offense but your input "'+inputValue+'" is kinda.. meh, ngl.')
        para.appendChild(node)
        const element=document.getElementsByClassName('input-div')
        element[0].appendChild(para)
        textinput[0].value=''
    })
}

function modifyButton1(event){
    targetButton=event.target
    if(noOfTimesClicked==0){
        targetButton.innerHTML='OK.'
    }
    if(noOfTimesClicked>3){
        targetButton.innerHTML="I GET IT, NOW STOP CLICKING ME!"
    }
    noOfTimesClicked++
}

function modifyButton0(event){
    targetButton=event.target
    targetButton.innerHTML='MY MAN!'
}
