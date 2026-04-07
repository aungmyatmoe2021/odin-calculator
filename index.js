document.onreadystatechange = function() {
    if(document.readyState === "complete"){
        function eventOnKeyUp( caller ) {
            var value = caller.value.replace( /[^\d\.]/g, "" );
            value = value.match( /\d+(\.\d?)?/ );
            value = (value)? value[0] : "";
            if ( caller.value != value ) {
                caller.value = value;
            }
        }

        let values = ['display','hintDisplay',
                        'one','two','three','four','five',
                        'six','seven','eight','nine','zero','decimal',
                        'add','subtract','multiply','divide','answer','clear'];
        const valueObjs = [];
        
        values.forEach(value => {
            valueObjs.push(document.getElementById(value));
        });

        valueObjs.forEach(valueObj=> {
            valueObj.onclick = function(){
                document.getElementById('display').onkeyup = function(){eventOnKeyUp(this)};
                document.getElementById('display').onclick = function(){return};
                document.getElementById('hintDisplay').onclick = function(){return};
                document.getElementById('clear').onclick = function(){
                    document.getElementById('display').value = "";
                    document.getElementById('hintDisplay').value = "";
                    document.getElementById('historyDisplay').value = "";
                };
                if (document.getElementById('display').value !== ''){
                    document.getElementById('display').value = document.getElementById('display').value + valueObj.value;
                }else{
                    document.getElementById('display').value = valueObj.value;
                } 
                if(valueObj.value === "+" || valueObj.value === "-" || valueObj.value === "*" || valueObj.value === "/"){
                    document.getElementById('hintDisplay').value = document.getElementById('hintDisplay').value + document.getElementById('display').value;
                    document.getElementById('display').value = "";
                }


                if(valueObj.value === "="){
                    document.getElementById('hintDisplay').value = document.getElementById('hintDisplay').value + document.getElementById('display').value;
                    document.getElementById('hintDisplay').value=document.getElementById('hintDisplay').value.replace("=","");
                    document.getElementById('display').value = "";
                    if(document.getElementById('hintDisplay').value.includes('+')){
                        let values = document.getElementById('hintDisplay').value.split('+');
                        let total = 0;
                        values.forEach(value => {
                            if (value.includes("-")){
                                let numbers = value.split("-");
                                total += numbers.reduce((prev,current)=> Number(prev) - Number(current));
                                return;
                            }
                            if (value.includes("*")){
                                let numbers = value.split("*");
                                total += numbers.reduce((prev,current)=> Number(prev) * Number(current));
                                return;
                            }
                            if (value.includes("/")){
                                let numbers = value.split("/");
                                total += numbers.reduce((prev,current)=> Number(prev) / Number(current));
                                return;
                            }
                            total += Number(value);   
                        });
                        document.getElementById('display').value = total;
                        document.getElementById('historyDisplay').value = document.getElementById('hintDisplay').value + "=" + document.getElementById('display').value;
                        document.getElementById('hintDisplay').value = "";
                        document.getElementById('display').value = "";
                    }
                    if(document.getElementById('hintDisplay').value.includes('-')){
                        let values = document.getElementById('hintDisplay').value.split('-');
                        let total = 0;
                        values.forEach(value => {
                            if (value.includes("+")){
                                let numbers = value.split("+");
                                total += numbers.reduce((prev,current)=> Number(prev) + Number(current));
                                return;
                            }
                            if (value.includes("*")){
                                let numbers = value.split("*");
                                total += numbers.reduce((prev,current)=> Number(prev) * Number(current));
                                return;
                            }
                            if (value.includes("/")){
                                let numbers = value.split("/");
                                total += numbers.reduce((prev,current)=> Number(prev) / Number(current));
                                return;
                            }
                            total += Number(value);   
                        });
                        document.getElementById('display').value = total;
                        document.getElementById('historyDisplay').value = document.getElementById('hintDisplay').value + "=" + document.getElementById('display').value;
                        document.getElementById('hintDisplay').value = "";
                        document.getElementById('display').value = "";
                    }
                    if(document.getElementById('hintDisplay').value.includes('*')){
                        let values = document.getElementById('hintDisplay').value.split('*');
                        let total = 0;
                        values.forEach(value => {
                            if (value.includes("+")){
                                let numbers = value.split("+");
                                total += numbers.reduce((prev,current)=> Number(prev) + Number(current));
                                return;
                            }
                            if (value.includes("-")){
                                let numbers = value.split("-");
                                total += numbers.reduce((prev,current)=> Number(prev) - Number(current));
                                return;
                            }
                            if (value.includes("/")){
                                let numbers = value.split("/");
                                total += numbers.reduce((prev,current)=> Number(prev) / Number(current));
                                return;
                            }
                            total += Number(value);   
                        });
                        document.getElementById('display').value = values.reduce((prev,current)=> Number(prev) * Number(current));
                        document.getElementById('historyDisplay').value = document.getElementById('hintDisplay').value + "=" + document.getElementById('display').value;
                        document.getElementById('hintDisplay').value = "";
                        document.getElementById('display').value = "";
                    }
                    if(document.getElementById('hintDisplay').value.includes('/')){
                        let values = document.getElementById('hintDisplay').value.split('/');
                        let total = 0;
                        values.forEach(value => {
                            if (value.includes("+")){
                                let numbers = value.split("+");
                                total += numbers.reduce((prev,current)=> Number(prev) + Number(current));
                                return;
                            }
                            if (value.includes("-")){
                                let numbers = value.split("-");
                                total += numbers.reduce((prev,current)=> Number(prev) - Number(current));
                                return;
                            }
                            if (value.includes("*")){
                                let numbers = value.split("*");
                                total += numbers.reduce((prev,current)=> Number(prev) * Number(current));
                                return;
                            }
                            total += Number(value);   
                        });
                        document.getElementById('display').value = total;
                        document.getElementById('historyDisplay').value = document.getElementById('hintDisplay').value + "=" + document.getElementById('display').value;
                        document.getElementById('hintDisplay').value = "";
                        document.getElementById('display').value = "";
                    }
                }
            }
        });
    }
}