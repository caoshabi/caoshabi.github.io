        function show() {
            let v1 = parseInt(document.getElementById('v1').value);
            let v2 = parseInt(document.getElementById('v2').value);
            let v3 = parseInt(document.getElementById('v3').value);
            let aver = (v1 + v2 + v3) / 3;
            alert("平均值为：" + aver);
        }