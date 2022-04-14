function ajaxPromiseHelper(url,method="GET"){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) =>{
            const ajax = e.target;

            if(ajax.readyState == XMLHttpRequest.DONE){
                if(ajax.status == 200){
                    const json = JSON.parse(ajax.responseText);
                    resolve(json);
                }else{
                    const s = parseInt(ajax.status/ 100);
                    let msg = null;
                    if(s == 4){
                        msg = "요청주소가 잘못되었습니다.";

                    }else if (s == 5){
                        msg ="서버의 응답이 없습니다.";
                    }else{
                        msg = "요청에 실패 했습니다.";
                    }
                    reject({state : ajax.status, text: ajax.statusText,msg :msg});
                }
            }//end if
        };
        xhr.open(method,url);
        xhr.send();
    });
}