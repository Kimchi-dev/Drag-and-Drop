
//dragEnter
const dragEnterHandler = (e) => {
    console.log("enterd file")

    $(".sub-container").addClass("draged")
}

//dragLeave
const dragLeaveHandler = (e) => {

    $(".sub-container").removeClass("draged")
}

const dragOverHandler = (e) => {
    alert("This is drag Over bixxh!")
    e.preventDefault()
}
const dropHandler = (e) => {
    e.preventDefault()
    $(".sub-container").removeClass("draged")

    var files = e.originalEvent.dataTransfer.files
    console.log(files)
}
