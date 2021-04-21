
//dragEnter
const dragEnterHandler = (e) => {
    console.log("enterd file")

    $(".sub-container").addClass("draged")
}

//dragLeave
const dragLeaveHandler = (e) => {

    $(".sub-container").removeClass("draged")
}

const dropHandler = (e) => {
    e.preventDefault()
    $(".sub-container").removeClass("draged")

    var files = e.originalEvent.dataTransfer.files
    console.log(files)
}
