    window.onload = function getData() {

            var req = new XMLHttpRequest();
            req.open("get", "/api/attractions?page=0");
            req.onload = function () {
                //console.log(this.responseText);
                //確定抓到資料了
                var data = JSON.parse(this.responseText);
                console.log(data.data)

                //當作最外面放圖片跟文字的箱子
                //console.log(data.data[0].images)
                //發現印出來的網址型態是字串
                //console.log(typeof(data.data[0].images))
                //先把字串切割變成陣列
                for(i=0;i<data.data.length;i++){
                var imagesUrl =data.data[i].images.split(",")
                console.log(imagesUrl[1])

                    var main=document.getElementById("bigbox");
                    var picture =document.createElement("img");
                    // picture.src=imagesUrl[1];
                    picture.src="http://"+imagesUrl[1].split("'")[1];
                    picture.classList.add("picture");
                    main.appendChild(picture);

                };
            };//onload 資料回傳可以方便弄資料
            req.send();//送出連線
        };

    