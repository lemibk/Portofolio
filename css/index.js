
function openside() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closeside() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function elementclose() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function droplangon() {
    const drop = document.querySelector('.lang-logo')
    drop.style.visibility = 'visible'
    const iconsson = document.querySelector('.drops-1')
    iconsson.style.visibility = 'hidden'
    const iconss = document.querySelector('.drops')
    iconss.style.visibility = 'visible'

}
function droplangoff() {

    const drop = document.querySelector('.lang-logo')
    drop.style.visibility = 'hidden'
    const iconsson = document.querySelector('.drops-1')
    iconsson.style.visibility = 'visible'
    const iconss = document.querySelector('.drops')
    iconss.style.visibility = 'hidden'


}

function see() {
    alert("hsh")
}
function seeproject() {
    const seeproject = document.querySelector('.popup')
    seeproject.style.visibility = 'visible'

    seeproject.style.width = '50%'


}
function closeproject() {
    const seeproject = document.querySelector('.popup')
    seeproject.style.visibility = 'hidden'

    seeproject.style.width = '0%'

}
