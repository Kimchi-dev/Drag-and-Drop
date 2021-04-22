const dropHandler = e => {

    $('.sub-container').removeClass('dragged')
    console.log('File(s) dropped')

    //기본동작 막기 (파일열림 방지)
    e.preventDefault()
    //파일을 허용할수있는 dataTransfer 인터페이스 사용
    let items = e.dataTransfer.items
    if(items){
        for(var i = 0; i < items.length;i++){
            if(items[i].kind === 'file'){
                var file = items[i].getAsFile()

                console.log('... file['+ i +'].name = ' + file.name)
                console.log('... file['+ i +'].size = ' + file.size + ' B')
                console.log('... file['+ i +'].type = ' + file.type)
                console.log('... file['+ i +'].lastModifiedDate = ' + file.lastModifiedDate)
                console.log('... file['+ i +'].webkitRelativePath = ' + file.webkitRelativePath)
                console.log('... file['+ i +'].lastModified = ' + file.lastModified)
                $('#name').text(file.name)
                $('#size').text(file.size +'Byte')
                $('#type').text(file.type)
                $('#lastModifiedDate').text(file.lastModifiedDate)
                $('#lastModified').text(file.lastModified)

            }
        }
    } else {
        for(var i = 0; i < e.dataTransfer.files.length; i++) {
            cnosole.log('file['+ i + '].name = '+ e.dataTransfer.files[i].name)
        }
    }
}

const dragOverHandler = e => {
    console.log('File(s) in drop zone')
    //기본 dragover 의 동작을 막아야 해당 element 위에서 drop을 위한 drag가 가능하다.
    e.preventDefault()

}

const dragEnterHandler = e => {
    console.log('drag entered')
    $('.sub-container').addClass('dragged')
    e.preventDefault()
}

const dragLeaveHandler = e => {
    console.log('drag end')
    $('.sub-container').removeClass('dragged')
}

