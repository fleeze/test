const ws = new WebSocket('ws://localhost:30002');
ws.addEventListener('message', e => {
    console.log('e.data', e.data);
})
function runRequest() {
    console.log('document.getElementById(\'input\').value', document.getElementById('input').value)
    ws.send(document.getElementById('input').value)
}