$(document).ready(function () {
            renderCurrentTime();
            renderQuote();
        });


function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,5);
            $('#시간').text(datetime);
        });
}


        function renderQuote() {
            let url = `https://api.quotable.io/random`;
            fetch(url)
                .then(res => res.json()).then((data) => {
                    let content = `" ${data['content']} "`;
                    let author = `- ${data['author']} -`;
                    $('#명언').text(content);
                    $('#명언자').text(author);
                });
        }