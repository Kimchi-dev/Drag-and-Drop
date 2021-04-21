
$(function(){
    var dropZone = $('.sub-container')

    dropZone.on('dragenter', e => {
        e.stopPropagation()
        e.preventDefault()

        $(".sub-container").addClass('draged')
    })

    dropZone.on('dragleave', e => {
        e.stopPropagation()
        e.preventDefault()
        $(".sub-container").removeClass('draged')
    })
    dropZone.on('dragover', e => {
        e.stopPropagation()
        e.preventDefault()
        $(".sub-container").addClass('draged')
    })
    dropZone.on('drop', e => {
        e.preventDefault()

        $(".sub-container").removeClass('draged')

        var files = e.originalEvent.dataTransfer.files
        console.log(files)

    })
})




