<html>
    <head>
        <script>
            function addNum()
            {
                fn=document.getElementById("txtFN").value;
                sn=document.getElementById("txtSN").value;
                result = parseFloat(fn)+parseFloat(sn);
                document.getElementById("txtResult").value=result;
            }
            function subNum()
            {
                fn=document.getElementById("txtFN").value;
                sn=document.getElementById("txtSN").value;
                result = parseInt(fn)-parseInt(sn);
                document.getElementById("txtResult").value=result;
            }
            function divNum()
            {
                fn=document.getElementById("txtFN").value;
                sn=document.getElementById("txtSN").value;
                result = parseInt(fn)/parseInt(sn);
                document.getElementById("txtResult").value=result;
            }
            function mulNum()
            {
                fn=document.getElementById("txtFN").value;
                sn=document.getElementById("txtSN").value;
                result = parseInt(fn)*parseInt(sn);
                document.getElementById("txtResult").value=result;
            }
            function CFunction()
            {
                document.getElementById("txtFN").value=0;
                document.getElementById("txtSN").value=0;
                document.getElementById("txtResult").value=result=0;
            }
            function OffFunction()
            {
                document.getElementById("txtFN").value="";
                document.getElementById("txtSN").value="";
                document.getElementById("txtResult").value=result="";
            }
        </script>
    </head>
    <body>
        <h1> <I> <u> Raghava's Calculator </u> </I></h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" onclick="CFunction()" id="btnC" value="  C  ">

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" id="btnOff" onclick="OffFunction()" value="  Off  ">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="text" disabled=true style="background-color:rgb(126, 181, 185)" id="txtResult">
    <br><br>
    First Number:
    <input type="number" id="txtFN"><br><br>
    second Number:
    <input type="number" id="txtSN"><br><br>

    <input type="button" onclick="addNum()" id="btnAdd" value="  +  ">
    &nbsp; &nbsp; &nbsp; &nbsp;
    <input type="button" onclick="subNum()" id="btnSub" value="   -   ">
    &nbsp; &nbsp; &nbsp; &nbsp;
    <input type="button" onclick="mulNum()" id="btnMul" value="   *   ">
    &nbsp; &nbsp; &nbsp; &nbsp;
    <input type="button"  onclick="divNum()"id="btnDiv" value="   /   ">
    &nbsp; &nbsp; &nbsp; &nbsp;
    </body>
</html>