var create_container = document.createElement('div');
create_container.setAttribute("class","container");

var row = document.createElement("div")
row.setAttribute("class","row")

create_container.append(row);


function bible_details(){
    let data = fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10")
        .then((data)=>data.json())
            .then((data)=>{
                var translation = data.translation_name;
                console.log(translation);
                var reference = data.reference;
                row.innerHTML+=`<div class="row">
                <div class="heating-container">
                    <div class="heating-title">
                        <label class="heading">${"BIBLE"}</label>
                    </div>
                    <div class="title">
                        <label class="head">${translation}</label>
                        <label class="head">${reference}</label>
                    </div>
                </div>
                </div>`;
                document.body.append(create_container);
                var verse = data.verses;
                for(var i in verse){
                    var book_name = verse[i].book_name;
                    var chapter = verse[i].chapter;
                    var verses_no = verse[i].verse;
                    var text = verse[i].text; 
                    // console.log(varses);
                    row.innerHTML += ` <div class="col-lg-4, col-sm-12" id="card">
                    <label for="book_name" class="details">Book Name : ${book_name}</label>
                    <label for="chapter" class="details">Chapter : ${chapter}</label>
                    <label for="verses_no" class="details">Verses No : ${verses_no}</label>
                    <label for="verses" class="details">Verses : ${text}</label>
                    </div>`;
                    document.body.append(create_container);
                }
            })
}

async function bible(){
    try{
        var bible_data = await bible_details();
    }catch(e){
        console.error(e);
    }
}

bible()